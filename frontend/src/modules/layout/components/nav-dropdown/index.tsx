"use client"

import { HttpTypes } from "@medusajs/types"
import { useEffect, useRef, useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface NavDropdownProps {
  categories: HttpTypes.StoreProductCategory[]
}

export default function NavDropdown({ categories }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const topLevelCategories = categories.filter((cat) => !cat.parent_category)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }
  }, [isOpen])

  return (
    <div className="relative group" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-slate-700 hover:text-slate-900 font-medium transition-colors flex items-center gap-1 py-4"
      >
        Categories
        <span
          className={`text-lg font-bold transition-transform ${
            isOpen ? "-rotate-90" : "rotate-90"
          } inline-block`}
        >
          &gt;
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-slate-200 rounded-lg shadow-xl py-2 z-50 animate-fade-in-down">
          {topLevelCategories.length > 0 ? (
            topLevelCategories.map((category) => (
              <div key={category.id}>
                <LocalizedClientLink
                  href={`/categories/${category.handle}`}
                  className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors font-medium text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {category.name}
                </LocalizedClientLink>
              </div>
            ))
          ) : (
            <div className="px-4 py-3 text-slate-500 text-sm">
              No categories available
            </div>
          )}
        </div>
      )}
    </div>
  )
}
