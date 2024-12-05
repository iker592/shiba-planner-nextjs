import { TripStop } from '../types';
import { locations } from './locations';

export const tripData: TripStop[] = [
  {
    type: 'breakfast',
    location: locations.cafeHoras
  },
  {
    type: 'attraction',
    location: locations.peniscolaCastle
  },
  {
    type: 'lunch',
    location: locations.restauranteSimo
  },
  {
    type: 'sightseeing',
    location: locations.oldTown
  },
  {
    type: 'dinner',
    location: locations.home
  }
];