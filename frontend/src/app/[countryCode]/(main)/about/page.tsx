import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Flower2, Sparkles, Award, RefreshCw, Shield, Leaf } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Al-Aria Perfume Gallery",
  description: "Discover the story behind Zahan Fashion. We're committed to bringing you the finest quality fashion and lifestyle products.",
}
const features = [
  {
    icon: Flower2,
    title: "Authentic Fragrances",
    description: "Curated selection of premium, authentic perfumes from world-renowned brands",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "Long-Lasting Quality",
    description: "Hand-selected fragrances with superior longevity and projection",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: Award,
    title: "Expert Curation",
    description: "Expertly selected by fragrance specialists and enthusiasts",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: RefreshCw,
    title: "Satisfaction Guaranteed",
    description: "30-day exchange guarantee on all fragrances",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Shield,
    title: "Secure & Safe",
    description: "SSL encrypted transactions with trusted payment methods",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Leaf,
    title: "Ethical Sourcing",
    description: "Committed to sustainable and ethical fragrance sourcing",
    color: "from-green-500 to-emerald-500",
  },
]

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#EBF4F4] text-slate-800 py-20">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-2xl small:text-4xl font-bold text-[#339994] mb-6">ABOUT AL-ARIA PERFUME GALLERY</h1>
            <p className="text-lg small:text-xl text-slate-500 leading-relaxed">
              Curating timeless style and quality lifestyle products for the modern individual
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 small:py-24 bg-[#EBF4F4]/50">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 small:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl small:text-4xl font-bold text-[#339994] font-quentin mb-6">Our Story</h2>
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
              <div className=" relative h-96 rounded-none flex items-center justify-center text-grey-70">

                <img className="w-full h-full border border-[#339994]/10" src="/img_2-6-545x654.jpg" alt="" />

                <div className="absolute small:-left-5 small:-top-5 h-full w-full bg-none border border-[#339994]/50 "></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 small:py-24 bg-[#EBF4F4]">
        <div className="content-container">
          <h2 className="text-3xl small:text-4xl font-bold text-[#339994] text-center font-quentin mb-8">Our Mission and Vision</h2>
          <div className="grid grid-cols-1 small:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission Card */}
            <div className="bg-white shadow-sm rounded-none p-8 hover:shadow-lg transition-shadow animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#339994]/10  rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="#339994" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#339994]">Mission</h3>
              </div>
              <p className="text-grey-70 leading-relaxed">
                To deliver exceptional fashion and lifestyle products that empower our customers to express their unique style and personality.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white shadow-sm rounded-none p-8 hover:shadow-lg transition-shadow animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#339994]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="#339994" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#339994]">Vision</h3>
              </div>
              <p className="text-grey-70 leading-relaxed">
                To be the most trusted and beloved fashion destination in Bangladesh, known for our quality, integrity, and customer-first approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 small:py-24 bg-[#EBF4F4]/50">
        <div className="content-container">
          <h2 className="text-3xl small:text-4xl font-bold text-[#339994] text-center font-quentin mb-8">Our Core Values</h2>
          {/* Features Grid */}
          <div className="grid grid-cols-1 small:grid-cols-2 medium:grid-cols-3 gap-6 small:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group relative bg-white p-6 small:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-slate-400 overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Subtle hover background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-3 transition-opacity duration-500`}></div>

                  {/* Content */}
                  <div className="relative z-10">{/* Text */}
                    <div className="font-semibold mb-3 text-[#339994] text-xl group-hover:text-slate-700 transition-colors">
                      {feature.title}
                    </div>
                    {/* Icon */}
                    <div className="flex gap-5 items-center mb-2">
                      <div className={`inline-flex transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                        <Icon className="w-8 h-8 text-[#339994]" strokeWidth={2} />
                      </div>

                      <div className="text-grey-70 text-sm leading-relaxed">
                        {feature.description}
                      </div>

                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-[#339994] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
