import React from 'react';
import { UserCircle, Star } from 'lucide-react';

export function MatchmakingPanel() {
  const matches = [
    {
      name: 'Sarah Chen',
      role: 'Seed-stage Investor',
      focus: 'AI Startups',
      match: 98,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Technical Co-founder',
      focus: 'Machine Learning',
      match: 95,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">Today's Top Matches</h3>
        <div className="space-y-4">
          {matches.map((match) => (
            <div key={match.name} className="flex items-center space-x-4 bg-gray-700/50 p-4 rounded-lg">
              <img
                src={match.image}
                alt={match.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold">{match.name}</h4>
                  <span className="text-sm text-blue-400">{match.match}% Match</span>
                </div>
                <p className="text-gray-400">{match.role}</p>
                <p className="text-sm text-gray-500">{match.focus}</p>
              </div>
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">Match Preferences</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Industry Focus</label>
            <select className="w-full bg-gray-700 rounded-lg px-3 py-2 text-white">
              <option>AI & Machine Learning</option>
              <option>Blockchain</option>
              <option>Healthcare</option>
              <option>Fintech</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Connection Type</label>
            <select className="w-full bg-gray-700 rounded-lg px-3 py-2 text-white">
              <option>Investors</option>
              <option>Co-founders</option>
              <option>Mentors</option>
              <option>Industry Experts</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}