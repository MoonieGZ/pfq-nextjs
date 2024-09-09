"use client"

import React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const ranks = [
  { name: "Pokédex", progress: 65 },
  { name: "Eggdex", progress: 40 },
  { name: "Shiny Dex", progress: 25 },
]

export default function PlayerRank() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Player Rank</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {ranks.map((rank, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{rank.name}</h3>
              <span className="text-sm">{rank.progress}%</span>
            </div>
            <Progress value={rank.progress} />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}