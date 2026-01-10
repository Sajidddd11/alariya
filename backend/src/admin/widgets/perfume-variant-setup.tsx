import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { Container, Button, Heading, Input, Label, toast } from "@medusajs/ui"
import { useState } from "react"

const PerfumeVariantSetupWidget = ({ data }: { data: any }) => {
    const [isProcessing, setIsProcessing] = useState(false)
    const [pricePerMl, setPricePerMl] = useState("")
    const [bottle1Price, setBottle1Price] = useState("")
    const [bottle2Price, setBottle2Price] = useState("")
    const [bottle3Price, setBottle3Price] = useState("")

    const productId = data?.id

    const handleAutoSetup = async () => {
        if (!productId) {
            toast.error("Error", {
                description: "Product ID not found",
            })
            return
        }

        // Validate inputs
        if (!pricePerMl || !bottle1Price || !bottle2Price || !bottle3Price) {
            toast.error("Error", {
                description: "Please fill in all fields",
            })
            return
        }

        const pricePerMlNum = parseFloat(pricePerMl)
        const bottle1Num = parseFloat(bottle1Price)
        const bottle2Num = parseFloat(bottle2Price)
        const bottle3Num = parseFloat(bottle3Price)

        if (isNaN(pricePerMlNum) || isNaN(bottle1Num) || isNaN(bottle2Num) || isNaN(bottle3Num)) {
            toast.error("Error", {
                description: "Please enter valid numbers",
            })
            return
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
                    bottle_prices: {
                        "Type 1": bottle1Num,
                        "Type 2": bottle2Num,
                        "Type 3": bottle3Num,
                    },
                }),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message || "Failed to setup variants")
            }

            await response.json()

            toast.success("Setup Started!", {
                description: "Creating 60 variants in background. Refreshing in 8 seconds...",
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
                    <Label className="text-sm font-semibold">Bottle Prices (BDT)</Label>

                    <div>
                        <Label htmlFor="bottle1" className="text-xs text-ui-fg-subtle mb-1">Type 1</Label>
                        <Input
                            id="bottle1"
                            type="number"
                            step="0.01"
                            placeholder="50.00"
                            value={bottle1Price}
                            onChange={(e) => setBottle1Price(e.target.value)}
                            disabled={isProcessing}
                        />
                    </div>

                    <div>
                        <Label htmlFor="bottle2" className="text-xs text-ui-fg-subtle mb-1">Type 2</Label>
                        <Input
                            id="bottle2"
                            type="number"
                            step="0.01"
                            placeholder="75.00"
                            value={bottle2Price}
                            onChange={(e) => setBottle2Price(e.target.value)}
                            disabled={isProcessing}
                        />
                    </div>

                    <div>
                        <Label htmlFor="bottle3" className="text-xs text-ui-fg-subtle mb-1">Type 3</Label>
                        <Input
                            id="bottle3"
                            type="number"
                            step="0.01"
                            placeholder="100.00"
                            value={bottle3Price}
                            onChange={(e) => setBottle3Price(e.target.value)}
                            disabled={isProcessing}
                        />
                    </div>
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
                    <p className="text-xs text-ui-fg-subtle mt-2">
                        ✓ Creates/replaces options: Volume, Bottle
                    </p>
                    <p className="text-xs text-ui-fg-subtle">
                        ✓ Creates 12 variants (concentration in metadata)
                    </p>
                    <p className="text-xs text-ui-fg-muted mt-1">
                        ⚡ 5x faster - only 12 variants instead of 60!
                    </p>
                    <p className="text-xs text-red-500 mt-1">
                        ⚠️ Deletes all existing options and variants
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
