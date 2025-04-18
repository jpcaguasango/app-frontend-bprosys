'use client'

import { Product } from '@/types/Product'
import Link from 'next/link'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { ProductTypeIcon } from './ProductTypeIcon'
import { FC, JSX } from "react";

type Props = {
    product: Product
}

type RiskColor =
    'text-red-600 bg-red-100'
    | 'text-yellow-600 bg-yellow-100'
    | 'text-green-600 bg-green-100'
    | 'text-gray-600 bg-gray-100'

type GetRiskColor = (risk?: string) => RiskColor

const getRiskColor: GetRiskColor = (risk?: string): RiskColor => {
    if (risk === 'Alto') return 'text-red-600 bg-red-100'
    if (risk === 'Medio') return 'text-yellow-600 bg-yellow-100'
    if (risk === 'Bajo') return 'text-green-600 bg-green-100'
    return 'text-gray-600 bg-gray-100'
}

export const ProductCard: FC<Props> = ({ product }: Props): JSX.Element => {
    return (
        <Link href={`/product/${product.id}`}>
            <div className="h-50 bg-white rounded-2xl shadow-md p-5 transition hover:shadow-lg">
                <div className="flex justify-between items-center mb-3">
                    <ProductTypeIcon type={product.type} className="w-6 h-6 text-blue-600"/>
                    {product.riskLevel && (
                        <span
                            className={`text-xs font-semibold px-2 py-1 rounded-full ${getRiskColor(product.riskLevel)}`}> Riesgo: {product.riskLevel}
                        </span>
                    )}
                </div>

                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="h-15 text-sm text-gray-600 mb-2 line-clamp-3">{product.description}</p>

                <div className={`mt-4 flex ${product.interestRate ? 'justify-between' : 'justify-end'} items-center`}>
                    {product.interestRate && (
                        <span className="text-sm text-gray-700 flex items-center">
                            <TrendingUp size={18} className="mr-3"/>
                            {product.interestRate.toFixed(2)}% interés
                        </span>
                    )}
                    <ArrowRight size={18} className="text-blue-600"/>
                </div>
            </div>
        </Link>
    )
}
