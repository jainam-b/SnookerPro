import React from 'react';
import { Star, Award, Trophy } from 'lucide-react';

const players = [
  {
    name: "Ronnie O'Sullivan",
    image: "https://img.gc.wstservices.co.uk/fit-in/400x600/a51dead0-9c1d-11ee-a781-83e0e6ce5afb.png",
    titles: 39,
    ranking: 1,
    nickname: "The Rocket"
  },
  {
    name: "Judd Trump",
    image: "https://img.gc.wstservices.co.uk/fit-in/400x600/7af59cf0-588b-11ef-8896-f9bd1bf1a8a7.png",
    titles: 23,
    ranking: 2,
    nickname: "The Ace"
  },
  {
    name: "Mark Selby",
    image: "https://img.gc.wstservices.co.uk/fit-in/400x600/5059a5c0-9c3b-11ee-aead-69bae4cf59d3.png",
    titles: 20,
    ranking: 3,
    nickname: "The Jester"
  },

];

export default function PlayerSpotlight() {
  return (
    <section className="py-16 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <Star className="w-6 h-6 text-red-500" />
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
                  <p className="text-red-500 font-medium">{player.nickname}</p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-red-500" />
                      <span>{player.titles} Titles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-red-500" />
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