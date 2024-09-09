import Image from 'next/image'
import React from 'react'

export function BonusCounters() {
  const bonuses = [
    { icon: '/images/bonus/niet-0.png', status: 'x2' },
    { icon: '/images/bonus/garthic-0.png', status: '+5' },
    { icon: '/images/bonus/suriya-0.png', status: '371k' },
    { icon: '/images/bonus/ravyne-0.png', status: '923k' },
    { icon: '/images/bonus/novie-chan-0.png', status: '393M' },
    { icon: '/images/bonus/shazi-0.png', status: '500k' },
    { icon: '/images/bonus/eltafez-0.png', status: '573k' },
    { icon: '/images/bonus/sei-0.png', status: '5412' },
  ]

  return (
    <div className="flex justify-around">
      {bonuses.map((bonus, index) => (
        <div key={index} className="text-center">
          <Image src={bonus.icon} width={32} height={32} alt={`Bonus ${index + 1}`} />
          <p className="text-sm">{bonus.status}</p>
        </div>
      ))}
    </div>
  )
}