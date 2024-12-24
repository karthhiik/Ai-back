import React, { useState } from "react";
import { Brain, Coffee, Calendar, UserCircle, Map } from "lucide-react";
import { FeatureCard } from "./FeatureCard";
import { FeaturePanel } from "./FeaturePanel";
import { useAPI } from "../contexts/APIContext";

// Correct relative imports for panel components:
import  {MatchmakingPanel} from "./panels/MatchmakingPanel";
import {CoffeeChatsPanel} from "./panels/CoffeeChatsPanel";
import  {EventsPanel} from "./panels/EventsPanel";
import  {ProfilePanel} from "./panels/ProfilePanel"; // Ensure this path is correct and the file exists
import  {HeatmapPanel} from "./panels/HeatmapPanel";

type FeatureType =
  | "matchmaking"
  | "coffee"
  | "events"
  | "profile"
  | "heatmap"
  | null;

export function NetworkingHub() {
  const [activeFeature, setActiveFeature] = useState<FeatureType>(null);
  const { users, startups, collaborations, events, loading, error } = useAPI();

  const features = [
    {
      id: "matchmaking",
      title: "AI Matchmaking Engine",
      description:
        "Connect with perfectly matched professionals using our advanced AI algorithm",
      icon: Brain,
      panel: MatchmakingPanel,
    },
    {
      id: "coffee",
      title: "Virtual Coffee Chats",
      description:
        "Instant 15-minute calls with AI-suggested conversation starters",
      icon: Coffee,
      panel: CoffeeChatsPanel,
    },
    {
      id: "events",
      title: "Event & Workshop Matchmaking",
      description: "Discover and join events tailored to your interests",
      icon: Calendar,
      panel: EventsPanel,
    },
    {
      id: "profile",
      title: "Smart Profile Highlighting",
      description: "Your profile, intelligently showcased to the right audience",
      icon: UserCircle,
      panel: ProfilePanel,
    },
    {
      id: "heatmap",
      title: "AI-Based Networking Heatmap",
      description: "Visualize real-time networking hotspots and opportunities",
      icon: Map,
      panel: HeatmapPanel,
    },
  ];

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto">
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
            <Panel
              users={users}
              startups={startups}
              collaborations={collaborations}
              events={events}
            />
          </FeaturePanel>
        );
      })}
    </div>
  );
}