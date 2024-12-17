import React, { useState } from 'react';
import { Brain, Coffee, Calendar, UserCircle, Map } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { FeaturePanel } from './FeaturePanel';
import { MatchmakingPanel } from './panels/MatchmakingPanel';
import { CoffeeChatsPanel } from './panels/CoffeeChatsPanel';
import { EventsPanel } from './panels/EventsPanel';
import { ProfilePanel } from './panels/ProfilePanel';
import { HeatmapPanel } from './panels/HeatmapPanel';

type FeatureType = 'matchmaking' | 'coffee' | 'events' | 'profile' | 'heatmap' | null;

export function NetworkingHub() {
  const [activeFeature, setActiveFeature] = useState<FeatureType>(null);

  const features = [
    {
      id: 'matchmaking',
      title: 'AI Matchmaking Engine',
      description: 'Connect with perfectly matched professionals using our advanced AI algorithm',
      icon: Brain,
      panel: MatchmakingPanel,
    },
    {
      id: 'coffee',
      title: 'Virtual Coffee Chats',
      description: 'Instant 15-minute calls with AI-suggested conversation starters',
      icon: Coffee,
      panel: CoffeeChatsPanel,
    },
    {
      id: 'events',
      title: 'Event & Workshop Matchmaking',
      description: 'Discover and join events tailored to your interests',
      icon: Calendar,
      panel: EventsPanel,
    },
    {
      id: 'profile',
      title: 'Smart Profile Highlighting',
      description: 'Your profile, intelligently showcased to the right audience',
      icon: UserCircle,
      panel: ProfilePanel,
    },
    {
      id: 'heatmap',
      title: 'AI-Based Networking Heatmap',
      description: 'Visualize real-time networking hotspots and opportunities',
      icon: Map,
      panel: HeatmapPanel,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          AI-Driven Networking Hub
        </h1>
        <p className="text-gray-400 mb-8">Connect smarter with AI-powered networking tools</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              onClick={() => setActiveFeature(feature.id as FeatureType)}
            />
          ))}
        </div>

        {features.map((feature) => {
          const Panel = feature.panel;
          return (
            <FeaturePanel
              key={feature.id}
              isOpen={activeFeature === feature.id}
              onClose={() => setActiveFeature(null)}
              title={feature.title}
            >
              <Panel />
            </FeaturePanel>
          );
        })}
      </div>
    </div>
  );
}