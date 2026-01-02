"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface Review {
  id: string
  name: string
  title: string
  text: string
  avatar: string
  rating: number
}

const reviews: Review[] = [
  {
    id: "1",
    name: "Emma Johnson",
    title: "Verified Buyer",
    text: "The quality of the fragrance is exceptional. It has a long-lasting scent that stays throughout the day. Highly recommended!",
    avatar: "/img_2-1-1-545x654.jpg",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "Regular Customer",
    text: "I've been purchasing from Cosmecos for over a year now. Their service is impeccable and the products never disappoint.",
    avatar: "/img_2-2-1-545x654.jpg",
    rating: 5,
  },
  {
    id: "3",
    name: "Sarah Williams",
    title: "Premium Member",
    text: "Every fragrance tells a story. The collection here is carefully curated and the packaging is absolutely beautiful.",
    avatar: "/img_2-5-545x654.jpg",
    rating: 5,
  },
  {
    id: "4",
    name: "James Martinez",
    title: "Verified Buyer",
    text: "Fast shipping and excellent customer service. The fragrances are authentic and the prices are competitive.",
    avatar: "/img_2-8-545x654.jpg",
    rating: 5,
  },
]

export default function ReviewSection() {
  const [currentReview, setCurrentReview] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isAnimating, setIsAnimating] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isAutoPlay) return

    intervalRef.current = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 6000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isAutoPlay])

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => setIsAnimating(false), 100)
    return () => clearTimeout(timer)
  }, [currentReview])

  const goToPrevious = () => {
    setIsAutoPlay(false)
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToNext = () => {
    setIsAutoPlay(false)
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const goToReview = (index: number) => {
    setIsAutoPlay(false)
    setCurrentReview(index)
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-br from-slate-50 to-slate-100 py-16 small:py-20 medium:py-24 overflow-hidden"
    >
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-8 small:mb-12 medium:mb-16">
          <h2 className="text-2xl xsmall:text-3xl small:text-4xl medium:text-5xl text-[#339994] font-quentin font-bold mb-2 small:mb-3">
            What Our Customers Say
          </h2>
          <p className="text-sm xsmall:text-base small:text-lg text-grey-70 max-w-2xl mx-auto px-2">
            Trusted by thousands of satisfied customers worldwide
          </p>
        </div>

        {/* Reviews Slider Container */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Review Slides */}
          <div className="relative w-full h-[320px] xsmall:h-[360px] small:h-[400px] overflow-hidden">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`absolute inset-0 transition-opacity duration-1200 ease-in-out ${
                  currentReview === index
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                {/* Review Content */}
                <div className="h-full bg-white shadow-xl p-4 xsmall:p-6 small:p-8 medium:p-12 flex flex-col justify-center items-center text-center">
                  {/* Stars */}
                  <div className="mb-6 flex justify-center">
                    {renderStars(review.rating)}
                  </div>

                  {/* Review Text */}
                  <div
                    style={{
                      opacity:
                        currentReview === index && !isAnimating ? 1 : 0,
                      transform:
                        currentReview === index && !isAnimating
                          ? "translateY(0)"
                          : "translateY(20px)",
                      transition:
                        "opacity 800ms cubic-bezier(0.32, 0.72, 0, 1), transform 800ms cubic-bezier(0.32, 0.72, 0, 1)",
                      transitionDelay: "0ms",
                    }}
                  >
                    <p className="text-xs xsmall:text-sm small:text-lg medium:text-xl text-grey-70 italic mb-4 xsmall:mb-6 small:mb-8 max-w-2xl mx-auto leading-relaxed">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div
                    style={{
                      opacity:
                        currentReview === index && !isAnimating ? 1 : 0,
                      transform:
                        currentReview === index && !isAnimating
                          ? "translateY(0)"
                          : "translateY(20px)",
                      transition:
                        "opacity 800ms cubic-bezier(0.32, 0.72, 0, 1), transform 800ms cubic-bezier(0.32, 0.72, 0, 1)",
                      transitionDelay: "150ms",
                    }}
                  >
                    <div className="flex items-center justify-center gap-2 xsmall:gap-4">
                      <div className="relative w-10 xsmall:w-12 small:w-14 h-10 xsmall:h-12 small:h-14 rounded-full overflow-hidden">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                          quality={85}
                        />
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold text-grey-90 text-sm xsmall:text-base small:text-lg">
                          {review.name}
                        </h3>
                        <p className="text-xs xsmall:text-sm text-grey-70">{review.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentReview === index
                    ? "bg-grey-90 w-6 h-2 xsmall:w-8 xsmall:h-2.5 small:w-10 small:h-3"
                    : "bg-grey-90/30 hover:bg-grey-90/50 w-2 h-2 xsmall:w-2.5 xsmall:h-2.5 small:w-3 small:h-3"
                }`}
                aria-label={`Go to review ${index + 1}`}
                aria-current={currentReview === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
