"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function AboutAlAria() {
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 small:py-20 medium:py-24 overflow-hidden"
    >
      <div className="content-container">
        <div className="grid grid-cols-1 small:grid-cols-2 gap-8 small:gap-12 medium:gap-20 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center space-y-3 small:space-y-4 medium:pr-12 order-2 small:order-1">
            {/* Title */}
            <div
              className={`transition-all duration-1000 ${isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
                }`}
            >
              <h2 className="text-2xl xsmall:text-3xl small:text-4xl font-quentin font-light text-[#339994] leading-tight">
                About Al-Aria
              </h2>
            </div>
            {/* Sub Title */}
            <div
              className={`transition-all duration-1000 ${isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
                }`}
            >
              <h2 className="text-2xl xsmall:text-3xl small:text-4xl font-normal text-[#232323] leading-tight">
                PERFECT PERFUME
              </h2>
            </div>
            {/* Sub description */}
            <div
              className={`transition-all duration-1000 ${isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
                }`}
            >
              <h2 className="text-base font-medium text-[#232323] leading-tight">
                Popularized through customer relationships with some of the world’s most recognizable faces.
              </h2>
            </div>

            {/* Description */}
            <div
              className={`transition-all duration-1000 delay-200 ${isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
                }`}
            >
              <p className="text-base font-medium text-gray-400 leading-relaxed max-w-lg">
                Merluccid hake redlip blenny discus snake mudhead large-eye bream scissor-tail rasbora opaleye char dogfish beachsalmon, sand tilefish. Spiny eel skipping goby fierasfer tarwhine Blind goby tidewater goby rocket danio armorhead catfish streamer.
              </p>
            </div>
            {/* tag */}
            <div
              className={`transition-all flex gap-16 duration-1000 delay-200 ${isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
                }`}
            >
              <div>
                <h1 className="text-5xl mb-3 text-[#399994]">470k</h1>
                <p>Perfumes sold</p>
              </div>
              <div>
                <h1 className="text-5xl mb-3 text-[#399994]">10 years</h1>
                <p>Perfect years</p>
              </div>
            </div>

            {/* Button */}
            <div
              className={`transition-all duration-1000 delay-400 pt-2 ${isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
                }`}
            >

              <LocalizedClientLink
                href="/about"
                className="btn-unified inline-block px-6 small:px-8 py-2 small:py-3 text-grey-90 font-semibold relative z-10"
              >
                <span className="relative z-10">EXPLORE MORE</span>
              </LocalizedClientLink>
            </div>
          </div>

          {/* Right Column: Image with Black Overlay */}
          <div className="order-1 small:order-2">
            <div
              className={`relative w-full h-[240px] xsmall:h-[300px] small:h-[360px] overflow-hidden transition-all duration-1000 delay-100 ${isInView
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
                }`}
            >
              <Image
                src="/home2-video-placeholder.jpg"
                alt="About Cosmecos"
                fill
                className="object-cover pl-3 xsmall:pl-4 small:pl-6 pt-3 xsmall:pt-4 small:pt-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
              {/* Black border */}
              <div className="absolute inset-0 border border-black bottom-3 xsmall:bottom-4 small:bottom-6 right-3 xsmall:right-4 small:right-6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
