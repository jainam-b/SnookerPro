import React from 'react';
import { Trophy, Award, Target } from 'lucide-react';

export default function RecentMatchHighlight() {
  const matchStats = {
    player1: {
      name: "Ronnie O'Sullivan",
      image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80",
      score: 6,
      highestBreak: 147,
      centuries: 3,
      potSuccess: "94%"
    },
    player2: {
      name: "Judd Trump",
      image: "https://images.unsplash.com/photo-1511933617088-859b414f00ae?auto=format&fit=crop&q=80",
      score: 4,
      highestBreak: 137,
      centuries: 2,
      potSuccess: "92%"
    },
    tournament: "Masters 2024",
    round: "Semi-Final"
  };

  return (
    <section className="py-16 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <Trophy className="w-6 h-6 text-green-500" />
          <h2 className="text-3xl font-bold">Recent Match Highlight</h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Player 1 */}
            <div className="text-center space-y-4">
              <div className="relative w-48 h-48 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-full animate-pulse"></div>
                <img
                  src={matchStats.player1.image}
                  alt={matchStats.player1.name}
                  className="w-full h-full object-cover rounded-full border-4 border-green-500"
                />
              </div>
              <h3 className="text-2xl font-bold">{matchStats.player1.name}</h3>
              <div className="text-5xl font-bold text-green-500">{matchStats.player1.score}</div>
            </div>

            {/* Match Stats */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-6">
              <div className="text-center mb-8">
                <div className="text-green-500 font-medium">{matchStats.tournament}</div>
                <div className="text-sm text-gray-400">{matchStats.round}</div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">{matchStats.player1.highestBreak}</span>
                  <span className="text-sm text-gray-400">Highest Break</span>
                  <span className="text-2xl font-bold">{matchStats.player2.highestBreak}</span>
                </div>

                <div className="h-px bg-white/10"></div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">{matchStats.player1.centuries}</span>
                  <span className="text-sm text-gray-400">Century Breaks</span>
                  <span className="text-2xl font-bold">{matchStats.player2.centuries}</span>
                </div>

                <div className="h-px bg-white/10"></div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">{matchStats.player1.potSuccess}</span>
                  <span className="text-sm text-gray-400">Pot Success</span>
                  <span className="text-2xl font-bold">{matchStats.player2.potSuccess}</span>
                </div>
              </div>
            </div>

            {/* Player 2 */}
            <div className="text-center space-y-4">
              <div className="relative w-48 h-48 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-bl from-green-500/20 to-transparent rounded-full animate-pulse"></div>
                <img
                  src={matchStats.player2.image}
                  alt={matchStats.player2.name}
                  className="w-full h-full object-cover rounded-full border-4 border-green-500"
                />
              </div>
              <h3 className="text-2xl font-bold">{matchStats.player2.name}</h3>
              <div className="text-5xl font-bold text-green-500">{matchStats.player2.score}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}