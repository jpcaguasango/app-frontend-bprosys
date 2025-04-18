import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/Layout";
import { ChildrenProps } from "@/types/Global";
import { JSX } from "react";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

const poppins: NextFontWithVariable = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-poppins',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Fintech - Catálogo de productos',
    description: 'Explora diferentes productos financieros con análisis y filtros.'
}

export default function RootLayout({ children }: Readonly<ChildrenProps>): JSX.Element {
    return (
        <html lang="en">
        <body className={`${poppins.variable} font-sans bg-slate-50 text-slate-800`}>
        <Layout>{children}</Layout>
        </body>
        </html>
    );
}
