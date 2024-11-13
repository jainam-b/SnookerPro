import React from 'react';
import { Trophy } from 'lucide-react';

export default function Rankings() {
  const rankings = [
    { position: 1, name: "Ronnie O'Sullivan", points: "1,130,500" },
    { position: 2, name: "Judd Trump", points: "1,020,000" },
    { position: 3, name: "Mark Selby", points: "987,500" },
    { position: 4, name: "John Higgins", points: "945,000" },
    { position: 5, name: "Neil Robertson", points: "922,500" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Trophy className="w-5 h-5 text-red-600" />
        <h2 className="text-xl font-bold">World Rankings</h2>
      </div>
      <div className="space-y-2">
        {rankings.map((player) => (
          <div key={player.position} className="flex items-center justify-between py-2 border-b last:border-0">
            <div className="flex items-center space-x-4">
              <span className="w-6 text-center font-semibold">{player.position}</span>
              <span>{player.name}</span>
            </div>
            <span className="text-gray-600">{player.points}</span>
          </div>
        ))}
      </div>
    </div>
  );
}