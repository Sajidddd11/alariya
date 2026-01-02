"use server"

import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

interface CategoryShowcaseProps {
  categories: HttpTypes.StoreProductCategory[]
  countryCode: string
}

const getRandomImage = (index: number) => {
  const images = [
    "https://i.ibb.co.com/6SypGNs/1.jpg",
    "https://i.ibb.co.com/qYb0q9Rn/Black-Premium-Leather-Square-Backpack-SB-BP129-3.jpg",
    "https://i.ibb.co.com/B5LMxDy2/3.jpg",
    "https://i.ibb.co.com/G4Mh2PYJ/4.jpg",
    "https://i.ibb.co.com/gFrZVRn6/5.webp",
    "https://i.ibb.co.com/PZTBMyBG/6.webp",
    "https://i.ibb.co.com/B5t4yDsR/Screenshot-2025-11-27-at-2-41-10-AM.png",
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1595707707802-51b39fd9b371?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1595580571289-2206f4a10b52?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1539533057592-4d2255f40579?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=400&fit=crop",
  ]
  return images[index % images.length]
}

export default async function CategoryShowcase({
  categories,
  countryCode,
}: CategoryShowcaseProps) {
  const topLevelCategories = categories
    .filter((cat) => !cat.parent_category && cat.products && cat.products.length > 0)
    .slice(0, 6)

  let imageIndex = 0

  return (
    <div className="w-full py-2 xsmall:py-10 small:py-16">
      <div className="content-container px-1">
        <div className="flex flex-col gap-6 small:gap-10">
          {/* Under hero section */}
          <div className="w-full mx-auto">
            <div className="flex flex-col small:flex-row gap-4 small:gap-5">
              <LocalizedClientLink
                href={`/store`}
                className="relative group cursor-pointer h-[200px] xsmall:h-[280px] small:h-[360px] w-full overflow-hidden"
              >
                <Image
                  src={"/img-one.jpg"}
                  alt={"image"}
                  fill
                  className="object-cover pl-3 xsmall:pl-6 pt-3 xsmall:pt-6 h-full w-full"
                />
                <div className="absolute bottom-2 xsmall:bottom-6 right-2 xsmall:right-6 border border-black inset-0" />
                <div className="absolute left-6 small:left-20 top-10 xsmall:top-6 small:top-20">
                  <div className="flex flex-col justify-center space-y-1 xsmall:space-y-4 small:space-y-5 small:order-1">
                    {/* Title */}
                    <div>
                      <h2 className="text-3xl font-quentin small:text-6xl small:leading-[1.1] font-thin text-[#339994]">
                        Best price
                      </h2>
                    </div>

                    {/* Description */}
                    <div className="">
                      <p className="text-base text-[#616161] leading-relaxed max-w-md">
                        Perfume Flower Collection
                      </p>
                    </div>

                    {/* Button */}
                    <div>
                      <LocalizedClientLink
                        href="/store"
                        className="btn-unified inline-block px-4 xsmall:px-6 small:px-8 py-1.5 xsmall:py-2 small:py-3 text-grey-90 text-xs xsmall:text-sm small:text-base font-semibold relative z-10"
                      >
                        <span className="relative z-10">SHOP NOW</span>
                      </LocalizedClientLink>
                    </div>
                  </div>
                </div>
              </LocalizedClientLink>
              <LocalizedClientLink
                href={`/store`}
                className="relative group cursor-pointer h-[200px] xsmall:h-[280px] small:h-[360px] w-full overflow-hidden"
              >
                <Image
                  src={"/banners/banner-two.jpg"}
                  alt={"image"}
                  fill
                  className="object-cover pl-3 xsmall:pl-6 pt-3 xsmall:pt-6 h-full w-full"
                />
                <div className="absolute bottom-2 xsmall:bottom-6 right-2 xsmall:right-6 border border-black inset-0" />
                <div className="absolute right-6 small:right-14 top-10 small:top-20">
                  <div className="flex flex-col justify-center space-y-1 xsmall:space-y-4 small:space-y-5 small:order-1">
                    {/* Title */}
                    <div>
                      <h2 className="text-3xl font-quentin small:text-6xl small:leading-[1.1] font-extralight text-[#339994]">
                        New Perfume
                      </h2>
                    </div>

                    {/* Description */}
                    <div>
                      <p className="text-base text-[#616161] leading-relaxed max-w-md">
                        Perfume Cool Collection
                      </p>
                    </div>

                    {/* Button */}
                    <div>
                      <LocalizedClientLink
                        href="/store"
                        className="btn-unified inline-block px-4 xsmall:px-6 small:px-8 py-1.5 xsmall:py-2 small:py-3 text-grey-90 text-xs xsmall:text-sm small:text-base font-semibold relative z-10"
                      >
                        <span className="relative z-10">SHOP NOW</span>
                      </LocalizedClientLink>
                    </div>
                  </div>
                </div>
              </LocalizedClientLink>
            </div>
          </div>
          {/* Category - fragrance type section  */}
          <div className="w-full">
            {/* header  */}
            <div className="w-fit text-center mx-auto my-8 xsmall:my-12 small:my-16">
              <h1 className="text-2xl xsmall:text-3xl small:text-4xl text-[#339994] font-quentin">Category</h1>
              <h2 className="mt-2 xsmall:mt-4 mb-2 xsmall:mb-5 text-2xl xsmall:text-3xl small:text-4xl">FRAGRANCE TYPES</h2>
              <p className="text-xs xsmall:text-sm">The stylish and organized cosmetic products</p>
            </div>
            {/* four fragrance  */}
            <div className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-3 small:gap-4">
              <div className="flex flex-col">
                <LocalizedClientLink
                  href={`/store`}
                  className="relative group cursor-pointer h-48 xsmall:h-64 small:h-80 w-full overflow-hidden"
                >
                  <Image
                    src={"/img_2-1-1-545x654.jpg"}
                    alt={"image"}
                    fill
                    className="object-cover h-full w-full"
                  />
                  <div className="absolute left-2 xsmall:left-5 top-2 xsmall:top-5 bottom-2 xsmall:bottom-5 right-2 xsmall:right-5 border-2 border-black inset-0" />
                </LocalizedClientLink>
                <div className="">
                  <h1 className="text-center text-sm xsmall:text-lg small:text-2xl pt-3 xsmall:pt-5 pb-1 xsmall:pb-2 font-medium">Cool Fragrances</h1>
                  <p className="text-center text-xs xsmall:text-sm text-slate-600 px-2">Black scalyfin kingfish convict blenny ziege yellow moray</p>
                </div>
              </div>
              <div className="flex flex-col">
                <LocalizedClientLink
                  href={`/store`}
                  className="relative group cursor-pointer h-48 xsmall:h-64 small:h-80 w-full overflow-hidden"
                >
                  <Image
                    src={"/img_2-2-1-545x654.jpg"}
                    alt={"image"}
                    fill
                    className="object-cover h-full w-full"
                  />
                  <div className="absolute left-2 xsmall:left-5 top-2 xsmall:top-5 bottom-2 xsmall:bottom-5 right-2 xsmall:right-5 border-2 border-black inset-0" />
                </LocalizedClientLink>
                <div className="">
                  <h1 className="text-center text-sm xsmall:text-lg small:text-2xl pt-3 xsmall:pt-5 pb-1 xsmall:pb-2 font-medium">Hot Fragrances</h1>
                  <p className="text-center text-xs xsmall:text-sm text-slate-600 px-2">Black scalyfin kingfish convict blenny ziege yellow moray</p>
                </div>
              </div>
              <div className="flex flex-col">
                <LocalizedClientLink
                  href={`/store`}
                  className="relative group cursor-pointer h-48 xsmall:h-64 small:h-80 w-full overflow-hidden"
                >
                  <Image
                    src={"/img_2-5-545x654.jpg"}
                    alt={"image"}
                    fill
                    className="object-cover h-full w-full"
                  />
                  <div className="absolute left-2 xsmall:left-5 top-2 xsmall:top-5 bottom-2 xsmall:bottom-5 right-2 xsmall:right-5 border-2 border-black inset-0" />
                </LocalizedClientLink>
                <div className="">
                  <h1 className="text-center text-sm xsmall:text-lg small:text-2xl pt-3 xsmall:pt-5 pb-1 xsmall:pb-2 font-medium">Dark Fragrances</h1>
                  <p className="text-center text-xs xsmall:text-sm text-slate-600 px-2">Black scalyfin kingfish convict blenny ziege yellow moray</p>
                </div>
              </div>
              <div className="flex flex-col">
                <LocalizedClientLink
                  href={`/store`}
                  className="relative group cursor-pointer h-48 xsmall:h-64 small:h-80 w-full overflow-hidden"
                >
                  <Image
                    src={"/img_2-8-545x654.jpg"}
                    alt={"image"}
                    fill
                    className="object-cover h-full w-full"
                  />
                  <div className="absolute left-2 xsmall:left-5 top-2 xsmall:top-5 bottom-2 xsmall:bottom-5 right-2 xsmall:right-5 border-2 border-black inset-0" />
                </LocalizedClientLink>
                <div className="">
                  <h1 className="text-center text-sm xsmall:text-lg small:text-2xl pt-3 xsmall:pt-5 pb-1 xsmall:pb-2 font-medium">Orange Fragrances</h1>
                  <p className="text-center text-xs xsmall:text-sm text-slate-600 px-2">Black scalyfin kingfish convict blenny ziege yellow moray</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}
