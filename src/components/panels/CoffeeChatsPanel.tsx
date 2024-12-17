import React from 'react';
import { Coffee, Calendar, MessageSquare } from 'lucide-react';

export function CoffeeChatsPanel() {
  const availableChats = [
    {
      name: 'Alex Thompson',
      role: 'Product Manager at TechCorp',
      topics: ['AI Product Strategy', 'Market Validation', 'User Research'],
      time: '2:00 PM Today',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150',
    },
    {
      name: 'Emily Chang',
      role: 'Senior Developer at StartupX',
      topics: ['System Architecture', 'Team Leadership', 'Tech Scaling'],
      time: '3:30 PM Today',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Available Coffee Chats</h3>
        <div className="space-y-4">
          {availableChats.map((chat) => (
            <div key={chat.name} className="bg-gray-700/50 rounded-lg p-4">
              <div className="flex items-center space-x-4 mb-3">
                <img
                  src={chat.image}
                  alt={chat.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{chat.name}</h4>
                  <p className="text-sm text-gray-400">{chat.role}</p>
                </div>
              </div>
              <div className="mb-3">
                <h5 className="text-sm font-medium text-gray-400 mb-2">AI Suggested Topics:</h5>
                <div className="flex flex-wrap gap-2">
                  {chat.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{chat.time}</span>
                </div>
                <button className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
                  <Coffee className="w-4 h-4 mr-2" />
                  Schedule Chat
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}