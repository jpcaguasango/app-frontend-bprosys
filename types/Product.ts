export type ProductRiskLevel = 'Bajo' | 'Medio' | 'Alto' | null

export type Product = {
    id: string
    name: string
    type: string
    category: string
    interestRate: number | null
    riskLevel: ProductRiskLevel
    description: string
    performance: number[]
}

export type ProductFilterProps = {
    filtered?: Product[]
    categories: string[]
    risks: string[]
    category: string
    risk: string
    setCategory: (category: string) => void
    setRisk: (risk: string) => void
}