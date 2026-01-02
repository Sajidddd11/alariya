import { Suspense } from "react"
import Image from "next/image"

import { listRegions } from "@lib/data/regions"
import { listCategories, filterCategoriesWithProducts } from "@lib/data/categories"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import MobileMenu from "@modules/layout/components/mobile-menu"
import CentralSearch from "@modules/layout/components/central-search"
import ProductsDropdown from "@modules/layout/components/products-dropdown"
import NavLink from "@modules/layout/components/nav-link"
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, YouTubeIcon } from "@modules/common/icons/social-icons"
import { socialMediaLinks } from "@lib/constants"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)
  const allCategories = await listCategories()
  const categories = filterCategoriesWithProducts(allCategories)

  return (
    <div className="sticky top-0 inset-x-0 z-50">

      <div className="hidden small:flex items-center justify-between px-4 bg-slate-800">
        <div className="flex items-center gap-6">
          <LocalizedClientLink
            href={"/terms-of-service"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-all duration-300 transform hover:pl-5 hover:text-[#339994] hover:text-lg shadow-lg"
            aria-label="terms-of-service"
          >
            Terms of Service
          </LocalizedClientLink>
          <LocalizedClientLink
            href={"/store"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-all duration-300 transform hover:pl-5 hover:text-[#339994] hover:text-lg shadow-lg"
            aria-label="terms-of-service"
          >
            New Arrivals
          </LocalizedClientLink>
        </div>
        <div className="w-fit gap-6 ">
          {/* Newsletter */}
          <div className="flex gap-5 w-fit items-center">
            {/* link icon  */}
            <div className="flex gap-4 items-center py-1">
              <LocalizedClientLink
                href={socialMediaLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full transition-all duration-300 transform hover:scale-125 shadow-lg"
                aria-label="Visit our Facebook page"
              >
                <FacebookIcon size={16} color="white" />
              </LocalizedClientLink>
              <LocalizedClientLink
                href={socialMediaLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Visit our Instagram page"
              >
                <InstagramIcon size={16} color="white" />
              </LocalizedClientLink>
              <LocalizedClientLink
                href={socialMediaLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full transition-all duration-300 transform hover:scale-125 shadow-lg"
                aria-label="Visit our YouTube channel"
              >
                <YouTubeIcon size={20} color="white" />
              </LocalizedClientLink>
            </div>
            <div className="text-white text-2xl">|</div>
            {/* mail  */}
            <div className="flex gap-2 items-center">
              <MailIcon size={20} color="#ffffff" />
              <h1 className="text-base font-semibold text-white">al-aria@gmail.com</h1>
            </div>
            {/* Contact */}
            <div className="flex gap-2 w-fit items-center">
              <PhoneIcon size={20} color="#ffffff" />
              <span className="text-base font-semibold text-white">+8809677666888</span>
            </div>
          </div>
        </div>
      </div>
      <header className="bg-white border-b border-grey-20 shadow-sm sticky top-0 z-50">
        {/* UNIFIED NAVBAR */}
        <nav className="content-container">
          {/* Main navbar row: Logo, Search, Menu Items, Account, Cart */}
          <div className="flex items-center justify-between h-fit gap-2 small:gap-4">
            {/* LEFT: Logo + Mobile Menu */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <MobileMenu regions={regions} categories={categories} />
              <LocalizedClientLink
                href="/"
                className="flex items-center hover:opacity-90 transition-opacity whitespace-nowrap"
                data-testid="nav-store-link"
              >
                <img
                  src="/alaria.png"
                  alt="ZAHAN logo"
                  width={140}
                  height={32}
                  className="h-auto w-24 small:w-32"
                />
              </LocalizedClientLink>
            </div>
            {/* CENTER: Navigation Menu - Horizontal Links */}
            <div className="hidden small:flex items-center gap-6">
              <NavLink href="/">HOME</NavLink>
              <NavLink href="/about">ABOUT US</NavLink>
              <NavLink href="/contact">CONTACT</NavLink>
              <NavLink href="/store">COLLECTIONS</NavLink>
              <ProductsDropdown categories={categories} />
            </div>

            {/* Right: Search Bar + Account + Cart */}
            <div className="flex xsmall:grid items-center gap-2 xsmall:gap-6 xsmall:grid-cols-4">
              {/* Search Bar - Hidden on mobile, shown on xsmall and above */}
              <div className="hidden xsmall:block xsmall:col-span-3 max-w-sm">
                <CentralSearch initialCategories={categories} />
              </div>

              {/* Account + Cart - Visible on all screen sizes */}
              <div className="flex items-center gap-2 xsmall:col-span-1">
                <LocalizedClientLink
                  className="flex items-center gap-2 px-2 small:px-3 py-2 text-grey-90 hover:text-black hover:bg-grey-10 rounded-lg transition-colors text-base font-medium"
                  href="/account"
                  data-testid="nav-account-link"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </LocalizedClientLink>
                <div className="h-6 w-px bg-grey-30 hidden small:block" />
                <Suspense
                  fallback={
                    <LocalizedClientLink
                      className="flex items-center gap-2 px-2 small:px-3 py-2 text-grey-90 hover:text-black hover:bg-grey-10 rounded-lg transition-colors text-base font-medium"
                      href="/cart"
                      data-testid="nav-cart-link"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m10-9l2 9m-9-9h14l-4 8H7l4-8z"
                        />
                      </svg>
                    </LocalizedClientLink>
                  }
                >
                  <CartButton />
                </Suspense>
              </div>
            </div>
          </div>

          {/* Mobile Search Bar - Shown on very small screens only */}
          <div className="small:hidden border-t border-grey-20 px-0 py-3">
            <CentralSearch initialCategories={categories} />
          </div>
        </nav>
      </header>
    </div>
  )
}
