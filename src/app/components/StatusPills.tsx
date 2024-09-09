"use client"

import { Badge } from '@/components/ui/badge'
import { Clock, Egg, Zap, Diamond } from 'lucide-react'
import React from 'react'

export function StatusPills() {
  const statuses = [
    { icon: <Clock className="w-4 h-4" />, text: 'Interactions: 10/25' },
    { icon: <Egg className="w-4 h-4" />, text: 'Egg Timer Level: 3' },
    { icon: <Zap className="w-4 h-4" />, text: 'Hypermode: 30 min left' },
    { icon: <Diamond className="w-4 h-4" />, text: 'Shiny Charm: 2 hrs left' },
  ]

  return (
    <div className="flex space-x-2">
      {statuses.map((status, index) => (
        <Badge key={index} variant="secondary" className="flex items-center space-x-1">
          {status.icon}
          <span>{status.text}</span>
        </Badge>
      ))}
    </div>
  )
}