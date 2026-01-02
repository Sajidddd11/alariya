"use client"

import { useRef, useState, useEffect } from "react"
import ProductPreview from "@modules/products/components/product-preview"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

interface FirstEightProductsClientProps {
  products: HttpTypes.StoreProduct[]
  region: HttpTypes.StoreRegion
}

export default function FirstEightProductsClient({
  products,
  region,
}: FirstEightProductsClientProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative max-w-6xl mx-auto w-full py-16 small:py-20 medium:py-24 overflow-hidden"
    >
      <div className="content-container">
        {/* Header Section */}
        <div className="text-center mb-12 small:mb-16">
          <div
            className={`transition-all duration-1000 ${isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            <h2 className="text-4xl small:text-5xl medium:text-6xl font-quentin text-[#339994] mb-3">
              Best Products
            </h2>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            <h1 className="text-2xl small:text-6xl text-grey-70 font-thin mb-3">
              BEST SELLERS PRODUCTS
            </h1>
            <p className="text-sm small:text-lg text-slate-400 font-medium small:font-semibold max-w-2xl mx-auto">
              The stylish and organized cosmetic products
            </p>
          </div>
        </div>

        {/* Products Grid */}
        {products && products.length > 0 ? (
          <div className="mb-12">
            <ul
              className="columns-2 small:grid small:grid-cols-3 medium:grid-cols-4 gap-2 small:gap-6"
              data-testid="home-products-list"
            >
              {products.map((product: HttpTypes.StoreProduct, index: number) => {
                return (
                  <li
                    key={product.id}
                    className={`break-inside-avoid mb-2 small:mb-0 transition-all duration-700 ${isInView
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                      }`}
                    style={{
                      transitionDelay: isInView ? `${index * 100}ms` : "0ms",
                    }}
                  >
                    <ProductPreview product={product} region={region} />
                  </li>
                )
              })}
            </ul>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-grey-70 text-lg">
              No products available at the moment.
            </p>
          </div>
        )}

        {/* EXPLORE MORE Button */}
        <div className="flex justify-center">
          <div
            className={`transition-all duration-1000 delay-1000 ${isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >

            <LocalizedClientLink
              href="/store"
              className="btn-unified inline-block px-6 small:px-8 py-2 small:py-3 text-grey-90 font-semibold relative z-10"
            >
              <span className="relative z-10">VIEW ALL PRODUCTS</span>
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </section>
  )
}
