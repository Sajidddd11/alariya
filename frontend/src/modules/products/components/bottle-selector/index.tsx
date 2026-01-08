"use client"

import { useState } from "react"
import Image from "next/image"

interface BottleSelectorProps {
    onBottleChange?: (bottle: string) => void
}

const bottles = [
    { name: "Type 1", image: "/bottle1.jpg" },
    { name: "Type 2", image: "/bottle2.jpg" },
    { name: "Type 3", image: "/bottle3.jpg" },
]

export default function BottleSelector({ onBottleChange }: BottleSelectorProps) {
    const [selectedBottle, setSelectedBottle] = useState<string>("Type 1")

    const handleBottleChange = (bottle: string) => {
        setSelectedBottle(bottle)
        onBottleChange?.(bottle)
    }

    return (
        <div className="mt-4 border-t border-gray-200 pt-4">
            <h3 className="text-sm font-semibold text-[#339994] mb-2">Bottle Design</h3>

            <div className="grid grid-cols-3 gap-2">
                {bottles.map((bottle) => (
                    <button
                        key={bottle.name}
                        onClick={() => handleBottleChange(bottle.name)}
                        className={`group relative overflow-hidden transition-all duration-300 ${selectedBottle === bottle.name
                            ? "ring-2 ring-[#339994] shadow-md scale-105"
                            : "ring-1 ring-gray-200 hover:ring-[#339994]"
                            }`}
                    >
                        {/* Bottle Image */}
                        <div className="aspect-square bg-gradient-to-br from-[#EBF4F4] to-white p-2">
                            <div className="relative h-full w-full">
                                <Image
                                    src={bottle.image}
                                    alt={bottle.name}
                                    fill
                                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                        </div>

                        {/* Bottle Name */}
                        <div
                            className={`py-1 text-xs font-medium text-center transition-colors duration-300 ${selectedBottle === bottle.name
                                ? "bg-[#339994] text-white"
                                : "bg-gray-50 text-gray-700 group-hover:bg-[#339994]/10"
                                }`}
                        >
                            {bottle.name}
                        </div>

                        {/* Selected Indicator */}
                        {selectedBottle === bottle.name && (
                            <div className="absolute top-1 right-1 w-4 h-4 bg-[#339994] flex items-center justify-center">
                                <svg
                                    className="w-2.5 h-2.5 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={4}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}
