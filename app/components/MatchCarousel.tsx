'use client'

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const matches = [
  {
    id: 1,
    tournament: "World Championship",
    round: "Semi-Final",
    player1: "Ronnie O'Sullivan",
    player2: "Judd Trump",
    date: "Mar 15, 2024",
    image: "https://img.gc.wstservices.co.uk/fit-in/1200x1200/8cad8f60-04ae-11ef-9f21-bb10804055d1.jpg"
  },
  {
    id: 2,
    tournament: "Masters",
    round: "Quarter-Final",
    player1: "Mark Selby",
    player2: "Neil Robertson",
    date: "Mar 16, 2024",
    image: "https://img.gc.wstservices.co.uk/fit-in/1200x1200/9a3df3b0-9eb3-11ee-8d72-df75437d5be6.jpg"
  },
]

export default function MatchCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % matches.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % matches.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + matches.length) % matches.length)
  }

  return (
    <section className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 ">Featured Matches</h2>
        
        <div className="relative overflow-hidden rounded-lg md:rounded-2xl bg-[#0c4700]/80 backdrop-blur-sm border border-[#e6d0a2]/20">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {matches.map((match) => (
              <div 
                key={match.id}
                className="w-full flex-shrink-0"
              >
                <div className="relative aspect-[16/9] md:aspect-[21/9]">
                  <Image 
                    src={match.image}
                    alt={`${match.player1} vs ${match.player2}`}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a3200]/90 via-[#0a3200]/50 to-transparent">
                    <div className="absolute bottom-0 w-full p-4 md:p-8">
                      <div className="max-w-3xl">
                        <div className="text-[#e6d0a2] font-medium mb-1 md:mb-2 text-sm md:text-base">
                          {match.tournament} • {match.round}
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-white">
                          {match.player1} <span className="text-[#e6d0a2]">vs</span> {match.player2}
                        </h3>
                        <p className="text-lg md:text-xl text-[#e6d0a2]/80">{match.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-[#0a3200]/70 hover:bg-[#0a3200] text-[#e6d0a2] p-1 md:p-2 rounded-full transition-colors duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-[#0a3200]/70 hover:bg-[#0a3200] text-[#e6d0a2] p-1 md:p-2 rounded-full transition-colors duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 md:space-x-2">
            {matches.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentSlide(index)
                }}
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? 'bg-[#e6d0a2]' : 'bg-[#e6d0a2]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}