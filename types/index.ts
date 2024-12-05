export interface Location {
  name: string;
  address: string;
  googleMapsUrl: string;
  imageUrl: string;
  description: string;
  time: string;
}

export interface TripStop {
  type: 'breakfast' | 'attraction' | 'lunch' | 'sightseeing' | 'dinner';
  location: Location;
}