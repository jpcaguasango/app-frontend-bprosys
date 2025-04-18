import { notFound } from 'next/navigation'
import products from '@/data/products.json'
import { Product } from '@/types/Product'
import { ProductDetail } from '@/components/ProductDetail'
import { Metadata } from "next";

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const product: Product | undefined = (products as Product[]).find((p: Product): boolean => p.id === id)

    if (!product) return {}

    return {
        title: `Fintech - ${product.name}`,
        description: product.description,
    }
}


export default async function ProductPage({ params }: Props) {
    const { id } = await params
    const product = (products as Product[]).find(p => p.id === id)

    if (!product) return notFound()

    return (
        <main className="p-4 max-w-4xl mx-auto">
            <ProductDetail product={product}/>
        </main>
    )
}
