"use client"

import { useState, useRef } from "react"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface ProductsDropdownProps {
  categories?: HttpTypes.StoreProductCategory[]
}

export default function ProductsDropdown({
  categories = [],
}: ProductsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className="relative inline-block"
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <LocalizedClientLink
        href="/store"
        className="flex items-center gap-3 text-base font-semibold text-grey-90 hover:text-black transition-colors duration-200 py-6 my-2 border-b-2 border-white hover:border-b-2 hover:border-black"
      >
        PRODUCTS
        <span
          className={`text-lg font-medium transition-transform duration-200 ${
            isOpen ? "-rotate-90" : "rotate-90"
          } inline-block`}
        >
          &gt;
        </span>
      </LocalizedClientLink>

      {isOpen && (
        <div className="absolute top-full left-0 w-56 bg-[#1e1e1e] shadow-lg rounded-sm z-[999]">
          <div className="py-2">
            {categories.length > 0 ? (
              categories.map((category) => (
                <LocalizedClientLink
                  key={category.id}
                  href={`/store?category=${category.id}`}
                  onClick={() => setIsOpen(false)}
                  className="block pl-4 py-2 hover:pl-8 text-sm hover:text-base text-[#F5F9FA] transition-all duration-300 ease-in-out"
                >
                  {category.name}
                </LocalizedClientLink>
              ))
            ) : (
              <div className="px-4 py-2 text-sm text-grey-70">
                No categories available
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
