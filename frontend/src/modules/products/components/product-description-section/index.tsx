"use client"

import ReactMarkdown from "react-markdown"
import { HttpTypes } from "@medusajs/types"
import ProductTabs from "../product-tabs"
import ProductDescriptionTab from "../product-tabs"

interface ProductDescriptionSectionProps {
  product: HttpTypes.StoreProduct
}

export default function ProductDescriptionSection({
  product,
}: ProductDescriptionSectionProps) {
  // Check for subtitle in multiple possible locations
  const subtitle = (product as any).subtitle || product.metadata?.subtitle

  if (!subtitle) {
    return null
  }

  return (
    <div className="w-full border-t border-slate-200">
      <ProductDescriptionTab product={product} />
    </div>
  )
}
