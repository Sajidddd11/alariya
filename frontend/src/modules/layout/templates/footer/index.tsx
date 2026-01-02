import { listCategories, filterCategoriesWithProducts } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { FacebookIcon, InstagramIcon, YouTubeIcon, MailIcon, PhoneIcon, LockIcon, SmileIcon, ElectricTruckIcon } from "@modules/common/icons/social-icons"
import { socialMediaLinks } from "@lib/constants"
import Image from "next/image"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const allCategories = await listCategories()
  const productCategories = filterCategoriesWithProducts(allCategories)

  return (
    <footer className="w-full bg-gradient-to-b from-slate-900 to-slate-950 text-white">

      <div className="max-w-6xl py-12 px-4 small:px-6 mx-auto w-full">
        <div className="grid grid-cols-2 small:grid-cols-4 gap-4 small:gap-6">
          {/* Brand */}
          <div className="col-span-2 ">
            <LocalizedClientLink
              href="/"
              className="font-bold font-quentin text-2xl small:text-3xl text-[#339994] block mb-3 xsmall:mb-4"
            >
              Al Aria Perfume Gallery
            </LocalizedClientLink>
            <p className="text-slate-300  text-sm xsmall:text-base font-light leading-relaxed">
              Your destination for premium fragrances. We curate the finest scents from around the world for fragrance enthusiasts who value quality and authenticity.
            </p>
            <div className="flex flex-col small:flex-row gap-1 small:gap-5 mt-5 items-center">
              {/* link icon  */}
              <div className="flex gap-4 items-center py-4">
                <LocalizedClientLink
                  href={socialMediaLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full transition-all duration-300 transform hover:scale-125 shadow-lg"
                  aria-label="Visit our Facebook page"
                >
                  <FacebookIcon size={20} color="white" />
                </LocalizedClientLink>
                <LocalizedClientLink
                  href={socialMediaLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                  aria-label="Visit our Instagram page"
                >
                  <InstagramIcon size={20} color="white" />
                </LocalizedClientLink>
                <LocalizedClientLink
                  href={socialMediaLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full transition-all duration-300 transform hover:scale-125 shadow-lg"
                  aria-label="Visit our YouTube channel"
                >
                  <YouTubeIcon size={24} color="white" />
                </LocalizedClientLink>
              </div>
              <div className="text-white text-2xl hidden small:block">|</div>
              <div className="flex flex-col small:flex-row gap-1 small:gap-3">
                {/* mail  */}
                <div className="flex w-fit gap-2 items-center">
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

          {/* Fragrance Categories */}
          {productCategories && productCategories.length > 0 && (
            <div className="">
              <h3 className="font-semibold text-base small:text-lg text-slate-200 mb-4">Fragrances</h3>
              <ul className="space-y-2" data-testid="footer-categories">
                {productCategories
                  .filter((c) => !c.parent_category)
                  .slice(0, 6)
                  .map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        href={`/categories/${c.handle}`}
                        className="text-slate-300 text-sm small:text-base transition-all duration-300 ease-in-out hover:text-white hover:pl-2"
                        data-testid="category-link"
                      >
                        {c.name}
                      </LocalizedClientLink>
                    </li>
                  ))}
              </ul>
            </div>
          )}

          {/* Collections */}
          {collections && collections.length > 0 && (
            <div className="border">
              <h3 className="font-semibold text-base small:text-lg text-slate-200 mb-4">Collections</h3>
              <ul className="space-y-2">
                {collections.slice(0, 5).map((c) => (
                  <li key={c.id}>
                    <LocalizedClientLink
                      href={`/collections/${c.handle}`}
                      className="text-slate-300 text-sm small:text-base transition-all duration-300 ease-in-out hover:text-white hover:pl-2"
                    >
                      {c.title}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Support & Info */}
          <div className="">
            <h3 className="font-semibold text-base small:text-lg text-slate-200 mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <LocalizedClientLink
                  href="/account"
                  className="text-slate-300 text-sm small:text-base transition-all duration-300 ease-in-out hover:text-white hover:pl-2"
                >
                  My Account
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/contact"
                  className="text-slate-300 text-sm small:text-base transition-all duration-300 ease-in-out hover:text-white hover:pl-2"
                >
                  Contact Us
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/shipping-info"
                  className="text-slate-300 text-sm small:text-base transition-all duration-300 ease-in-out hover:text-white hover:pl-2"
                >
                  Shipping Info
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/returns"
                  className="text-slate-300 text-sm small:text-base transition-all duration-300 ease-in-out hover:text-white hover:pl-2"
                >
                  Returns
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/privacy-policy"
                  className="text-slate-300 text-sm small:text-base transition-all duration-300 ease-in-out hover:text-white hover:pl-2"
                >
                  Privacy Policy
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/terms-of-service"
                  className="text-slate-300 text-sm small:text-base transition-all duration-300 ease-in-out hover:text-white hover:pl-2"
                >
                  Terms of Service
                </LocalizedClientLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-slate-950 to-slate-900 py-4 small:py-6 border-t border-slate-800">
        <div className="flex text-slate-300 w-fit mx-auto flex-col small:flex-row small:items-center gap-4 text-xs small:text-sm">
          <p>
            © {new Date().getFullYear()} Al Aria Perfume Gallery. All rights reserved.
          </p>
          <span className="hidden small:inline">•</span>
          <p>Crafted for Fragrance Lovers</p>
        </div>
      </div>
    </footer>
  )
}
