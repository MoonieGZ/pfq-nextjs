"use client"

import { Button } from '@/components/ui/button'
import { FlaskConical, Users, Wheat, Home, ShoppingCart, Egg, Book } from 'lucide-react'

export function NavigationButtons() {
  const topButtons = [
    { name: 'Lab', icon: FlaskConical },
    { name: 'Party', icon: Users },
    { name: 'Farm', icon: Wheat },
    { name: 'Shelter', icon: Home },
    { name: 'Market', icon: ShoppingCart },
    { name: 'Daycare', icon: Egg },
    { name: 'Pokédex', icon: Book },
  ]
  const bottomButtons = ['Fields', 'Scours', 'Wishforge', 'Supplier', 'Garden', 'Trades']

  return (
    <div className="space-y-2 w-full">
      <div className="flex w-full">
        {topButtons.map(({ name, icon: Icon }) => (
          <Button 
            key={name} 
            className="flex-1 mx-0.5 flex flex-col items-center justify-center p-0 h-16 w-16"
          >
            <Icon className="h-6 w-6 mb-1" />
            <span className="text-xs">{name}</span>
          </Button>
        ))}
      </div>
      <div className="flex w-full">
        {bottomButtons.map((button) => (
          <Button key={button} size="sm" className="flex-1 mx-0.5">
            {button}
          </Button>
        ))}
        <Button size="sm" className="flex-1 mx-0.5">
          More...
        </Button>
      </div>
    </div>
  )
}