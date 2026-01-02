"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface FeaturedBannerSectionProps {
  image: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
  alt: string
  backgroundImage?: string
}

export default function FeaturedBannerSection({
  image,
  title,
  description,
  buttonText,
  buttonLink,
  alt,
  backgroundImage,
}: FeaturedBannerSectionProps) {
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
      className="relative w-full py-12 small:py-16 medium:py-20 overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for readability */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/30 z-0" />
      )}

      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 small:grid-cols-2 gap-8 small:gap-12 items-center">
          {/* Left: Image */}
          <div
            className={`relative w-full h-[300px] small:h-[350px] medium:h-[400px] rounded-lg overflow-hidden shadow-lg transition-all duration-1000 ${
              isInView
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={85}
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-2xl small:text-3xl medium:text-4xl font-bold text-grey-90 mb-4">
                {title}
              </h2>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <p className="text-base small:text-lg text-grey-70 leading-relaxed">
                {description}
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-700 pt-4 ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <LocalizedClientLink
                href={buttonLink}
                className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg btn-hover-animation-dark"
              >
                {buttonText}
              </LocalizedClientLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
