"use client"

import React from "react"

type ConcentrationSelectorProps = {
    concentrations: string[]
    selectedConcentration?: string
    onConcentrationChange: (value: string) => void
}

const ConcentrationSelector: React.FC<ConcentrationSelectorProps> = ({
    concentrations,
    selectedConcentration,
    onConcentrationChange,
}) => {
    if (!concentrations || concentrations.length === 0) {
        return null
    }

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Concentration
            </label>
            <select
                value={selectedConcentration || ""}
                onChange={(e) => onConcentrationChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#339994] focus:border-[#339994]"
            >
                <option value="">Select Concentration</option>
                {concentrations.map((conc, index) => (
                    <option key={index} value={conc}>
                        {conc}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ConcentrationSelector
