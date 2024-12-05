import { Location } from '../types';

export const locations: Record<string, Location> = {
  cafeHoras: {
    name: 'Café de las Horas',
    address: 'Calle del Conde de Almodóvar, 1, 46003 València',
    googleMapsUrl: 'https://maps.google.com/?q=Café+de+las+Horas+Valencia',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Start your journey with breakfast at this iconic Valencian café known for its baroque interior and excellent coffee.',
    time: '9:00 AM'
  },
  peniscolaCastle: {
    name: 'Peñíscola Castle',
    address: 'Castell, 12598 Peñíscola, Castellón',
    googleMapsUrl: 'https://maps.google.com/?q=Peniscola+Castle',
    imageUrl: 'https://images.unsplash.com/photo-1633113093730-47449a1a9c6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: "Explore this stunning 13th-century castle, also known as the Papa Luna\"s Castle, offering breathtaking views of the Mediterranean.",
    time: '11:30 AM'
  },
  restauranteSimo: {
    name: 'Restaurante Simó',
    address: 'Calle Mayor 3, 12598 Peñíscola, Castellón',
    googleMapsUrl: 'https://maps.google.com/?q=Restaurante+Simo+Peniscola',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Enjoy traditional Mediterranean cuisine with fresh seafood and spectacular views of the castle.',
    time: '2:00 PM'
  },
  oldTown: {
    name: 'Old Town Peñíscola',
    address: 'Ciudad Antigua, 12598 Peñíscola, Castellón',
    googleMapsUrl: 'https://maps.google.com/?q=Old+Town+Peniscola',
    imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Wander through the charming narrow streets of the historic old town, discovering local shops and beautiful viewpoints.',
    time: '4:00 PM'
  },
  home: {
    name: 'Home Sweet Home',
    address: 'Peris i Valero 46, Valencia',
    googleMapsUrl: 'https://maps.google.com/?q=Peris+i+Valero+46+Valencia',
    imageUrl: 'https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'End the perfect day with a cozy instant noodle dinner at home.',
    time: '8:00 PM'
  }
};