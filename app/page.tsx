'use client'

import { ProductCard } from '@/components/ProductCard'
import { ProductFilter } from '@/components/ProductFilter'
import { useFilteredProducts } from '@/hooks/useFilteredProducts'
import productsData from '@/data/products.json'
import { Product } from '@/types/Product'
import { JSX } from "react";

const HomePage = (): JSX.Element => {
    const products = productsData as Product[]
    const { filtered, category, setCategory, categories, risk, setRisk, risks } = useFilteredProducts(products)

    return (
        <main className="p-4 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Catálogo de Productos Financieros</h1>
            <ProductFilter
                categories={categories}
                category={category}
                risks={risks}
                risk={risk}
                setCategory={setCategory}
                setRisk={setRisk}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered?.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </main>
    )
}

export default HomePage