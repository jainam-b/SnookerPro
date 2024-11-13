import React from 'react'
import { Trophy } from 'lucide-react'
import Image from 'next/image'

// Define match stats type
interface Player {
  name: string
  image: string
  score: number
  highestBreak: number
  centuries: number
  potSuccess: string
}

interface MatchStats {
  player1: Player
  player2: Player
  tournament: string
  round: string
}

export default function RecentMatchHighlight() {
  const matchStats: MatchStats = {
    player1: {
      name: "Ronnie O'Sullivan",
      image: "https://img.gc.wstservices.co.uk/fit-in/400x600/7af59cf0-588b-11ef-8896-f9bd1bf1a8a7.png",
      score: 6,
      highestBreak: 147,
      centuries: 3,
      potSuccess: "94%"
    },
    player2: {
      name: "Judd Trump",
      image: "https://img.gc.wstservices.co.uk/fit-in/400x600/a51dead0-9c1d-11ee-a781-83e0e6ce5afb.png",
      score: 4,
      highestBreak: 137,
      centuries: 2,
      potSuccess: "92%"
    },
    tournament: "Masters 2024",
    round: "Semi-Final"
  }

  return (
    <section className="py-8 md:py-16 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-6 md:mb-8">
          <Trophy className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
          <h2 className="text-2xl md:text-3xl font-bold">Recent Match Highlight</h2>
        </div>

        <div className="md:grid md:grid-cols-3 md:gap-8 items-center">
          {/* Mobile: Player images side by side, Desktop: Player 1 */}
          <div className="flex justify-between md:block mb-6 md:mb-0">
            <PlayerInfo player={matchStats.player1} />
            <div className='block md:hidden'>
              <PlayerInfo player={matchStats.player2} /> 
            </div>
          </div>

          {/* Mobile: Full width, Desktop: Center column */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10 p-4 md:p-8 space-y-4 md:space-y-6 mb-6 md:mb-0">
            <div className="text-center mb-4 md:mb-8">
              <div className="text-red-500 font-medium">{matchStats.tournament}</div>
              <div className="text-xs md:text-sm text-gray-400">{matchStats.round}</div>
            </div>

            <div className="space-y-3 md:space-y-4">
              <StatRow label="Highest Break" value1={matchStats.player1.highestBreak} value2={matchStats.player2.highestBreak} />
              <div className="h-px bg-white/10"></div>
              <StatRow label="Century Breaks" value1={matchStats.player1.centuries} value2={matchStats.player2.centuries} />
              <div className="h-px bg-white/10"></div>
              <StatRow label="Pot Success" value1={matchStats.player1.potSuccess} value2={matchStats.player2.potSuccess} />
            </div>
          </div>

          {/* Mobile: Included in top flex container, Desktop: Player 2 */}
          <div className="hidden md:block">
            <PlayerInfo player={matchStats.player2} reverse />
          </div>
        </div>
      </div>
    </section>
  )
}

interface PlayerInfoProps {
  player: Player
  reverse?: boolean
}

function PlayerInfo({ player, reverse = false }: PlayerInfoProps) {
  return (
    <div className={`text-center space-y-3 md:space-y-4 ${reverse ? 'md:order-last' : ''}`}>
      <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto">
        <div className={`absolute inset-0 bg-gradient-to-${reverse ? 'bl' : 'br'} from-red-500/20 to-transparent rounded-full animate-pulse`}></div>
        <Image
          src={player.image}
          alt={`${player.name}'s photo`}
          width={192}
          height={192}
          className="w-full h-full object-cover rounded-full border-4 border-red-500"
        />
      </div>
      <h3 className="text-lg md:text-2xl font-bold">{player.name}</h3>
      <div className="text-3xl md:text-5xl font-bold text-red-500">{player.score}</div>
    </div>
  )
}

interface StatRowProps {
  label: string
  value1: number | string
  value2: number | string
}

function StatRow({ label, value1, value2 }: StatRowProps) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-lg md:text-2xl font-bold">{value1}</span>
      <span className="text-xs md:text-sm text-gray-400">{label}</span>
      <span className="text-lg md:text-2xl font-bold">{value2}</span>
    </div>
  )
}
