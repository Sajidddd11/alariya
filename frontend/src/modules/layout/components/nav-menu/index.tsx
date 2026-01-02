"use client"

import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import PagesDropdown from "@modules/layout/components/pages-dropdown"

interface NavMenuProps {
  regions?: StoreRegion[]
  categories?: any[]
}

export default function NavMenu({ regions, categories }: NavMenuProps) {
  return (
    <nav className="hidden small:block w-full bg-white border-t border-grey-20">
      <div className="content-container">
        <div className="flex items-center justify-start gap-8 py-3">
          {/* HOME */}
          <LocalizedClientLink
            href="/"
            className="text-sm font-semibold text-grey-90 hover:text-black transition-colors duration-200"
          >
            Home
          </LocalizedClientLink>

          {/* PAGES DROPDOWN */}
          <PagesDropdown />

          {/* BLOG */}
          <LocalizedClientLink
            href="/blog"
            className="text-sm font-semibold text-grey-90 hover:text-black transition-colors duration-200"
          >
            Blog
          </LocalizedClientLink>

          {/* SHOP */}
          <LocalizedClientLink
            href="/store"
            className="text-sm font-semibold text-grey-90 hover:text-black transition-colors duration-200"
          >
            Shop
          </LocalizedClientLink>

          {/* CONTACT */}
          <LocalizedClientLink
            href="/contact"
            className="text-sm font-semibold text-grey-90 hover:text-black transition-colors duration-200"
          >
            Contact
          </LocalizedClientLink>

          {/* PORTFOLIO */}
          <LocalizedClientLink
            href="/portfolio"
            className="text-sm font-semibold text-grey-90 hover:text-black transition-colors duration-200"
          >
            Portfolio
          </LocalizedClientLink>
        </div>
      </div>
    </nav>
  )
}
