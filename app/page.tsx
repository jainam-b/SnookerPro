'use client'

import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import PlayerSpotlight from './components/PlayerSpotlight'
import MatchCarousel from './components/MatchCarousel'
import RecentMatchHighlight from './components/RecentMatchHighlight'
import { Play, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import UpcomingEvents from './components/UpcommingEvents'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      {/* Hero Section */}
      <div className="relative min-h-screen flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1615213253844-9a9f0fb290fe?auto=format&fit=crop&q=80"
            alt="Snooker Table"
            className="w-full h-full object-cover opacity-40"
            style={{
              transform: `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.5}px)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 space-y-8 text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            World Snooker
            <span className="block text-red-500 mt-2">Championship 2024</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Experience the intensity and precision of professional snooker as the world&apos;s elite players compete for the most prestigious title in the sport.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative overflow-hidden bg-red-600 text-white px-8 py-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-red-700 transition-all duration-300"
            >
              <Play className="w-6 h-6" />
              <span className="text-lg font-semibold">Watch Live</span>
              <div className={`absolute inset-0 bg-red-500/20 transition-transform duration-300 ease-out ${isHovered ? 'translate-x-0' : '-translate-x-full'}`}></div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-white/20 transition-all duration-300"
            >
              <Calendar className="w-6 h-6" />
              <div className="text-lg font-semibold">Tournament Schedule</div>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Upcoming Events Section */}
      <UpcomingEvents />

      {/* Match Carousel Section */}
      <MatchCarousel />

      {/* Recent Match Highlight Section */}
      <RecentMatchHighlight />

      {/* Player Spotlight Section */}
      <PlayerSpotlight />

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; 2024 World Snooker Championship. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}