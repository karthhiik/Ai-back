import React from 'react';
import { MapPin, Users, TrendingUp } from 'lucide-react';

export function HeatmapPanel() {
  const hotspots = [
    {
      region: 'San Francisco Bay Area',
      activity: 'High',
      users: 1200,
      trending: ['AI/ML', 'Blockchain', 'Climate Tech'],
      color: 'from-red-500/20 to-orange-500/20',
    },
    {
      region: 'New York City',
      activity: 'Very High',
      users: 1500,
      trending: ['Fintech', 'E-commerce', 'Health Tech'],
      color: 'from-purple-500/20 to-blue-500/20',
    },
    {
      region: 'London',
      activity: 'Medium',
      users: 800,
      trending: ['Deep Tech', 'SaaS', 'Green Energy'],
      color: 'from-green-500/20 to-teal-500/20',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Active Networking Zones</h3>
        <div className="space-y-4">
          {hotspots.map((hotspot) => (
            <div
              key={hotspot.region}
              className={`bg-gradient-to-r ${hotspot.color} p-4 rounded-lg border border-gray-700`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-gray-300" />
                    <h4 className="font-semibold">{hotspot.region}</h4>
                  </div>
                  <div className="flex items-center mt-1 text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{hotspot.users} Active Users</span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm bg-gray-700`}>
                  {hotspot.activity} Activity
                </span>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="text-sm text-gray-400">Trending Industries</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hotspot.trending.map((trend) => (
                    <span
                      key={trend}
                      className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full"
                    >
                      {trend}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}