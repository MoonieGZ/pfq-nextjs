"use client"

import Image from 'next/image'
import Link from 'next/link'

import { Bell, Star, Users, Clock, MessageCircle, Facebook, Twitter } from 'lucide-react'

import { CurrencyDisplay } from './CurrencyDisplay'
import { NavigationButtons } from './NavigationButtons'
import { BonusCounters } from './BonusCounters'
import { StatusPills } from './StatusPills'


export default function GameHeader() {
  return (
    <header className="w-full bg-gray-800 text-white">
      {/* Top Row */}
      <div className="flex items-center justify-between px-4 py-2">
        {/* User Info */}
        <div className="flex items-center space-x-4">
          <Image src="/images/avatar.png?height=48&width=48" width={48} height={48} alt="User Avatar" className="rounded-full" />
          <div>
            <div className="flex items-center">
              <span className="font-bold mr-2">Username</span>
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="ml-1">123</span>
            </div>
            <div className="text-sm">
              <Link href="/clickback" className="mr-2 hover:underline">Clickback</Link>
              <Link href="/wiki" className="hover:underline">Wiki</Link>
            </div>
          </div>
        </div>

        {/* Center Info */}
        <div className="text-center">
          <div className="flex items-center justify-center">
            <Users className="w-4 h-4 mr-1" />
            <span>1234 Online</span>
          </div>
          <div className="flex space-x-4">
            <CurrencyDisplay icon="/images/credits.png?height=16&width=16" amount={1000} />
            <CurrencyDisplay icon="/images/gold.png?height=16&width=16" amount={500} />
            <CurrencyDisplay icon="/images/zophan.png?height=16&width=16" amount={250} />
          </div>
        </div>

        {/* Right Info */}
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>12:34 UTC</span>
            </div>
            <div className="text-sm">
              <Link href="/pms" className="mr-2 hover:underline">PMs</Link>
              <Link href="/forums" className="hover:underline">Forums</Link>
            </div>
          </div>
          <Bell className="w-8 h-8" />
        </div>
      </div>

      {/* Navigation and Bonus Counters */}
      <div className="flex px-4 py-2">
        <div className="w-4/5">
          <NavigationButtons />
        </div>
        <div className="w-1/5">
          <BonusCounters />
          <div className="text-sm mt-2 text-center">
            <p>PotD: Ralts V~Wave: Stellar<br />PokéRus: 15 minutes left</p>
          </div>
        </div>
      </div>

      {/* Status Pills and Social Links */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-700">
        <StatusPills />
        <div className="flex space-x-4">
          <Link href="/discord"><MessageCircle className="w-6 h-6" /></Link>
          <Link href="/facebook"><Facebook className="w-6 h-6" /></Link>
          <Link href="/twitter"><Twitter className="w-6 h-6" /></Link>
        </div>
      </div>
    </header>
  )
}