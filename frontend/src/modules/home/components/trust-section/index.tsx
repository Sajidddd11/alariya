"use client"

import { Flower2, Sparkles, Award, RefreshCw, Shield, Leaf } from "lucide-react"

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

export default function TrustSection() {
  return (
    <div className="w-full  bg-gradient-to-r from-slate-100 to-slate-50 py-16 relative overflow-hidden">


      <div className="content-container relative z-10">
        <div className="flex flex-col gap-8 small:gap-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-quentin text-[#339994] small:text-4xl medium:text-5xl font-bold mb-4 small:mb-6">
              The Art of Fragrance Excellence
            </h2>
            <p className="text-grey-70 text-base small:text-lg max-w-2xl mx-auto leading-relaxed">
              We are passionate about delivering the finest fragrances paired with exceptional service. Discover why fragrance lovers trust us.
            </p>
          </div>

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
      </div>
    </div>
  )
}
