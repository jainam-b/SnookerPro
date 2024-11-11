import React from 'react';
import { Timer } from 'lucide-react';

export default function LiveScores() {
  const matches = [
    {
      player1: "Ronnie O'Sullivan",
      player2: "Judd Trump",
      score1: 3,
      score2: 2,
      status: "Live",
      frame: "Frame 6"
    },
    {
      player1: "Mark Selby",
      player2: "John Higgins",
      score1: 4,
      score2: 4,
      status: "Live",
      frame: "Final Frame"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Timer className="w-5 h-5 text-green-600" />
        <h2 className="text-xl font-bold">Live Matches</h2>
      </div>
      <div className="space-y-4">
        {matches.map((match, index) => (
          <div key={index} className="border-b last:border-0 pb-3">
            <div className="flex justify-between items-center">
              <div className="space-y-2 flex-1">
                <div className="flex justify-between">
                  <span>{match.player1}</span>
                  <span className="font-bold">{match.score1}</span>
                </div>
                <div className="flex justify-between">
                  <span>{match.player2}</span>
                  <span className="font-bold">{match.score2}</span>
                </div>
              </div>
            </div>
            <div className="mt-2 flex justify-between text-sm">
              <span className="text-red-500">{match.status}</span>
              <span className="text-gray-600">{match.frame}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}