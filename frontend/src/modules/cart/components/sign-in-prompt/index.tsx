"use client"

import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Sparkles } from "lucide-react"

const SignInPrompt = () => {
  return (
    <div className="relative overflow-hidden rounded-none p-4 group transition-shadow duration-300">
      {/* Subtle animated background */}
      <div className="absolute inset-0 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative flex flex-col small:flex-row items-center justify-between gap-4">
        {/* Left side - Text */}
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-slate-800 animate-pulse flex-shrink-0" />
          <span className="text-slate-800 font-semibold text-base sm:text-lg">
            Sign in to unlock exclusive benefits & faster checkout!
          </span>
        </div>

        {/* Right side - CTA Button */}
        <LocalizedClientLink
          href="/account"
          className="btn-unified-b px-10 py-3"
        >
          <span className="relative z-10">SIGN IN</span>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
