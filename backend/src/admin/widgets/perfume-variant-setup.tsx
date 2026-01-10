import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { Container, Button, Heading, Input, Label, toast } from "@medusajs/ui"
import { useState } from "react"
import { Trash, Plus } from "@medusajs/icons"

type BottlePrice = {
    id: string
    name: string
    price: string
}

const PerfumeVariantSetupWidget = ({ data }: { data: any }) => {
    const [isProcessing, setIsProcessing] = useState(false)
    const [pricePerMl, setPricePerMl] = useState("")
    const [bottles, setBottles] = useState<BottlePrice[]>([
        { id: "1", name: "Type 1", price: "" },
        { id: "2", name: "Type 2", price: "" },
        { id: "3", name: "Type 3", price: "" },
    ])

    const productId = data?.id

    const addBottle = () => {
        const newId = (bottles.length + 1).toString()
        setBottles([...bottles, { id: newId, name: `Type ${newId}`, price: "" }])
    }

    const removeBottle = (id: string) => {
        if (bottles.length <= 1) {
            toast.error("Error", {
                description: "At least one bottle type is required",
            })
            return
        }
        setBottles(bottles.filter(b => b.id !== id))
    }

    const updateBottle = (id: string, field: 'name' | 'price', value: string) => {
        setBottles(bottles.map(b =>
            b.id === id ? { ...b, [field]: value } : b
        ))
    }

    const handleAutoSetup = async () => {
        if (!productId) {
            toast.error("Error", {
                description: "Product ID not found",
            })
            return
        }

        // Validate inputs
        if (!pricePerMl) {
            toast.error("Error", {
                description: "Please enter price per mL",
            })
            return
        }

        const invalidBottles = bottles.filter(b => !b.name || !b.price)
        if (invalidBottles.length > 0) {
            toast.error("Error", {
                description: "Please fill in all bottle names and prices",
            })
            return
        }

        const pricePerMlNum = parseFloat(pricePerMl)
        if (isNaN(pricePerMlNum)) {
            toast.error("Error", {
                description: "Please enter valid price per mL",
            })
            return
        }

        // Build bottle prices object
        const bottlePrices: Record<string, number> = {}
        for (const bottle of bottles) {
            const price = parseFloat(bottle.price)
            if (isNaN(price)) {
                toast.error("Error", {
                    description: `Invalid price for ${bottle.name}`,
                })
                return
            }
            bottlePrices[bottle.name] = price
        }

        setIsProcessing(true)

        try {
            const response = await fetch(`/admin/products/${productId}/auto-setup-perfume`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    price_per_ml: pricePerMlNum,
                    bottle_prices: bottlePrices,
                }),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message || "Failed to setup variants")
            }

            await response.json()

            const variantCount = 4 * bottles.length // 4 volumes × bottle count
            toast.success("Setup Started!", {
                description: `Creating ${variantCount} variants in background. Refreshing in 8 seconds...`,
            })

            // Auto-refresh after 8 seconds to show results
            setTimeout(() => {
                window.location.reload()
            }, 8000)
        } catch (error) {
            console.error("Auto-setup error:", error)
            toast.error("Error", {
                description: error instanceof Error ? error.message : "Failed to setup variants",
            })
            setIsProcessing(false)
        }
    }

    return (
        <Container className="divide-y p-0">
            <div className="flex items-center justify-between px-6 py-4">
                <Heading level="h2">Perfume Auto-Setup</Heading>
            </div>
            <div className="px-6 py-4 space-y-4">
                <div>
                    <Label htmlFor="price-per-ml" className="mb-2">Price per mL (BDT)</Label>
                    <Input
                        id="price-per-ml"
                        type="number"
                        step="0.01"
                        placeholder="5.00"
                        value={pricePerMl}
                        onChange={(e) => setPricePerMl(e.target.value)}
                        disabled={isProcessing}
                    />
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label className="text-sm font-semibold">Bottle Types & Prices (BDT)</Label>
                        <Button
                            type="button"
                            variant="transparent"
                            size="small"
                            onClick={addBottle}
                            disabled={isProcessing}
                        >
                            <Plus className="w-4 h-4" />
                            Add Bottle
                        </Button>
                    </div>

                    {bottles.map((bottle) => (
                        <div key={bottle.id} className="flex gap-2 items-start">
                            <div className="flex-1">
                                <Label htmlFor={`bottle-name-${bottle.id}`} className="text-xs text-ui-fg-subtle mb-1">
                                    Bottle Name
                                </Label>
                                <Input
                                    id={`bottle-name-${bottle.id}`}
                                    type="text"
                                    placeholder="Type 1"
                                    value={bottle.name}
                                    onChange={(e) => updateBottle(bottle.id, 'name', e.target.value)}
                                    disabled={isProcessing}
                                />
                            </div>
                            <div className="flex-1">
                                <Label htmlFor={`bottle-price-${bottle.id}`} className="text-xs text-ui-fg-subtle mb-1">
                                    Price
                                </Label>
                                <Input
                                    id={`bottle-price-${bottle.id}`}
                                    type="number"
                                    step="0.01"
                                    placeholder="50.00"
                                    value={bottle.price}
                                    onChange={(e) => updateBottle(bottle.id, 'price', e.target.value)}
                                    disabled={isProcessing}
                                />
                            </div>
                            {bottles.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeBottle(bottle.id)}
                                    disabled={isProcessing}
                                    className="mt-6 p-2 text-ui-fg-subtle hover:text-red-500 transition-colors"
                                    title="Remove bottle"
                                >
                                    <Trash className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                <div className="pt-2">
                    <Button
                        onClick={handleAutoSetup}
                        disabled={isProcessing}
                        variant="primary"
                        className="w-full"
                    >
                        {isProcessing ? "Processing..." : "Auto-Setup Perfume Product"}
                    </Button>
                    <p className="text-xs text-red-500 mt-2">
                        ⚠️ This will delete all existing options and variants
                    </p>
                </div>
            </div>
        </Container>
    )
}

export const config = defineWidgetConfig({
    zone: "product.details.side.after",
})

export default PerfumeVariantSetupWidget
