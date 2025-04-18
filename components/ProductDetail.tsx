'use client'

import { Product } from '@/types/Product'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { ArrowLeft, BadgeDollarSign, CalendarDays, TrendingUp } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC, JSX } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type Props = {
    product: Product
}

type ChartData = {
    name: string
    performance: number
}

export const ProductDetail: FC<Props> = ({ product }: Props): JSX.Element => {
    const router: AppRouterInstance = useRouter()

    const chartData: ChartData[] = product.performance.map((value: number, index: number): ChartData => ({
        name: `Mes ${index + 1}`,
        performance: value,
    }))

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md space-y-6 border border-gray-200">
            <div className="flex justify-between items-start">
                <div className="w-full flex justify-between items-start gap-3">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
                        <span
                            className="inline-block mt-1 text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-full capitalize">
                            {product.type}
                        </span>
                    </div>

                    <button
                        onClick={() => router.back()}
                        className="flex text-blue-600 hover:text-blue-800 hover:cursor-pointer hover:bg-blue-100 rounded-lg px-3 py-2 transition duration-200"
                        title="Volver"
                    >
                        <ArrowLeft className="w-6 h-6 mr-3"/> Regresar
                    </button>
                </div>
            </div>

            <p className="text-gray-700">{product.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800">
                <div className="flex items-center gap-2">
                    <BadgeDollarSign className="w-5 h-5 text-green-600"/>
                    <span>
            <strong>Categoría:</strong> {product.category}
          </span>
                </div>

                <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-indigo-600"/>
                    <span>
            <strong>Tasa de interés:</strong> {product.interestRate}%
          </span>
                </div>

                <div className="flex items-center gap-2">
                    <CalendarDays className="w-5 h-5 text-yellow-600"/>
                    <span>
            <strong>Riesgo:</strong> {product.riskLevel}
          </span>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-5">Rendimiento histórico</h2>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                            <XAxis dataKey="name"/>
                            <YAxis domain={['auto', 'auto']}/>
                            <Tooltip/>
                            <Line type="monotone" dataKey="performance" stroke="#2563eb" strokeWidth={2}/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}
