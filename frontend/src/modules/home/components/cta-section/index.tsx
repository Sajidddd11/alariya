"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Users, Sparkles, Gift, Flower2, Facebook } from "lucide-react"

export default function CTASection() {
  return (
    <div className="w-full bg-gradient-to-r from-slate-100 to-slate-50  relative overflow-hidden">


      <div className="content-container relative z-10 ">
        <div className="relative overflow-hidden bg-none backdrop-blur-md p-8 small:p-10 medium:p-12">
          {/* Content */}
          <div className="flex flex-col gap-6 small:gap-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-quentin  xsmall:text-3xl small:text-4xl medium:text-5xl font-bold text-[#339994] mb-4 small:mb-6 leading-tight">
                Connect with{" "}
                <span className=" text-[#339994]">
                  Fragrance Enthusiasts
                </span>
              </h2>
              <p className="text-slate-700 text-base small:text-lg leading-relaxed">
                Join thousands of fragrance lovers in our exclusive community. Share discoveries, get personalized recommendations, and explore the art of perfume together.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col xsmall:flex-row gap-4 items-center justify-center max-w-2xl mx-auto w-full">
              {/* Facebook Group CTA */}
              <LocalizedClientLink
                href="/store"
                className="btn-unified inline-block px-6 small:px-8 py-2 small:py-3 text-grey-90 font-semibold relative z-10"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="group-hover:translate-x-1 transition-transform inline-block text-lg">JOIN COMMUNITY</span>
                  <span className="group-hover:translate-x-1 transition-transform inline-block text-lg">→</span>
                </span>
              </LocalizedClientLink>

              {/* OR Divider */}
              <div className="flex xsmall:hidden items-center gap-2 w-full">
                <div className="h-px flex-1 bg-slate-600"></div>
                <span className="text-slate-700 text-xs font-semibold">OR</span>
                <div className="h-px flex-1 bg-slate-600"></div>
              </div>
              <div className="hidden xsmall:flex items-center gap-2">
                <span className="text-slate-700 text-xs font-semibold">OR</span>
              </div>

              {/* Explore Collection CTA */}
              <LocalizedClientLink
                href="/store"
                className="btn-unified inline-block px-6 small:px-8 py-2 small:py-3 text-grey-90 font-semibold relative z-10"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="group-hover:translate-x-1 transition-transform inline-block text-lg">EXPLORE FRAGRANCES</span>
                  <span className="group-hover:translate-x-1 transition-transform inline-block text-lg">→</span>
                </span>
              </LocalizedClientLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
