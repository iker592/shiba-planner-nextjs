import React, { useState, useEffect } from 'react';
import { Dog, MessageCircle } from 'lucide-react';

export const ShibaCompanion: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    "Woof! Ready for an adventure? 🐕",
    "The castle view is amazing! 🏰",
    "Don't forget to try the seafood! 🦐",
    "Time for walkies in the old town! 🐾",
    "Such a romantic trip! ❤️"
  ];

  useEffect(() => {
    const handleCardVisible = (event: CustomEvent<{ index: number }>) => {
      setCurrentMessage(event.detail.index);
    };

    window.addEventListener('cardVisible', handleCardVisible as EventListener);

    return () => {
      window.removeEventListener('cardVisible', handleCardVisible as EventListener);
    };
  }, []);

  return (
    <div className="fixed z-50 left-4 bottom-4">
      <div className="relative group">
        <div className="bg-amber-400 p-3 rounded-full shadow-lg transition-colors duration-300 hover:scale-110">
          <Dog className="w-6 h-6 text-white" />
        </div>
        
        <div className="absolute left-full ml-2 bottom-0 w-48 transform transition-all duration-200">
          <div className="bg-white p-3 rounded-lg shadow-lg flex items-start gap-2">
            <MessageCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
            <p className="text-sm text-gray-700">{messages[currentMessage]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};