"use client"

import React from "react"
import { clx } from "@medusajs/ui"

interface UnifiedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "small" | "medium" | "large"
  isLoading?: boolean
  disabled?: boolean
  children: React.ReactNode
  className?: string
}

export default function UnifiedButton({
  variant = "primary",
  size = "medium",
  isLoading = false,
  disabled = false,
  children,
  className,
  ...props
}: UnifiedButtonProps) {
  const isDisabled = disabled || isLoading

  const baseClasses = "unified-button relative overflow-hidden font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed"

  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  }

  const variantClasses = {
    primary: "bg-white text-black border-2 border-black",
    secondary: "bg-white text-black border-2 border-black",
    outline: "bg-transparent text-black border-2 border-black",
  }

  return (
    <button
      className={clx(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {/* Wave animation segments - created on hover */}
      <div className="unified-button-background absolute inset-0 bg-black opacity-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="wave-segment"
            style={{
              position: "absolute",
              left: `${i * 10}%`,
              top: 0,
              width: "10%",
              height: "100%",
              backgroundColor: "black",
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {isLoading && (
          <div className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {children}
      </span>
    </button>
  )
}
