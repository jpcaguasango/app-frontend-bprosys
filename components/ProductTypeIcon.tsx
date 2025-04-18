import { CreditCard, FileText, Package, PiggyBank, ShieldCheck, SquarePercent } from 'lucide-react'
import { FC, JSX } from "react";

type Props = {
    type: string
    className?: string
}

export const ProductTypeIcon: FC<Props> = ({ type, className }: Props): JSX.Element => {
    const iconMap: Record<string, JSX.Element> = {
        'Cuenta': <PiggyBank className={className}/>,
        'Tarjeta': <CreditCard className={className}/>,
        'Fondo': <SquarePercent className={className}/>,
        'Seguro': <ShieldCheck className={className}/>,
        'Crédito': <FileText className={className}/>
    }

    return iconMap[type] || <Package className={className}/>
}