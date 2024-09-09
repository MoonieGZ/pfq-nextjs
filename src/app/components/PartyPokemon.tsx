"use client"

import Image from "next/image"
import React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { MoreVertical, Heart } from "lucide-react"

const partyPokemon = [
  { name: "Kirlia", level: 25, maxLevel: 100, icon: "/images/pkmn/Albino_Kirlia.png?height=50&width=50", food: "Berries", type: "Electric", happiness: 85, nature: "Jolly", gender: "male" },
  { name: "Kirlia", level: 50, maxLevel: 100, icon: "/images/pkmn/Albino_Kirlia.png?height=50&width=50", food: "Meat", type: "Fire/Flying", happiness: 90, nature: "Adamant", gender: "female" },
  { name: "Kirlia", level: 15, maxLevel: 100, icon: "/images/pkmn/Albino_Kirlia.png?height=50&width=50", food: "Leaves", type: "Grass/Poison", happiness: 75, nature: "Calm", gender: "male" },
  { name: "Kirlia", level: 40, maxLevel: 100, icon: "/images/pkmn/Albino_Kirlia.png?height=50&width=50", food: "Fish", type: "Water/Flying", happiness: 80, nature: "Brave", gender: "female" },
  { name: "Kirlia", level: 35, maxLevel: 100, icon: "/images/pkmn/Albino_Kirlia.png?height=50&width=50", food: "Shadows", type: "Ghost/Poison", happiness: 88, nature: "Timid", gender: "male" },
  { name: "Kirlia", level: 45, maxLevel: 100, icon: "/images/pkmn/Albino_Kirlia.png?height=50&width=50", food: "Everything", type: "Normal", happiness: 95, nature: "Relaxed", gender: "male" },
]

export default function PartyPokemon() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Party</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {partyPokemon.map((pokemon, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-4">
                <div className="absolute top-2 right-2 text-gray-500">
                  {pokemon.gender === "male" ? "♂" : "♀"}
                </div>
                <div className="flex items-center space-x-4">
                  <Image src={pokemon.icon} width={50} height={50} alt={pokemon.name} />
                  <div>
                    <h3 className="font-semibold">{pokemon.name}</h3>
                    <Progress value={(pokemon.level / pokemon.maxLevel) * 100} className="w-24" />
                    <span className="text-sm">Lvl {pokemon.level}</span>
                  </div>
                </div>
                <div className="mt-2 text-sm">
                  <p>Food: {pokemon.food}</p>
                  <p>Type: {pokemon.type}</p>
                  <p>Nature: {pokemon.nature}</p>
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-1 text-red-500" />
                    <span>{pokemon.happiness}%</span>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2">
                  <MoreVertical className="w-5 h-5 text-gray-500 cursor-pointer" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}