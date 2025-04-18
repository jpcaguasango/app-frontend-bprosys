'use client'

import Link from 'next/link'
import { ChildrenProps } from "@/types/Global";
import { Landmark } from "lucide-react";
import { FC, JSX } from "react";

export const Layout: FC<ChildrenProps> = ({ children }: ChildrenProps): JSX.Element => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
            <header className="bg-blue-600 text-white px-6 py-4 shadow-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center text-xl font-bold tracking-tight">
                        <Landmark size={24} className="mr-3"/> Fintech Productos
                    </Link>
                </div>
            </header>

            <main className="flex-1 px-4 py-6 max-w-7xl mx-auto w-full">
                {children}
            </main>

            <footer className="mt-auto bg-gray-100 text-sm text-center py-4 text-gray-500">
                © {new Date().getFullYear()} Fintech. Todos los derechos reservados.
            </footer>
        </div>
    )
}