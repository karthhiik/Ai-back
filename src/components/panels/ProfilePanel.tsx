import React from 'react';
import { Sparkles, TrendingUp, Users } from 'lucide-react';

export function ProfilePanel() {
  const profileStats = {
    views: 245,
    matches: 12,
    engagement: 89,
  };

  const highlights = [
    {
      title: 'AI Development Expert',
      description:
        'Your expertise in AI development is trending in your network',
      icon: Sparkles,
    },
    {
      title: 'Active Networker',
      description: 'Youre in the top 5% of active networkers this week',
      icon: TrendingUp,
    },
    {
      title: 'Community Leader',
      description: 'Your discussions are driving meaningful conversations',
      icon: Users,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
          />
          <div>
            <h3 className="text-xl font-bold">John Developer</h3>
            <p className="text-gray-400">Senior AI Engineer</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-700/50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-400">
              {profileStats.views}
            </div>
            <div className="text-sm text-gray-400">Profile Views</div>
          </div>
          <div className="bg-gray-700/50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-400">
              {profileStats.matches}
            </div>
            <div className="text-sm text-gray-400">New Matches</div>
          </div>
          <div className="bg-gray-700/50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-400">
              {profileStats.engagement}%
            </div>
            <div className="text-sm text-gray-400">Engagement</div>
          </div>
        </div>

        <div className="space-y-4">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <div
                key={highlight.title}
                className="bg-gray-700/50 p-4 rounded-lg flex items-start space-x-4"
              >
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold">{highlight.title}</h4>
                  <p className="text-sm text-gray-400">
                    {highlight.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
