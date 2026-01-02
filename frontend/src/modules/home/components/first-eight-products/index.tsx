"use server"

import { getRegion } from "@lib/data/regions"
import { listProductsWithSort } from "@lib/data/products"
import FirstEightProductsClient from "./first-eight-products-client"

interface FirstEightProductsProps {
  countryCode: string
}

export default async function FirstEightProducts({
  countryCode = "US",
}: FirstEightProductsProps) {
  try {
    const region = await getRegion(countryCode)

    if (!region) {
      return (
        <section className="relative w-full py-16 small:py-20 medium:py-24 overflow-hidden">
          <div className="content-container text-center">
            <h2 className="text-3xl font-bold text-grey-90 mb-4">Our Products</h2>
            <p className="text-grey-70">Unable to load products at this time.</p>
          </div>
        </section>
      )
    }

    const {
      response: { products },
    } = await listProductsWithSort({
      page: 1,
      sortBy: "created_at",
      countryCode,
      queryParams: {
        limit: 8,
      },
    })

    return (
      <FirstEightProductsClient products={products} region={region} />
    )
  } catch (error) {
    console.error("Error loading first eight products:", error)
    return (
      <section className="relative w-full py-16 small:py-20 medium:py-24 overflow-hidden">
        <div className="content-container text-center">
          <h2 className="text-3xl font-bold text-grey-90 mb-4">Our Products</h2>
          <p className="text-grey-70">Unable to load products at this time.</p>
        </div>
      </section>
    )
  }
}
