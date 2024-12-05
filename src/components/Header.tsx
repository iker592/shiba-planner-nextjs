import React from 'react';
import { Heart } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-8 h-8 animate-pulse" />
          <h1 className="text-4xl font-bold">Our Peñíscola Adventure</h1>
        </div>
        <p className="text-lg opacity-90">A special day trip planned just for you</p>
        <p className="mt-2 text-sm">December 7th, 2024</p>
      </div>
    </header>
  );
};