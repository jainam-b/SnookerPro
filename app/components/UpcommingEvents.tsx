'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from 'embla-carousel-react'
import { motion, AnimatePresence } from 'framer-motion'

const events = [
  {
    player1: { name: "Ronnie O'Sullivan", rank: 1, image: "https://img.gc.wstservices.co.uk/fit-in/400x600/7af59cf0-588b-11ef-8896-f9bd1bf1a8a7.png" },
    player2: { name: "Judd Trump", rank: 2, image: "https://img.gc.wstservices.co.uk/fit-in/400x600/a51dead0-9c1d-11ee-a781-83e0e6ce5afb.png" },
    score: "6 - 4",
    time: "12:30 PM",
    date: "May 15, 2024",
  },
  {
    player1: { name: "Kern Wilson", rank: 3, image: "https://img.gc.wstservices.co.uk/fit-in/400x600/5059a5c0-9c3b-11ee-aead-69bae4cf59d3.png" },
    player2: { name: "Neil Robertson", rank: 4, image: "https://img.gc.wstservices.co.uk/fit-in/400x600/a51dead0-9c1d-11ee-a781-83e0e6ce5afb.png" },
    score: "5 - 5",
    time: "3:00 PM",
    date: "May 15, 2024",
  },
  {
    player1: { name: "John Higgins", rank: 5, image: "https://img.gc.wstservices.co.uk/fit-in/400x600/5059a5c0-9c3b-11ee-aead-69bae4cf59d3.png" },
    player2: { name: "Ding Junhui", rank: 6, image: "https://img.gc.wstservices.co.uk/fit-in/400x600/a51dead0-9c1d-11ee-a781-83e0e6ce5afb.png" },
    score: "7 - 3",
    time: "7:00 PM",
    date: "May 15, 2024",
  },
  {
    player1: { name: "Mark Selby", rank: 5, image: "https://img.gc.wstservices.co.uk/fit-in/400x600/a51dead0-9c1d-11ee-a781-83e0e6ce5afb.png" },
    player2: { name: "Shaun Murphy", rank: 6, image: "https://img.gc.wstservices.co.uk/fit-in/400x600/5059a5c0-9c3b-11ee-aead-69bae4cf59d3.png" },
    score: "7 - 3",
    time: "2:00 PM",
    date: "May 16, 2024",
  },
  {
    player1: { name: "Kyren Wilson", rank: 5, image: "https://img.gc.wstservices.co.uk/fit-in/400x600/7af59cf0-588b-11ef-8896-f9bd1bf1a8a7.png" },
    player2: { name: "Mark Allen", rank: 6, image: "https://img.gc.wstservices.co.uk/fit-in/400x600/5059a5c0-9c3b-11ee-aead-69bae4cf59d3.png" },
    score: "7 - 3",
    time: "7:00 PM",
    date: "May 16, 2024",
  },
]

export default function UpcomingEvents() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: false })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  const onSelect = () => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
    setCurrentIndex(emblaApi.selectedScrollSnap())
  }

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-7xl mx-auto px-4 py-12"
    >
      <h2 className="text-5xl font-bold text-center mb-8">Upcoming Matches</h2>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4"
            >
              <Card className="bg-gray-800 text-white h-full overflow-hidden">
                <CardHeader className="relative pb-0">
                  <Badge variant="secondary" className="absolute top-4 left-4 bg-red-500 text-white">
                    Quarter Final
                  </Badge>
                  <div className="flex justify-between items-center mt-8">
                    <PlayerInfo player={event.player1} />
                    <div className="text-center">
                      <CardTitle className="text-xl sm:text-2xl mb-2 text-red-400">VS</CardTitle>
                      <p className="text-base sm:text-lg font-semibold">{event.time}</p>
                      <p className="text-xs sm:text-sm text-gray-400">{event.date}</p>
                    </div>
                    <PlayerInfo player={event.player2} />
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex justify-center items-center space-x-4 text-xs sm:text-sm text-gray-300">
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4 text-red-500" />
                      <span>Crucible Theatre, Sheffield</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarDays className="mr-1 h-4 w-4 text-red-500" />
                      <span>Apr 20 - May 6</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {canScrollPrev && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 bg-red-500 text-white hover:bg-red-600 w-10 h-10"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {canScrollNext && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 bg-red-500 text-white hover:bg-red-600 w-10 h-10"
              onClick={scrollNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex justify-center mt-4 space-x-2">
        {events.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-red-500' : 'bg-gray-500'}`}
            initial={false}
            animate={{ scale: index === currentIndex ? 1.5 : 1 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </motion.div>
  )
}

interface Player {
  name: string
  rank: number
  image: string
}

function PlayerInfo({ player }: { player: Player }) {
  return (
    <div className="text-center">
      <motion.img
        whileHover={{ scale: 1.1 }}
        alt={player.name}
        className="rounded-full w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-2 border-2 border-red-500"
        height="96"
        src={player.image}
        style={{
          aspectRatio: "1",
          objectFit: "cover",
        }}
        width="96"
      />
      <h3 className="font-semibold text-sm sm:text-base">{player.name}</h3>
      <p className="text-xs sm:text-sm text-gray-400">World Rank: #{player.rank}</p>
    </div>
  )
}