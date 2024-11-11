import React from 'react';
import { Star, Award, Trophy } from 'lucide-react';

const players = [
  {
    name: "Ronnie O'Sullivan",
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80",
    titles: 39,
    ranking: 1,
    nickname: "The Rocket"
  },
  {
    name: "Judd Trump",
    image: "https://images.unsplash.com/photo-1511933617088-859b414f00ae?auto=format&fit=crop&q=80",
    titles: 23,
    ranking: 2,
    nickname: "The Ace"
  },
  {
    name: "Mark Selby",
    image: "https://images.unsplash.com/photo-1519160558534-579f5106e43f?auto=format&fit=crop&q=80",
    titles: 20,
    ranking: 3,
    nickname: "The Jester"
  }
];

export default function PlayerSpotlight() {
  return (
    <section className="py-16 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <Star className="w-6 h-6 text-green-500" />
          <h2 className="text-3xl font-bold">Player Spotlight</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {players.map((player, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={player.image} 
                  alt={player.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="absolute bottom-0 p-6 space-y-3">
                  <h3 className="text-2xl font-bold">{player.name}</h3>
                  <p className="text-green-500 font-medium">{player.nickname}</p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-green-500" />
                      <span>{player.titles} Titles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-green-500" />
                      <span>Rank #{player.ranking}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}