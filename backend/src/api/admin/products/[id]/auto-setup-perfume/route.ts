import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { MedusaError } from "@medusajs/framework/utils"

export async function POST(
    req: MedusaRequest,
    res: MedusaResponse
): Promise<void> {
    const productId = req.params.id
    const { price_per_ml, bottle_prices } = req.body as {
        price_per_ml: number
        bottle_prices: {
            "Type 1": number
            "Type 2": number
            "Type 3": number
        }
    }

    try {
        // Validate inputs
        if (!price_per_ml || !bottle_prices) {
            throw new MedusaError(
                MedusaError.Types.INVALID_DATA,
                "Missing required fields: price_per_ml and bottle_prices"
            )
        }

        const query = req.scope.resolve("query")

        // Fetch product and region in parallel
        const [{ data: products }, { data: regions }] = await Promise.all([
            query.graph({
                entity: "product",
                fields: ["id", "title", "options.*", "variants.*", "metadata"],
                filters: { id: productId },
            }),
            query.graph({
                entity: "region",
                fields: ["id", "currency_code"],
            }),
        ])

        const product = products?.[0]
        const defaultRegion = regions?.[0]

        if (!product) {
            throw new MedusaError(
                MedusaError.Types.NOT_FOUND,
                "Product not found"
            )
        }

        if (!defaultRegion) {
            throw new MedusaError(
                MedusaError.Types.NOT_FOUND,
                "No region found for pricing"
            )
        }

        // Respond immediately
        res.json({
            message: "Setup started in background",
            status: "processing",
            product_id: productId,
        })

            // Continue processing in background
            ; (async () => {
                try {
                    // Parallel deletion
                    const deletionPromises: Promise<any>[] = []

                    if (product.variants && product.variants.length > 0) {
                        const { deleteProductVariantsWorkflow } = await import(
                            "@medusajs/core-flows"
                        )
                        deletionPromises.push(
                            deleteProductVariantsWorkflow(req.scope).run({
                                input: { ids: product.variants.map((v: any) => v.id) },
                            })
                        )
                    }

                    if (product.options && product.options.length > 0) {
                        const { deleteProductOptionsWorkflow } = await import(
                            "@medusajs/core-flows"
                        )
                        deletionPromises.push(
                            deleteProductOptionsWorkflow(req.scope).run({
                                input: { ids: product.options.map((o: any) => o.id) },
                            })
                        )
                    }

                    if (deletionPromises.length > 0) {
                        await Promise.all(deletionPromises)
                    }

                    // Define concentrations to store in metadata
                    const concentrations = [
                        "Eau Fraiche (1-3%)",
                        "Eau de Cologne (2-5%)",
                        "Eau de Toilette (4-15%)",
                        "Eau de Parfum (15-20%)",
                        "Perfume (40-60%)",
                    ]

                    // Update product metadata with concentrations
                    const { updateProductsWorkflow } = await import(
                        "@medusajs/core-flows"
                    )

                    await updateProductsWorkflow(req.scope).run({
                        input: {
                            products: [
                                {
                                    id: productId,
                                    metadata: {
                                        ...product.metadata,
                                        concentrations: concentrations,
                                        price_per_ml: price_per_ml,
                                    },
                                },
                            ],
                        },
                    })

                    // Create only Volume and Bottle options (12 variants total)
                    const { createProductOptionsWorkflow } = await import(
                        "@medusajs/core-flows"
                    )

                    const optionsResult = await createProductOptionsWorkflow(req.scope).run({
                        input: {
                            product_options: [
                                {
                                    product_id: productId,
                                    title: "Volume",
                                    values: ["15mL", "30mL", "50mL", "100mL"],
                                },
                                {
                                    product_id: productId,
                                    title: "Bottle",
                                    values: ["Type 1", "Type 2", "Type 3"],
                                },
                            ],
                        },
                    })

                    const createdOptions = optionsResult.result || []
                    const volumeOption = createdOptions.find((o: any) => o.title === "Volume")
                    const bottleOption = createdOptions.find((o: any) => o.title === "Bottle")

                    if (!volumeOption || !bottleOption) {
                        throw new Error("Failed to create product options")
                    }

                    // Define volumes
                    const volumes = [
                        { value: "15mL", ml: 15 },
                        { value: "30mL", ml: 30 },
                        { value: "50mL", ml: 50 },
                        { value: "100mL", ml: 100 },
                    ]

                    const bottles = ["Type 1", "Type 2", "Type 3"]

                    // Create 12 variants (4 volumes × 3 bottles)
                    const variantsToCreate: any[] = []
                    let variantCounter = 0

                    for (const volume of volumes) {
                        for (const bottle of bottles) {
                            const bottlePrice = bottle_prices[bottle as keyof typeof bottle_prices]
                            const perfumePrice = volume.ml * price_per_ml
                            const totalPrice = perfumePrice + bottlePrice

                            variantCounter++

                            variantsToCreate.push({
                                product_id: productId,
                                title: `${volume.value} - ${bottle}`,
                                sku: `PERF-${volume.value}-${bottle.replace(' ', '')}-${Date.now()}-${variantCounter}`,
                                manage_inventory: false,
                                options: {
                                    [volumeOption.title]: volume.value,
                                    [bottleOption.title]: bottle,
                                },
                                prices: [
                                    {
                                        amount: Math.round(totalPrice),
                                        currency_code: defaultRegion.currency_code,
                                    },
                                ],
                            })
                        }
                    }

                    // Create all variants
                    const { createProductVariantsWorkflow } = await import(
                        "@medusajs/core-flows"
                    )

                    await createProductVariantsWorkflow(req.scope).run({
                        input: {
                            product_variants: variantsToCreate,
                        },
                    })

                    console.log(`✅ Successfully created ${variantsToCreate.length} variants for product ${productId}`)
                    console.log(`✅ Stored ${concentrations.length} concentration options in metadata`)
                } catch (error) {
                    console.error("Error in background auto-setup:", error)
                }
            })()

    } catch (error) {
        console.error("Error in auto-setup-perfume:", error)
        res.status(500).json({
            message: "Failed to setup perfume product",
            error: error instanceof Error ? error.message : "Unknown error",
        })
    }
}
