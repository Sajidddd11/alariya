"use server"

import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

interface CategoryShowcaseProps {
  categories: HttpTypes.StoreProductCategory[]
  countryCode: string
}

export default async function CategoryShowcase({
  categories,
  countryCode,
}: CategoryShowcaseProps) {
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
                      <div
                        className="btn-unified inline-block px-4 xsmall:px-6 small:px-8 py-1.5 xsmall:py-2 small:py-3 text-grey-90 text-xs xsmall:text-sm small:text-base font-semibold relative z-10 cursor-pointer"
                      >
                        <span className="relative z-10">SHOP NOW</span>
                      </div>
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
                      <div
                        className="btn-unified inline-block px-4 xsmall:px-6 small:px-8 py-1.5 xsmall:py-2 small:py-3 text-grey-90 text-xs xsmall:text-sm small:text-base font-semibold relative z-10 cursor-pointer"
                      >
                        <span className="relative z-10">SHOP NOW</span>
                      </div>
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
                    src={"/6.jpg"}
                    alt={"image"}
                    fill
                    className="object-cover h-full w-full"
                  />
                  <div className="absolute left-2 xsmall:left-5 top-2 xsmall:top-5 bottom-2 xsmall:bottom-5 right-2 xsmall:right-5 border border-black inset-0" />
                </LocalizedClientLink>
                <div className="">
                  <h1 className="text-center text-sm xsmall:text-lg small:text-2xl pt-3 xsmall:pt-5 pb-1 xsmall:pb-2 font-medium">Floral Collection</h1>
                  <p className="text-center text-xs xsmall:text-sm text-slate-600 px-2">The Floral Collection captures the beauty of blooming flowers through soft, elegant, and romantic compositions. Featuring notes like rose, jasmine, and peony, these fragrances are light to moderately intense and ideal for everyday wear, expressing timeless femininity and natural charm.</p>
                </div>
              </div>
              <div className="flex flex-col">
                <LocalizedClientLink
                  href={`/store`}
                  className="relative group cursor-pointer h-48 xsmall:h-64 small:h-80 w-full overflow-hidden"
                >
                  <Image
                    src={"/7.jpg"}
                    alt={"image"}
                    fill
                    className="object-cover h-full w-full"
                  />
                  <div className="absolute left-2 xsmall:left-5 top-2 xsmall:top-5 bottom-2 xsmall:bottom-5 right-2 xsmall:right-5 border border-black inset-0" />
                </LocalizedClientLink>
                <div className="">
                  <h1 className="text-center text-sm xsmall:text-lg small:text-2xl pt-3 xsmall:pt-5 pb-1 xsmall:pb-2 font-medium">Woody Essence</h1>
                  <p className="text-center text-xs xsmall:text-sm text-slate-600 px-2">Woody Essence is defined by deep, warm, and earthy aromas built around cedarwood, sandalwood, vetiver, and leather. These fragrances offer a bold and confident character with long-lasting depth, making them perfect for evening wear and cooler seasons.
</p>
                </div>
              </div>
              <div className="flex flex-col">
                <LocalizedClientLink
                  href={`/store`}
                  className="relative group cursor-pointer h-48 xsmall:h-64 small:h-80 w-full overflow-hidden"
                >
                  <Image
                    src={"/8.jpg"}
                    alt={"image"}
                    fill
                    className="object-cover h-full w-full"
                  />
                  <div className="absolute left-2 xsmall:left-5 top-2 xsmall:top-5 bottom-2 xsmall:bottom-5 right-2 xsmall:right-5 border border-black inset-0" />
                </LocalizedClientLink>
                <div className="">
                  <h1 className="text-center text-sm xsmall:text-lg small:text-2xl pt-3 xsmall:pt-5 pb-1 xsmall:pb-2 font-medium">Fresh & Citrus</h1>
                  <p className="text-center text-xs xsmall:text-sm text-slate-600 px-2">Fresh & Citrus fragrances deliver a clean and energizing experience with bright citrus notes, aquatic accords, and green nuances. Crisp, refreshing, and uplifting, this category is ideal for hot weather, daytime use, and active lifestyles.
</p>
                </div>
              </div>
              <div className="flex flex-col">
                <LocalizedClientLink
                  href={`/store`}
                  className="relative group cursor-pointer h-48 xsmall:h-64 small:h-80 w-full overflow-hidden"
                >
                  <Image
                    src={"/9.jpg"}
                    alt={"image"}
                    fill
                    className="object-cover h-full w-full"
                  />
                  <div className="absolute left-2 xsmall:left-5 top-2 xsmall:top-5 bottom-2 xsmall:bottom-5 right-2 xsmall:right-5 border border-black inset-0" />
                </LocalizedClientLink>
                <div className="">
                  <h1 className="text-center text-sm xsmall:text-lg small:text-2xl pt-3 xsmall:pt-5 pb-1 xsmall:pb-2 font-medium">Oriental Luxury</h1>
                  <p className="text-center text-xs xsmall:text-sm text-slate-600 px-2">Oriental Luxury represents richness and sensuality through warm amber, exotic spices, resins, and oud. These intense and long-lasting fragrances create a mysterious and opulent presence, designed for special occasions and unforgettable moments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}
