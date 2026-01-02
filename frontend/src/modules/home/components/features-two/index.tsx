"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function FeaturesTwo() {
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
      className="relative w-full py-16 small:py-20 medium:py-24 overflow-hidden flex flex-col gap-10"
    >
      <div className="content-container">
        <div className="grid grid-cols-1 small:grid-cols-2 gap-8 small:gap-12 medium:gap-20 items-center">
          {/* Left Column: Image with Black Overlay */}
          <div className="order-1">
            <div
              className={`relative w-full h-[280px] xsmall:h-[350px] small:h-[500px] medium:h-[70vh] overflow-hidden transition-all duration-1000 delay-100 ${isInView
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
                }`}
            >
              <Image
                src="/home2-image-1.jpg"
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
          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center space-y-2 small:space-y-3 medium:pr-12 order-2">
            {/* Title */}
            <div
              className={`transition-all duration-1000 ${isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
                }`}
            >
              <h2 className="text-2xl xsmall:text-3xl small:text-4xl font-quentin font-light text-[#339994] leading-tight">
                Features
              </h2>
            </div>
            {/* Sub Title */}
            <div
              className={`transition-all duration-1000 ${isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
                }`}
            >
              <h2 className="text-xl xsmall:text-2xl small:text-3xl font-light text-[#232323] leading-tight">
                ONLY HIGH QUALITY IS THE CORE VALUE FOR US
              </h2>
            </div>
            {/* Sub description */}
            <div
              className={`transition-all duration-1000 ${isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
                }`}
            >
              <h2 className="text-xs xsmall:text-sm small:text-base font-medium text-[#232323] leading-tight">
                Palfmoon yellow moray tompot blenny, cuchia tompot blenny; smelt southern flounder grunt sculpin yellowbanded perch.
              </h2>
            </div>

            {/* Description */}
            <div
              className={`transition-all duration-1000 delay-200 ${isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
                }`}
            >
              <p className="text-xs xsmall:text-sm small:text-base font-medium text-gray-400 leading-relaxed max-w-lg">
                Searobin freshwater hatchetfish sea bass orangestriped triggerfish white croaker. Pollock pencil catfish airbreathing catfish vendace pygmy sunfish spaghetti. Dogteeth tetra coley. Merluccid hake redlip blenny discus snake mudhead large-eye bream scissor-tail rasbora opaleye char dogfish beachsalmon, sand tilefish. Spiny eel skipping goby fierasfer tarwhine Blind goby tidewater goby rocket danio armorhead catfish streamer.
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


        </div>
      </div>
      <div className="content-container">
        <div className="grid grid-cols-1 small:grid-cols-2 gap-8 small:gap-12 medium:gap-20 items-center">
          {/* Left Column: Image with Black Overlay */}
          <div className="order-1 small:order-2">
            <div
              className={`relative w-full h-[280px] xsmall:h-[350px] small:h-[500px] medium:h-[70vh] overflow-hidden transition-all duration-1000 delay-100 ${isInView
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
                }`}
            >
              <Image
                src="/home2-image-2.jpg"
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
          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center space-y-2 small:space-y-3 medium:pr-12 order-2 small:order-1">
            {/* Title */}
            <div
              className={`transition-all duration-1000 ${isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
                }`}
            >
              <h2 className="text-2xl xsmall:text-3xl small:text-4xl font-quentin font-light text-[#339994] leading-tight">
                Features
              </h2>
            </div>
            {/* Sub Title */}
            <div
              className={`transition-all duration-1000 ${isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
                }`}
            >
              <h2 className="text-xl xsmall:text-2xl small:text-3xl font-light text-[#232323] leading-tight">
                A PERFUME THAT MAKES DRESSING COMPLETE
              </h2>
            </div>
            {/* Sub description */}
            <div
              className={`transition-all duration-1000 ${isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
                }`}
            >
              <h2 className="text-xs xsmall:text-sm small:text-base font-medium text-[#232323] leading-tight">
                Palfmoon yellow moray tompot blenny, cuchia tompot blenny; smelt southern flounder grunt sculpin yellowbanded perch.
              </h2>
            </div>

            {/* Description */}
            <div
              className={`transition-all duration-1000 delay-200 ${isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
                }`}
            >
              <p className="text-xs xsmall:text-sm small:text-base font-medium text-gray-400 leading-relaxed max-w-lg">
                Searobin freshwater hatchetfish sea bass orangestriped triggerfish white croaker. Pollock pencil catfish airbreathing catfish vendace pygmy sunfish spaghetti. Dogteeth tetra coley. Merluccid hake redlip blenny discus snake mudhead large-eye bream scissor-tail rasbora opaleye char dogfish beachsalmon, sand tilefish.
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


        </div>
      </div>
    </section>
  )
}
