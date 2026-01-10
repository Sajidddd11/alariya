import React, { Suspense } from "react"
import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import ProductDescriptionSection from "@modules/products/components/product-description-section"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"
import ProductActionsWrapper from "./product-actions-wrapper"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
  images: HttpTypes.StoreProductImage[]
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
  images,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      {/* Breadcrumb Bar */}
      <div className="bg-[#EBF4F4] border-b border-[#339994]/20">
        <div className="content-container py-4">
          <nav className="flex items-center gap-2 text-sm text-slate-600">
            <a href="/" className="hover:text-[#339994] transition-colors">Home</a>
            <span>/</span>
            <a href="/store" className="hover:text-[#339994] transition-colors">Store</a>
            {product.collection && (
              <>
                <span>/</span>
                <a href={`/collections/${product.collection.handle}`} className="hover:text-[#339994] transition-colors">
                  {product.collection.title}
                </a>
              </>
            )}
            <span>/</span>
            <span className="text-[#339994] font-medium">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="bg-white">
        <div className="content-container py-4 small:py-6">
          <div className="grid grid-cols-1 large:grid-cols-12 gap-6 small:gap-8">

            {/* Left Column - Image Gallery + Short Description (Spans 7 columns) */}
            <div className="large:col-span-7 space-y-4">
              {/* Image Gallery */}
              <div>
                <div className="bg-[#EBF4F4]/30 p-4 small:p-6">
                  <ImageGallery images={images} />
                </div>
              </div>

              {/* Short Description */}
              <div className="bg-white border border-gray-200 p-4">
                <h3 className="text-base font-semibold text-[#339994] mb-3">About This Fragrance</h3>
                <ProductDescriptionSection product={product} />
              </div>
            </div>

            {/* Right Column - Product Details (Spans 5 columns) */}
            <div className="large:col-span-5 space-y-4">

              {/* Product Title & Price */}
              <div className="border-b border-gray-200 pb-4">
                <ProductInfo product={product} />
              </div>

              {/* Add to Cart Section - Priority Position */}
              <div className="bg-[#EBF4F4]/30 p-4 border-2 border-[#339994]/20">
                <ProductOnboardingCta />
                <Suspense
                  fallback={
                    <ProductActions
                      disabled={true}
                      product={product}
                      region={region}
                    />
                  }
                >
                  <ProductActionsWrapper id={product.id} region={region} />
                </Suspense>
              </div>

              {/* Product Highlights - Compact Version */}
              <div className="bg-white border border-gray-200 p-4 space-y-2">
                <h3 className="text-sm font-semibold text-[#339994] mb-2">Product Highlights</h3>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#339994] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-gray-700"><span className="font-medium">100% Authentic</span> - Genuine product</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#339994] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-gray-700"><span className="font-medium">Long-Lasting</span> - 8-12 hours</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#339994] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-gray-700"><span className="font-medium">Fast Delivery</span> - Across Bangladesh</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges - Compact */}
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-gray-50 border border-gray-200">
                  <svg className="w-6 h-6 text-[#339994] mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <p className="text-xs font-semibold text-gray-700">Secure Payment</p>
                </div>
                <div className="text-center p-3 bg-gray-50 border border-gray-200">
                  <svg className="w-6 h-6 text-[#339994] mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                  <p className="text-xs font-semibold text-gray-700">Easy Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description Section */}
      <section className="bg-[#EBF4F4]/30 border-y border-[#339994]/20">
        <div className="content-container py-12 small:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl small:text-3xl font-bold text-[#339994] font-quentin">Product Details</h2>
            </div>
            <ProductTabs product={product} />
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-[#EBF4F4]/50 border-t border-[#339994]/20">
        <div className="content-container py-12 small:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl small:text-3xl font-bold text-[#339994] mb-3">You May Also Like</h2>
            <div className="w-20 h-1 bg-[#339994] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore more captivating fragrances from our exclusive collection
            </p>
          </div>
          <Suspense fallback={<SkeletonRelatedProducts />}>
            <RelatedProducts product={product} countryCode={countryCode} />
          </Suspense>
        </div>
      </section>
    </>
  )
}

export default ProductTemplate
