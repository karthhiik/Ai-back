import React from 'react';
import { Calendar, Users, ArrowRight } from 'lucide-react';

export function EventsPanel() {
  const events = [
    {
      title: 'AI Founders Meetup',
      type: 'Virtual Workshop',
      date: 'March 15, 2024',
      time: '2:00 PM - 4:00 PM EST',
      attendees: 120,
      match: 95,
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=300&h=200',
    },
    {
      title: 'Startup Pitch Night',
      type: 'Hybrid Event',
      date: 'March 20, 2024',
      time: '6:00 PM - 8:00 PM EST',
      attendees: 85,
      match: 92,
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=300&h=200',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Recommended Events</h3>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.title} className="bg-gray-700/50 rounded-lg overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-lg">{event.title}</h4>
                    <p className="text-blue-400 text-sm">{event.type}</p>
                  </div>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {event.match}% Match
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.attendees} Attendees</span>
                  </div>
                </div>
                <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
                  Register Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}