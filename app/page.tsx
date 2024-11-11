"use client";
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PlayerSpotlight from './components/PlayerSpotlight';
import MatchCarousel from './components/MatchCarousel';
import RecentMatchHighlight from './components/RecentMatchHighlight';
import { Play, Calendar, Trophy, ArrowRight } from 'lucide-react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const upcomingMatches = [
    {
      player1: "Ronnie O'Sullivan",
      player2: "Judd Trump",
      date: "Mar 15, 2024",
      time: "14:00 GMT"
    },
    {
      player1: "Mark Selby",
      player2: "Neil Robertson",
      date: "Mar 16, 2024",
      time: "19:00 GMT"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1615213253844-9a9f0fb290fe?auto=format&fit=crop&q=80"
            alt="Snooker Table"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-green-500/10 text-green-500 px-4 py-2 rounded-full animate-fade-in">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Live Tournament</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-up">
                World Snooker
                <span className="block text-green-500">Championship 2024</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-xl animate-fade-in-delay">
                Experience the intensity and precision of professional snooker as the world's elite players compete for the most prestigious title in the sport.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
                <button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="group relative overflow-hidden bg-green-600 text-white px-8 py-4 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-all duration-300"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Live</span>
                  <div className={`absolute inset-0 bg-green-500/20 transition-transform duration-300 ease-out ${isHovered ? 'translate-x-0' : '-translate-x-full'}`}></div>
                </button>

                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg flex items-center space-x-2 hover:bg-white/20 transition-all duration-300">
                  <Calendar className="w-5 h-5" />
                  <span>Tournament Schedule</span>
                </button>
              </div>
            </div>

            <div className="space-y-6 backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 animate-fade-in-delay-3">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-green-500" />
                  Upcoming Matches
                </h2>
                <button className="text-green-500 flex items-center gap-1 hover:gap-2 transition-all duration-300">
                  View All <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                {upcomingMatches.map((match, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors duration-300">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-green-500">{match.date}</span>
                      <span className="text-sm text-gray-400">{match.time}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{match.player1}</span>
                      <span className="text-gray-400">vs</span>
                      <span className="font-medium">{match.player2}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Match Carousel Section */}
      <MatchCarousel />

      {/* Recent Match Highlight Section */}
      <RecentMatchHighlight />

      {/* Player Spotlight Section */}
      <PlayerSpotlight />
    </div>
  );
}
