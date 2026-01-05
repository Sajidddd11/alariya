"use client"

import React from "react"
import { Button, clx } from "@medusajs/ui"
import DotSpinner from "@modules/common/components/dot-spinner"

interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  variant?: "primary" | "secondary" | "danger" | "transparent"
  size?: "small" | "base" | "large"
  children: React.ReactNode
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

export default function LoadingButton({
  isLoading = false,
  variant = "transparent",
  size = "base",
  children,
  disabled,
  className,
  ...props
}: LoadingButtonProps) {
  const isDisabled = disabled || isLoading

  // Clean styling for large primary buttons
  const enhancedLargePrimary = variant === "primary" && size === "large"

  return (
    <Button
      {...props}
      variant={variant}
      size={size}
      disabled={isDisabled}
      className="btn-unified w-full rounded-none"
    >
      <span className="relative z-10">
        {isLoading ? (
          <div className="flex items-center justify-center gap-2">
            <DotSpinner size="sm" color="currentColor" />
            <span>{children}</span>
          </div>
        ) : (
          children
        )}
      </span>
    </Button>
  )
}
