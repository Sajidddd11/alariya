"use client"

import React from "react"

type OptionRendererProps = {
    option: {
        id: string
        title: string
        values: Array<{ id: string; value: string }>
    }
    selectedValue?: string
    onValueChange: (optionId: string, value: string) => void
    product?: any // For accessing metadata
}

const OptionRenderer: React.FC<OptionRendererProps> = ({
    option,
    selectedValue,
    onValueChange,
    product,
}) => {
    const optionTitle = option.title?.toLowerCase() || ""

    // VOLUME: Button layout (15mL, 30mL, 50mL, 100mL)
    if (optionTitle === "volume") {
        return (
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    {option.title}
                </label>
                <div className="flex gap-2">
                    {option.values.map((val) => (
                        <button
                            key={val.id}
                            onClick={() => onValueChange(option.id, val.value)}
                            className={`px-4 py-2 text-sm font-medium transition-colors ${selectedValue === val.value
                                ? "bg-[#339994] text-white"
                                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                                }`}
                        >
                            {val.value}
                        </button>
                    ))}
                </div>
            </div>
        )
    }

    // BOTTLE: Image grid layout (Type 1, Type 2, Type 3)
    if (optionTitle === "bottle" || optionTitle === "bottle design") {
        // Map of bottle type to image URL (you can update these URLs)
        const bottleImages: Record<string, string> = {
            "Type 1": "/bottle1.jpg",
            "Type 2": "/bottle2.jpg",
            "Type 3": "/bottle3.jpg",
        }

        return (
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    {option.title}
                </label>
                <div className="grid grid-cols-3 gap-2">
                    {option.values.map((val) => {
                        const imageUrl = bottleImages[val.value]

                        return (
                            <button
                                key={val.id}
                                onClick={() => onValueChange(option.id, val.value)}
                                className={`relative p-2 border transition-all ${selectedValue === val.value
                                    ? "border-[#339994] bg-[#339994]/5"
                                    : "border-gray-200 hover:border-gray-300"
                                    }`}
                            >
                                {/* Bottle image or placeholder */}
                                <div className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
                                    {imageUrl ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={imageUrl}
                                            alt={val.value}
                                            className="w-full h-full object-contain"
                                            onError={(e) => {
                                                // Fallback to SVG if image fails to load
                                                e.currentTarget.style.display = 'none'
                                                const parent = e.currentTarget.parentElement
                                                if (parent) {
                                                    parent.innerHTML = `
                            <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                            </svg>
                          `
                                                }
                                            }}
                                        />
                                    ) : (
                                        // SVG placeholder if no image URL
                                        <svg
                                            className="w-12 h-12 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                            />
                                        </svg>
                                    )}
                                </div>
                                <p className="text-xs text-center mt-1 font-medium">{val.value}</p>
                                {selectedValue === val.value && (
                                    <div className="absolute top-1 right-1 w-4 h-4 bg-[#339994] rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </button>
                        )
                    })}
                </div>
            </div>
        )
    }

    // DEFAULT: Dropdown for any other option (Concentration, Size, Color, etc.)
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {option.title}
            </label>
            <select
                value={selectedValue || ""}
                onChange={(e) => onValueChange(option.id, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#339994] focus:border-[#339994]"
            >
                <option value="">Select {option.title}</option>
                {option.values.map((val) => (
                    <option key={val.id} value={val.value}>
                        {val.value}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default OptionRenderer
