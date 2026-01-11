"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function Features() {
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
      className="relative hidden small:block bg-[#339994]/10 w-full pt-16 small:pt-20 medium:pt-24 overflow-hidden"
    >
      <div className="content-container">
        <div className="grid grid-cols-1 small:grid-cols-2 gap-8 small:gap-12 medium:gap-20 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center space-y-4 small:space-y-6 medium:pr-12 order-2 small:order-1">
            {/* Title */}
            <div
              className={`transition-all duration-1000 ${isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
                }`}
            >
              <h2 className="text-3xl small:text-4xl font-light font-quentin text-[#339994] leading-tight">
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
              <h2 className="text-3xl small:text-4xl font-normal text-[#232323] leading-tight">
                PERFECT PERFUME
              </h2>
            </div>

            {/* Description */}
            <div
              className={`transition-all duration-1000 delay-200 ${isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
                }`}
            >
              <p className="text-xs xsmall:text-sm small:text-base text-justify font-medium text-gray-400 leading-relaxed max-w-lg">
                Merluccid hake redlip blenny discus snake mudhead large-eye bream scissor-tail rasbora opaleye char dogfish beachsalmon, sand tilefish. Spiny eel skipping goby fierasfer tarwhine Blind goby tidewater goby rocket danio armorhead catfish streamer.
              </p>
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
              className={`relative w-full h-[280px] xsmall:h-[350px] small:h-[460px] overflow-hidden transition-all duration-1000 delay-100 ${isInView
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
                }`}
            >
              <Image
                src="/banners/01.png"
                alt="About Cosmecos"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
              <div className="absolute w-20 h-20 xsmall:w-24 xsmall:h-24 small:w-32 small:h-32 top-12 xsmall:top-16 small:top-24 left-16 xsmall:left-32 small:left-52 flex items-center rounded-full bg-[#F8798E]">
                <span className="w-fit mx-auto">
                  <h1 className="w-fit mx-auto text-white text-2xl xsmall:text-3xl small:text-4xl font-extrabold">-50%</h1>
                  <h1 className="w-fit mx-auto text-white text-xs xsmall:text-sm small:text-base font-extrabold">SALE</h1>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
