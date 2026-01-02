"use client"

import { HttpTypes } from "@medusajs/types"
import { useEffect, useRef, useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface MobileMenuProps {
  regions: HttpTypes.StoreRegion[]
  categories: HttpTypes.StoreProductCategory[]
}

export default function MobileMenu({
  regions,
  categories,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
        document.body.style.overflow = "unset"
      }
    }
  }, [isOpen])

  return (
    <div className="small:hidden" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-slate-700 hover:text-slate-900 transition-colors duration-300"
        aria-label="Menu"
      >
        <svg
          className={`w-6 h-6 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? "rotate-90" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile Menu Panel */}
      <>
        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 top-16 transition-opacity duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Menu */}
        <div className={`absolute top-full left-0 right-0 bg-white border-b border-slate-200 z-50 max-h-[calc(100vh-64px)] overflow-y-auto transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform ${isOpen ? "translate-x-0 opacity-100 shadow-2xl" : "-translate-x-full opacity-0 pointer-events-none shadow-none"}`}>
          <div className="p-4 space-y-2">
            <LocalizedClientLink
              href="/"
              className={`block px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
              style={{
                transitionDelay: isOpen ? "50ms" : "0ms",
              }}
              onClick={() => setIsOpen(false)}
            >
              Home
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/about"
              className={`block px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
              style={{
                transitionDelay: isOpen ? "75ms" : "0ms",
              }}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/contact"
              className={`block px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
              style={{
                transitionDelay: isOpen ? "100ms" : "0ms",
              }}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/store"
              className={`block px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
              style={{
                transitionDelay: isOpen ? "125ms" : "0ms",
              }}
              onClick={() => setIsOpen(false)}
            >
              Collections
            </LocalizedClientLink>

            <div className="border-t border-slate-100 pt-2">
              <h3 className={`px-4 py-2 text-sm font-semibold text-slate-900 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                style={{
                  transitionDelay: isOpen ? "150ms" : "0ms",
                }}
              >
                Products
              </h3>
              {categories.map((category, index) => (
                <LocalizedClientLink
                  key={category.id}
                  href={`/store?category=${category.id}`}
                  className={`block px-6 py-2 text-slate-700 hover:bg-slate-50 text-sm transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                  style={{
                    transitionDelay: isOpen ? `${175 + index * 25}ms` : "0ms",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {category.name}
                </LocalizedClientLink>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-2">
              <LocalizedClientLink
                href="/account"
                className={`block px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-none font-medium transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                style={{
                  transitionDelay: isOpen ? `${425 + categories.length * 25}ms` : "0ms",
                }}
                onClick={() => setIsOpen(false)}
              >
                My Account
              </LocalizedClientLink>
            </div>

            {regions && regions.length > 1 && (
              <div className="border-t border-slate-100 pt-2">
                <h3 className={`px-4 py-2 text-sm font-semibold text-slate-900 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                  style={{
                    transitionDelay: isOpen ? `${475 + categories.length * 25}ms` : "0ms",
                  }}
                >
                  Region
                </h3>
                {regions.map((region, index) => (
                  <div
                    key={region.id}
                    className={`px-4 py-2 text-slate-700 text-sm transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                    style={{
                      transitionDelay: isOpen ? `${525 + categories.length * 25 + index * 25}ms` : "0ms",
                    }}
                  >
                    {region.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </>
    </div>
  )
}
