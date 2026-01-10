"use client"

import { addToCart, clearCart } from "@lib/data/cart"
import { useIntersection } from "@lib/hooks/use-in-view"
import { HttpTypes } from "@medusajs/types"
import { Button } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"
import OptionRenderer from "@modules/products/components/option-renderer"
import QuantitySelector from "@modules/products/components/quantity-selector"
import ColorSwatchSelector from "@modules/products/components/color-swatch-selector"
import ConcentrationSelector from "@modules/products/components/concentration-selector"
import LoadingButton from "@modules/common/components/loading-button"
import { isEqual } from "lodash"
import { useParams, usePathname, useSearchParams } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"
import ProductPrice from "../product-price"
import MobileActions from "./mobile-actions"
import { useRouter } from "next/navigation"

type ProductActionsProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  disabled?: boolean
}

const optionsAsKeymap = (
  variantOptions: HttpTypes.StoreProductVariant["options"]
) => {
  return variantOptions?.reduce((acc: Record<string, string>, varopt: any) => {
    acc[varopt.option_id] = varopt.value
    return acc
  }, {})
}

export default function ProductActions({
  product,
  disabled,
}: ProductActionsProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [options, setOptions] = useState<Record<string, string | undefined>>({})
  const [concentration, setConcentration] = useState<string | undefined>()
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const countryCode = useParams().countryCode as string

  // If there is only 1 variant, preselect the options
  useEffect(() => {
    if (product.variants?.length === 1) {
      const variantOptions = optionsAsKeymap(product.variants[0].options)
      setOptions(variantOptions ?? {})
    }
  }, [product.variants])

  const selectedVariant = useMemo(() => {
    if (!product.variants || product.variants.length === 0) {
      return
    }

    return product.variants.find((v) => {
      const variantOptions = optionsAsKeymap(v.options)
      return isEqual(variantOptions, options)
    })
  }, [product.variants, options])

  // update the options when a variant is selected
  const setOptionValue = (optionId: string, value: string) => {
    setOptions((prev) => ({
      ...prev,
      [optionId]: value,
    }))
  }

  //check if the selected options produce a valid variant
  const isValidVariant = useMemo(() => {
    return product.variants?.some((v) => {
      const variantOptions = optionsAsKeymap(v.options)
      return isEqual(variantOptions, options)
    })
  }, [product.variants, options])

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    const value = isValidVariant ? selectedVariant?.id : null

    if (params.get("v_id") === value) {
      return
    }

    if (value) {
      params.set("v_id", value)
    } else {
      params.delete("v_id")
    }

    router.replace(pathname + "?" + params.toString())
  }, [selectedVariant, isValidVariant])

  // check if the selected variant is in stock
  const inStock = useMemo(() => {
    // If we don't manage inventory, we can always ADD TO CART
    if (selectedVariant && !selectedVariant.manage_inventory) {
      return true
    }

    // If we allow back orders on the variant, we can ADD TO CART
    if (selectedVariant?.allow_backorder) {
      return true
    }

    // If there is inventory available, we can ADD TO CART
    if (
      selectedVariant?.manage_inventory &&
      (selectedVariant?.inventory_quantity || 0) > 0
    ) {
      return true
    }

    // Otherwise, we can't ADD TO CART
    return false
  }, [selectedVariant])

  const actionsRef = useRef<HTMLDivElement>(null)

  const inView = useIntersection(actionsRef, "0px")

  // add the selected variant to the cart
  const handleAddToCart = async () => {
    if (!selectedVariant?.id) return null

    setIsAdding(true)

    await addToCart({
      variantId: selectedVariant.id,
      quantity: quantity,
      countryCode,
    })

    setIsAdding(false)
  }

  // Buy now: clear cart, add this product only, and navigate to checkout
  const handleBuyNow = async () => {
    if (!selectedVariant?.id) return null

    setIsAdding(true)

    // Clear existing cart items first (Buy Now is for this item only)
    await clearCart()

    await addToCart({
      variantId: selectedVariant.id,
      quantity: quantity,
      countryCode,
    })

    setIsAdding(false)

    // Navigate to checkout page with address step open
    router.push(`/${countryCode}/checkout?step=address`)
  }

  // Extract color options if available
  const colorOption = product.options?.find(
    (opt) => opt.title?.toLowerCase() === "color"
  )
  const colorValues = colorOption
    ? product.variants
      ?.flatMap((v) =>
        v.options
          ?.filter((opt) => opt.option_id === colorOption.id)
          .map((opt) => ({ id: opt.option_id, value: opt.value }))
      )
      .filter(Boolean)
      .reduce((acc: any[], curr: any) => {
        if (!acc.find((c) => c.value === curr?.value)) {
          acc.push(curr)
        }
        return acc
      }, [])
    : []

  return (
    <>
      <div className="flex flex-col small:gap-y-6" ref={actionsRef}>
        {/* Variant Options */}
        {colorValues && colorValues.length > 0 && (
          <ColorSwatchSelector
            colorOptions={colorValues as any}
            selectedColor={options[colorOption!.id]}
            onColorSelect={setOptionValue}
            disabled={!!disabled || isAdding}
          />
        )}

        {/* Other Options */}
        <div>
          {(product.variants?.length ?? 0) > 1 && (
            <div className="flex flex-col gap-y-4">
              {(product.options || []).map((option) => {
                // Skip color option if already displayed with swatches
                if (colorOption && option.id === colorOption.id) {
                  return null
                }
                return (
                  <div key={option.id}>
                    <OptionRenderer
                      option={{
                        id: option.id,
                        title: option.title || "",
                        values: (option.values || []).map(v => ({
                          id: v.id,
                          value: v.value
                        }))
                      }}
                      selectedValue={options[option.id]}
                      onValueChange={setOptionValue}
                    />
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Price and stock Display */}
        <div className="flex gap-4 items-center">
          <div className=" py-1">
            <ProductPrice product={product} variant={selectedVariant} />
          </div>
          <div>
            {/* Stock Status */}
            {selectedVariant && (
              <div className="text-sm">
                {inStock ? (
                  <p className="text-[#339994] font-medium flex items-center gap-2">
                    <span>✓</span>
                    {selectedVariant.manage_inventory
                      ? `${selectedVariant.inventory_quantity || 0} in stock`
                      : "In stock"}
                  </p>
                ) : (
                  <p className="text-red-600 font-medium">Out of stock</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Concentration from Metadata */}
        {product.metadata?.concentrations && (
          <ConcentrationSelector
            concentrations={product.metadata.concentrations as string[]}
            selectedConcentration={concentration}
            onConcentrationChange={setConcentration}
          />
        )}

        {/* Quantity selector , ADD TO CART, buy now  */}
        <div className="flex flex-col gap-3">

          {/* Quantity Selector */}
          {inStock && selectedVariant && (
            <div className="w-[100px]">
              <QuantitySelector
                quantity={quantity}
                onQuantityChange={setQuantity}
                maxQuantity={selectedVariant.inventory_quantity || 999}
                disabled={!!disabled || isAdding}
              />
            </div>
          )}
          <div className="w-full h-full">
            {/* Action Buttons */}
            <div className="flex flex-col small:flex-row gap-1 xsmall:gap-2 h-full">
              {/* ADD TO CART Button */}
              <Button
                onClick={handleAddToCart}
                disabled={
                  !inStock ||
                  !selectedVariant ||
                  !!disabled ||
                  isAdding ||
                  !isValidVariant
                }
                variant="transparent"
                className="w-full rounded-none text-sm xsmall:text-base py-3 btn-unified-b"
                isLoading={isAdding}
                data-testid="add-product-button"
              >
                <span className="relative z-10">
                  {
                    !selectedVariant
                      ? "SELECT VARIANT"
                      : !inStock || !isValidVariant
                        ? "OUT OF STOCK"
                        : "ADD TO CART"
                  }
                </span>
              </Button>

              {/* Buy Now Button */}
              <Button
                onClick={handleBuyNow}
                disabled={
                  !inStock ||
                  !selectedVariant ||
                  !!disabled ||
                  isAdding ||
                  !isValidVariant
                }
                variant="secondary"
                className="w-full rounded-none text-base font-semibold btn-unified"
                data-testid="buy-now-button"
              >
                <span className="relative z-10">
                  BUY NOW
                </span>
              </Button>
            </div>
          </div>
        </div>



        <MobileActions
          product={product}
          variant={selectedVariant}
          options={options}
          updateOptions={setOptionValue}
          inStock={inStock}
          handleAddToCart={handleAddToCart}
          isAdding={isAdding}
          show={!inView}
          optionsDisabled={!!disabled || isAdding}
        />
      </div>
    </>
  )
}
