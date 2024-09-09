"use client"

import Image from 'next/image'

export function CurrencyDisplay({ icon, amount }: { icon: string; amount: number }) {
  return (
    <div className="flex items-center">
      <Image src={icon} width={16} height={16} alt="Currency Icon" />
      <span className="ml-1">{amount.toLocaleString()}</span>
    </div>
  )
}