"use client"

import React from "react"
import { useFormStatus } from "react-dom"
import LoadingButton from "@modules/common/components/loading-button"

export function SubmitButton({
  children,
  variant = "secondary",
  className,
  "data-testid": dataTestId,
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "transparent" | "danger" | null
  className?: string
  "data-testid"?: string
}) {
  const { pending } = useFormStatus()

  return (
    <LoadingButton
      size="small"
      className="rounded-none w-full py-2 col-span-2"
      type="submit"
      isLoading={pending}
      variant={variant || "primary"}
      data-testid={dataTestId}
    >
      {children}
    </LoadingButton>
  )
}
