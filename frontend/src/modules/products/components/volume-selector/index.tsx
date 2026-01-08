"use client"

import { useState } from "react"

interface VolumeSelectorProps {
    onVolumeChange?: (volume: string, index: number) => void
}

const volumes = ["15mL", "30mL", "50mL", "100mL"]

export default function VolumeSelector({ onVolumeChange }: VolumeSelectorProps) {
    const [selectedVolume, setSelectedVolume] = useState<number>(1) // Default to 30mL

    const handleVolumeChange = (index: number) => {
        setSelectedVolume(index)
        onVolumeChange?.(volumes[index], index)
    }

    return (
        <div className="mt-4">
            <h3 className="text-sm font-semibold text-[#339994] mb-2">Volume</h3>

            {/* Volume Buttons Grid */}
            <div className="grid grid-cols-4 gap-2">
                {volumes.map((volume, index) => (
                    <button
                        key={volume}
                        onClick={() => handleVolumeChange(index)}
                        className={`relative py-2 px-1 text-xs font-semibold transition-all duration-300 ${selectedVolume === index
                                ? "bg-[#339994] text-white shadow-md scale-105"
                                : "bg-gray-100 text-gray-700 hover:bg-[#339994]/10 hover:text-[#339994]"
                            }`}
                    >
                        {volume}

                        {/* Selected Indicator */}
                        {selectedVolume === index && (
                            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-white flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-[#339994]"></div>
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}
