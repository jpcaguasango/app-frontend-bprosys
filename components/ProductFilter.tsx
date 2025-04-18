'use client'

import { ProductFilterProps } from "@/types/Product";
import { ChangeEvent, FC, JSX } from "react";

export const ProductFilter: FC<ProductFilterProps> = ({
  categories,
  risks,
  category,
  risk,
  setCategory,
  setRisk
}: ProductFilterProps): JSX.Element => {
    return (
        <div className="bg-white shadow-sm p-4 rounded-xl mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de producto</label>
                <select
                    value={category}
                    onChange={(e: ChangeEvent<HTMLSelectElement>): void => setCategory(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
                >
                    {categories.map((cat: string, index: number): JSX.Element => (
                        <option key={index} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nivel de riesgo</label>
                <select
                    value={risk}
                    onChange={(e: ChangeEvent<HTMLSelectElement>): void => setRisk(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
                >
                    {risks.map((risk: string, index: number): JSX.Element => (
                        <option key={index} value={risk}>
                            {risk}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}