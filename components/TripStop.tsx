import { MapPin, Clock } from 'lucide-react';
import Image from 'next/image';
import { TripStop as TripStopType } from '@/types';

interface Props {
  stop: TripStopType;
}

export const TripStop = ({ stop }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative w-full h-48">
        <Image 
          src={stop.location.imageUrl} 
          alt={stop.location.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{stop.location.name}</h3>
          <span className="flex items-center text-gray-600 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            {stop.location.time}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{stop.location.description}</p>
        <div className="flex items-start gap-2 text-gray-500 text-sm mb-4">
          <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
          <span>{stop.location.address}</span>
        </div>
        <a
          href={stop.location.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition-colors"
        >
          View on Maps
        </a>
      </div>
    </div>
  );
};