"use client"

import Image from "next/image"
import React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const showcasePokemon = [
  { name: "Mewtwo", icon: "/images/pkmn/Mewtwo.png?height=80&width=80" },
  { name: "Dragonite", icon: "/images/pkmn/Dragonite.png?height=80&width=80" },
  { name: "Gardevoir", icon: "/images/pkmn/Gardevoir.png?height=80&width=80" },
  { name: "Cosmog", icon: "/images/pkmn/Cosmog.png?height=80&width=80" },
  { name: "Latias", icon: "/images/pkmn/Latias.png?height=80&width=80" },
  { name: "Azelf", icon: "/images/pkmn/Azelf.png?height=80&width=80" },
]

export default function Showcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Showcase</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          {showcasePokemon.map((pokemon, index) => (
            <div key={index} className="text-center">
              <Image src={pokemon.icon} width={80} height={80} alt={pokemon.name} className="mx-auto" />
              <p className="mt-2 text-sm font-medium">{pokemon.name}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}