import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Zahan Fashion and Lifestyle",
  description: "Discover the story behind Zahan Fashion. We're committed to bringing you the finest quality fashion and lifestyle products.",
}

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-slate-50 text-slate-800 py-20">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl small:text-5xl font-bold mb-6">About Zahan Fashion</h1>
            <p className="text-lg small:text-xl text-slate-500 leading-relaxed">
              Curating timeless style and quality lifestyle products for the modern individual
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 small:py-24 bg-white">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 small:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl small:text-4xl font-bold text-black mb-6">Our Story</h2>
                <p className="text-grey-70 text-lg leading-relaxed mb-4">
                  Founded with a vision to bring premium fashion and lifestyle products to Bangladesh, Zahan Fashion has grown to become a trusted name in the industry. We believe that quality fashion should be accessible to everyone.
                </p>
                <p className="text-grey-70 text-lg leading-relaxed mb-4">
                  Our journey started with a simple belief: every customer deserves exceptional products and service. From our carefully curated collections to our dedicated customer support, we pour our heart into every detail.
                </p>
                <p className="text-grey-70 text-lg leading-relaxed">
                  Today, we're proud to serve thousands of satisfied customers across the country, and we continue to grow and innovate every day.
                </p>
              </div>
              <div className=" h-96 rounded-none flex items-center justify-center text-grey-70">

                <img className="w-full h-full" src="/img_2-6-545x654.jpg" alt="" />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 small:py-24 bg-grey-5">
        <div className="content-container">
          <h2 className="text-3xl small:text-4xl font-bold text-center text-black mb-12">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 small:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission Card */}
            <div className="bg-white border-2 border-black rounded-none p-8 hover:shadow-lg transition-shadow animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black">Mission</h3>
              </div>
              <p className="text-grey-70 leading-relaxed">
                To deliver exceptional fashion and lifestyle products that empower our customers to express their unique style and personality.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white border-2 border-black rounded-none p-8 hover:shadow-lg transition-shadow animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black">Vision</h3>
              </div>
              <p className="text-grey-70 leading-relaxed">
                To be the most trusted and beloved fashion destination in Bangladesh, known for our quality, integrity, and customer-first approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 small:py-24 bg-white">
        <div className="content-container">
          <h2 className="text-3xl small:text-4xl font-bold text-center text-black mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 small:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Quality",
                description: "We never compromise on quality. Every product is carefully selected and tested to meet our high standards.",
                icon: "✓"
              },
              {
                title: "Integrity",
                description: "We believe in transparent business practices and honest communication with our customers.",
                icon: "◆"
              },
              {
                title: "Customer First",
                description: "Your satisfaction is our priority. We go above and beyond to exceed your expectations.",
                icon: "♥"
              },
              {
                title: "Innovation",
                description: "We constantly evolve to bring you the latest trends and technologies in fashion.",
                icon: "⚡"
              },
              {
                title: "Sustainability",
                description: "We're committed to responsible sourcing and sustainable business practices.",
                icon: "🌿"
              },
              {
                title: "Community",
                description: "We believe in giving back and supporting the communities we serve.",
                icon: "🤝"
              }
            ].map((value, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
                <p className="text-grey-70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
