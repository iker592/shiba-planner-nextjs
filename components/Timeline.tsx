'use client';

import { useEffect } from 'react';
import { TripStop } from './TripStop';
import { tripData } from '@/data/tripData';
import { getIntersectionObserver } from '@/lib/utils';

export const Timeline = () => {
  useEffect(() => {
    const handleIntersection = (index: number) => {
      window.dispatchEvent(new CustomEvent('cardVisible', { detail: { index } }));
    };

    const observer = getIntersectionObserver(handleIntersection);

    document.querySelectorAll('.trip-stop').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="grid gap-8 md:gap-12">
        {tripData.map((stop, index) => (
          <div key={index} className="relative trip-stop" data-index={index}>
            {index < tripData.length - 1 && (
              <div className="absolute left-1/2 top-full h-12 w-px bg-gray-200 -translate-x-1/2" />
            )}
            <TripStop stop={stop} />
          </div>
        ))}
      </div>
    </div>
  );
};