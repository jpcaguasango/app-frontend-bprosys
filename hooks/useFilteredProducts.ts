import { useState, useMemo } from 'react'
import { Product, ProductFilterProps, ProductRiskLevel } from '@/types/Product'

type FilteredProducts = (products: Product[]) => ProductFilterProps

export const useFilteredProducts: FilteredProducts = (products: Product[]): ProductFilterProps => {
    const [category, setCategory] = useState<string>('Todos')
    const [risk, setRisk] = useState<string>('Todos')

    const filtered: Product[] = useMemo((): Product[] => {
        return products.filter((p: Product): boolean =>
            (category === 'Todos' || p.category === category) &&
            (risk === 'Todos' || p.riskLevel === risk)
        )
    }, [products, category, risk])

    const categories: string[] = useMemo((): string[] => {
        const all: string[] = products.map((p: Product): string => p.category)
        return ['Todos', ...Array.from(new Set(all))]
    }, [products])

    const risks: string[] = useMemo((): string [] => {
        const all: ProductRiskLevel[] = products.map((p: Product): ProductRiskLevel => p.riskLevel)
        return ['Todos', ...Array.from(new Set(all.filter((f: ProductRiskLevel) => f !== null)))]
    }, [products])

    return {
        filtered,
        category,
        setCategory,
        categories,
        risk,
        setRisk,
        risks,
    }
}
