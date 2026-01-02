"use client"

import { usePathname } from "next/navigation"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  activeClassName?: string
}

export default function NavLink({
  href,
  children,
  className = "",
  activeClassName = "border-b-black text-black",
}: NavLinkProps) {
  const pathname = usePathname()
  
  // Remove country code from pathname for comparison
  const pathWithoutCountry = pathname.replace(/^\/[a-z]{2}/, "")
  const isActive = pathWithoutCountry === href || (href === "/" && pathWithoutCountry === "")

  return (
    <LocalizedClientLink
      href={href}
      className={`text-base font-semibold transition-colors duration-200 whitespace-nowrap py-6 my-2 border-b-2 ${
        isActive
          ? `border-b-black text-black ${activeClassName}`
          : "text-grey-90 hover:text-black border-b-white hover:border-b-2 hover:border-black"
      } ${className}`}
    >
      {children}
    </LocalizedClientLink>
  )
}
