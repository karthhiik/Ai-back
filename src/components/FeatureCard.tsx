import React from 'react';
import { Icon } from 'lucide-react';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: Icon;
  onClick: () => void;
};

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, onClick }) => {
  return (
    <div
      className="bg-gray-800 rounded-lg shadow-md p-6 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <Icon className="text-blue-400 mr-2" size={40} />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};