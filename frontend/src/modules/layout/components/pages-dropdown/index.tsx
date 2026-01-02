"use client"

import { useState, useRef, useEffect } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface PageItem {
  title: string
  href: string
}

const pages: PageItem[] = [
  { title: "About Us", href: "/about" },
]

export default function PagesDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-base font-semibold text-grey-90 hover:text-black transition-colors duration-200 py-6 my-2 border-b-2 border-white hover:border-b-2 hover:border-black"
      >
        ABOUT US
        <span
          className={`text-lg font-bold transition-transform duration-200 ${
            isOpen ? "-rotate-90" : "rotate-90"
          } inline-block`}
        >
          &gt;
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-grey-20 rounded-lg shadow-lg z-[999]">
          <div className="py-2">
            {pages.map((page, index) => (
              <LocalizedClientLink
                key={index}
                href={page.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-grey-90 hover:bg-grey-5 transition-colors duration-150"
              >
                {page.title}
              </LocalizedClientLink>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
