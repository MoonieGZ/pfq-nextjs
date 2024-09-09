"use client"

import GameHeader from './components/GameHeader'
import TaskList from './components/TaskList'
import PartyPokemon from './components/PartyPokemon'
import Showcase from './components/Showcase'
import PlayerRank from './components/PlayerRank'
import VIPList from './components/VIPList'

export default function PartyView() {
  return (
    <div className="min-h-screen bg-gray-600">
      <GameHeader />
      <main className="container mx-auto w-3/4 py-8">
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-1 ">
            <TaskList />
          </div>
          <div className="col-span-2 space-y-2">
            <PartyPokemon />
            <Showcase />
            <PlayerRank />
          </div>
          <div className="col-span-1">
            <VIPList />
          </div>
        </div>
      </main>
    </div>
  )
}