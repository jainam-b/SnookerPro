import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const matches = [
  {
    id: 1,
    tournament: "World Championship",
    round: "Semi-Final",
    player1: "Ronnie O'Sullivan",
    player2: "Judd Trump",
    date: "Mar 15, 2024",
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tournament: "Masters",
    round: "Quarter-Final",
    player1: "Mark Selby",
    player2: "Neil Robertson",
    date: "Mar 16, 2024",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tournament: "UK Championship",
    round: "Final",
    player1: "John Higgins",
    player2: "Ding Junhui",
    date: "Mar 18, 2024",
    image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&q=80"
  }
];

export default function MatchCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % matches.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % matches.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + matches.length) % matches.length);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Matches</h2>
        
        <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {matches.map((match) => (
              <div 
                key={match.id}
                className="w-full flex-shrink-0"
              >
                <div className="relative aspect-[21/9]">
                  <img 
                    src={match.image}
                    alt={`${match.player1} vs ${match.player2}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <div className="absolute bottom-0 w-full p-8">
                      <div className="max-w-3xl">
                        <div className="text-green-500 font-medium mb-2">
                          {match.tournament} • {match.round}
                        </div>
                        <h3 className="text-4xl font-bold mb-4">
                          {match.player1} <span className="text-green-500">vs</span> {match.player2}
                        </h3>
                        <p className="text-xl text-gray-300">{match.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {matches.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentSlide(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? 'bg-green-500' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}