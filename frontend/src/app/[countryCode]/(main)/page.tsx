import { Metadata } from "next"
import CategoryShowcase from "@modules/home/components/category-showcase"
import TrustSection from "@modules/home/components/trust-section"
import CTASection from "@modules/home/components/cta-section"
import HomeHero from "@modules/home/components/home-hero"
import FirstEightProducts from "@modules/home/components/first-eight-products"
import ReviewSection from "@modules/home/components/review-section"
import { listCollections } from "@lib/data/collections"
import { listCategories, filterCategoriesWithProducts } from "@lib/data/categories"
import { getRegion } from "@lib/data/regions"
import Features from "@modules/home/components/features"
import FeaturesTwo from "@modules/home/components/features-two"
import NewProducts from "@modules/home/components/new-products"
import AboutAlAria from "@modules/home/components/about-al-aria"

export const revalidate = 300 // Revalidate every 5 minutes

export const metadata: Metadata = {
  title: "Al-Aria Perfume Gallery",
  description:
    "Al-Aria Perfume Gallery offers a curated collection of premium and authentic perfumes for men and women. Discover luxury fragrances, long-lasting scents, and exclusive collections with fast shipping and secure online payments.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)
  const { collections } = await listCollections({
    fields: "id, handle, title",
  })
  const allCategories = await listCategories()
  const categories = filterCategoriesWithProducts(allCategories)

  if (!collections || !region || !categories || categories.length === 0) {
    return null
  }

  return (
    <div className="w-full">
      <section data-testid="section-hero">
        <HomeHero />
      </section>
      <section data-testid="section-categories">
        <CategoryShowcase categories={categories} countryCode={countryCode} />
      </section>
      <section data-testid="section-about-cosmecos">
        <AboutAlAria />
      </section>
      <section data-testid="section-products">
        <FirstEightProducts countryCode={countryCode} />
      </section>
      <section data-testid="section-features">
        <Features/>
      </section>
      <section data-testid="section-features-two">
        <FeaturesTwo/>
      </section>
      <section data-testid="section-products">
        <NewProducts countryCode={countryCode} />
      </section>
      <section data-testid="section-reviews">
        <ReviewSection />
      </section>
      <section data-testid="section-trust">
        <TrustSection />
      </section>
      <section data-testid="section-cta">
        <CTASection />
      </section>
    </div>
  )
}
