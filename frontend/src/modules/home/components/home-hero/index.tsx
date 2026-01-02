"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isAnimating, setIsAnimating] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => setIsAnimating(false), 100)
    return () => clearTimeout(timer)
  }, [currentSlide])

  const goToPrevious = () => {
    setIsAutoPlay(false)
    setCurrentSlide((prev) => (prev - 1 + 2) % 2)
  }

  const goToNext = () => {
    setIsAutoPlay(false)
    setCurrentSlide((prev) => (prev + 1) % 2)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlay(false)
    setCurrentSlide(index)
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-grey-0 overflow-hidden"
    >
      {/* Carousel Container */}
      <div className="relative w-full mb-1 py-3 h-[200px] xsmall:h-[220px] small:h-[280px] medium:h-[330px] large:h-[550px]">
        {/* SLIDE 1 */}
        <div
          className={`absolute inset-0 transition-opacity duration-1200 ease-in-out ${currentSlide === 0
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
            }`}
        >
          <Image
            src="/banners/banner-two.jpg"
            alt="Shop All Categories"
            fill
            className="object-cover"
            quality={85}
            priority={true}
            sizes="100vw"
          />

          {/* Slide 1 Content - Image Left, Text Right */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="content-container w-full h-full px-10">
              <div className="grid grid-cols-1 items-center h-full small:grid-cols-2 gap-8 small:gap-12">
                {/* Image Left */}
                <div className="hidden small:block h-full">
                  <div
                    className="relative w-full h-full rounded-lg overflow-hidden"
                    style={{
                      animation:
                        currentSlide === 0
                          ? "slide-in-left-hero 1000ms cubic-bezier(0.32, 0.72, 0, 1) forwards"
                          : "none",
                    }}
                  >
                    <Image
                      src="/banners/01.png"
                      alt="Premium Fragrances"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={85}
                    />
                  </div>
                </div>

                {/* Text Right */}
                <div className="flex flex-col justify-center  pt-5 small:pt-0 space-y-2 small:space-y-6">
                  {/* Title */}
                  <div
                    style={{
                      opacity: currentSlide === 0 && !isAnimating ? 1 : 0,
                      transform:
                        currentSlide === 0 && !isAnimating
                          ? "translateY(0)"
                          : "translateY(20px)",
                      transition:
                        "opacity 800ms cubic-bezier(0.32, 0.72, 0, 1), transform 800ms cubic-bezier(0.32, 0.72, 0, 1)",
                      transitionDelay: "0ms",
                    }}
                  >
                    <h2 className="text-2xl small:text-6xl small:leading-[1.1] font-thin text-[#232323]">
                      A Little Surprise
                    </h2>
                  </div>

                  {/* Description */}
                  <div
                    style={{
                      opacity: currentSlide === 0 && !isAnimating ? 1 : 0,
                      transform:
                        currentSlide === 0 && !isAnimating
                          ? "translateY(0)"
                          : "translateY(20px)",
                      transition:
                        "opacity 800ms cubic-bezier(0.32, 0.72, 0, 1), transform 800ms cubic-bezier(0.32, 0.72, 0, 1)",
                      transitionDelay: "150ms",
                    }}
                  >
                    <p className="text-sm small:text-base text-[#616161] leading-relaxed max-w-md">
                      Electric ray demoiselle squeaker unicorn fish Kafue pike
                      bango temperate ocean-bass, yellow bass coffinfish
                      yellowfin customers.
                    </p>
                  </div>

                  {/* Button */}
                  <div
                    style={{
                      opacity: currentSlide === 0 && !isAnimating ? 1 : 0,
                      transform:
                        currentSlide === 0 && !isAnimating
                          ? "translateY(0)"
                          : "translateY(20px)",
                      transition:
                        "opacity 800ms cubic-bezier(0.32, 0.72, 0, 1), transform 800ms cubic-bezier(0.32, 0.72, 0, 1)",
                      transitionDelay: "300ms",
                    }}
                  >
                    <LocalizedClientLink
                      href="/store"
                      className="btn-unified inline-block px-6 small:px-8 py-1 small:py-3 text-grey-90 font-semibold relative z-10"
                    >
                      <span className="relative z-10">DISCOVER</span>
                    </LocalizedClientLink>

                  </div>
                </div>

                {/* Mobile Image */}
                <div className="small:hidden">
                  <div
                    className="relative w-full h-[250px] rounded-lg overflow-hidden"
                    style={{
                      animation:
                        currentSlide === 0
                          ? "slide-in-left-hero 1000ms cubic-bezier(0.32, 0.72, 0, 1) forwards"
                          : "none",
                    }}
                  >
                    <Image
                      src="/banners/01.png"
                      alt="Premium Fragrances"
                      fill
                      className="object-cover"
                      sizes="100vw"
                      quality={85}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div
          className={`absolute inset-0 transition-opacity duration-1200 ease-in-out ${currentSlide === 1
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
            }`}
        >
          <Image
            src="/banners/banner-one.png"
            alt="Personalized Experience"
            fill
            className="object-cover"
            quality={85}
            sizes="100vw"
          />

          {/* Slide 2 Content - Text Left, Image Right (Reversed) */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="w-full h-full px-10 small:px-0">
              <div className="grid grid-cols-1 w-full h-full small:grid-cols-2 gap-8 small:gap-12 items-center">
                {/* Text Left */}
                <div className="flex flex-col justify-center pt-5 pl-0 small:pl-28 small:pt-0 space-y-2 small:space-y-6 small:order-1">
                  {/* Title */}
                  <div
                    style={{
                      opacity: currentSlide === 1 && !isAnimating ? 1 : 0,
                      transform:
                        currentSlide === 1 && !isAnimating
                          ? "translateY(0)"
                          : "translateY(20px)",
                      transition:
                        "opacity 800ms cubic-bezier(0.32, 0.72, 0, 1), transform 800ms cubic-bezier(0.32, 0.72, 0, 1)",
                      transitionDelay: "0ms",
                    }}
                  >
                    <h2 className="hidden small:block small:text-6xl small:leading-[1.1] font-thin text-[#232323]">
                      For Your <br />Charm
                    </h2>
                    <h2 className="text-2xl small:hidden small:text-6xl small:leading-[1.1] font-thin text-[#232323]">
                      For Your Charm
                    </h2>
                  </div>

                  {/* Description */}
                  <div
                    style={{
                      opacity: currentSlide === 1 && !isAnimating ? 1 : 0,
                      transform:
                        currentSlide === 1 && !isAnimating
                          ? "translateY(0)"
                          : "translateY(20px)",
                      transition:
                        "opacity 800ms cubic-bezier(0.32, 0.72, 0, 1), transform 800ms cubic-bezier(0.32, 0.72, 0, 1)",
                      transitionDelay: "150ms",
                    }}
                  >
                    <p className="text-sm small:text-base text-[#616161] leading-relaxed max-w-md">
                      Discover our curated collection of timeless fragrances
                      that tell your personal story. Each scent is carefully
                      selected for its quality.
                    </p>
                  </div>

                  {/* Button */}
                  <div
                    style={{
                      opacity: currentSlide === 1 && !isAnimating ? 1 : 0,
                      transform:
                        currentSlide === 1 && !isAnimating
                          ? "translateY(0)"
                          : "translateY(20px)",
                      transition:
                        "opacity 800ms cubic-bezier(0.32, 0.72, 0, 1), transform 800ms cubic-bezier(0.32, 0.72, 0, 1)",
                      transitionDelay: "300ms",
                    }}
                  >
                    <LocalizedClientLink
                      href="/store"
                      className="btn-unified inline-block px-6 small:px-8 py-1 small:py-3 text-grey-90 font-semibold relative z-10"
                    >
                      <span className="relative z-10">DISCOVER</span>
                    </LocalizedClientLink>
                  </div>
                </div>

                {/* Image Right */}
                <div className="hidden small:block h-full small:order-2">
                  <div
                    className="relative w-full h-full overflow-hidden"
                    style={{
                      animation:
                        currentSlide === 1
                          ? "slide-in-left-hero 1000ms cubic-bezier(0.32, 0.72, 0, 1) forwards"
                          : "none",
                    }}
                  >
                    <Image
                      src="/banners/02.png"
                      alt="Personalized Experience"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={85}
                    />
                  </div>
                </div>

                {/* Mobile Image */}
                <div className="small:hidden">
                  <div
                    className="relative w-full h-[250px] rounded-lg overflow-hidden"
                    style={{
                      animation:
                        currentSlide === 1
                          ? "slide-in-left-hero 1000ms cubic-bezier(0.32, 0.72, 0, 1) forwards"
                          : "none",
                    }}
                  >
                    <Image
                      src="/banners/01.png"
                      alt="Personalized Experience"
                      fill
                      className="object-cover"
                      sizes="100vw"
                      quality={85}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          className="absolute left-1 xsmall:left-3 small:left-4 top-1/2 -translate-y-1/2 z-30 bg-grey-0/70 hover:bg-grey-0 text-grey-90 p-1.5 xsmall:p-2 small:p-3 rounded-full transition-all duration-200 hover:shadow-lg active:scale-95"
          aria-label="Previous slide"
        >
          <svg
            className="w-4 h-4 xsmall:w-5 xsmall:h-5 small:w-6 small:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          className="absolute right-1 xsmall:right-3 small:right-4 top-1/2 -translate-y-1/2 z-30 bg-grey-0/70 hover:bg-grey-0 text-grey-90 p-1.5 xsmall:p-2 small:p-3 rounded-full transition-all duration-200 hover:shadow-lg active:scale-95"
          aria-label="Next slide"
        >
          <svg
            className="w-4 h-4 xsmall:w-5 xsmall:h-5 small:w-6 small:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-2 xsmall:bottom-3 small:bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 small:gap-2">
          <button
            onClick={() => goToSlide(0)}
            className={`transition-all duration-300 rounded-full ${currentSlide === 0
                ? "bg-grey-0 w-6 h-1.5 xsmall:w-8 xsmall:h-2 small:w-10 small:h-2.5"
                : "bg-grey-0/50 hover:bg-grey-0/70 w-1.5 h-1.5 xsmall:w-2 xsmall:h-2 small:w-2.5 small:h-2.5"
              }`}
            aria-label="Go to slide 1"
            aria-current={currentSlide === 0}
          />
          <button
            onClick={() => goToSlide(1)}
            className={`transition-all duration-300 rounded-full ${currentSlide === 1
                ? "bg-grey-0 w-6 h-1.5 xsmall:w-8 xsmall:h-2 small:w-10 small:h-2.5"
                : "bg-grey-0/50 hover:bg-grey-0/70 w-1.5 h-1.5 xsmall:w-2 xsmall:h-2 small:w-2.5 small:h-2.5"
              }`}
            aria-label="Go to slide 2"
            aria-current={currentSlide === 1}
          />
        </div>
      </div>
    </section>
  )
}
