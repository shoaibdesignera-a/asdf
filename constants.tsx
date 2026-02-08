
import { Property, Product } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    price: '$1,250,000',
    location: 'Beverly Hills, CA',
    type: 'Villa',
    beds: 5,
    baths: 4,
    sqft: 4500,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Skyline Penthouse',
    price: '$890,000',
    location: 'Manhattan, NY',
    type: 'Penthouse',
    beds: 3,
    baths: 2,
    sqft: 2200,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Coastal Serenity Estate',
    price: '$2,400,000',
    location: 'Malibu, CA',
    type: 'Villa',
    beds: 6,
    baths: 5,
    sqft: 6000,
    image: 'https://images.unsplash.com/photo-1512918766671-ad6507962077?auto=format&fit=crop&q=80&w=800'
  }
];

export const FURNITURE: Product[] = [
  {
    id: 'f1',
    name: 'Velvet Emerald Sofa',
    price: '$1,499',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
    description: 'Luxurious deep green velvet sofa that complements any high-end living space.'
  },
  {
    id: 'f2',
    name: 'Oak Minimalist Table',
    price: '$799',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1530018607912-eff2df114fbe?auto=format&fit=crop&q=80&w=800',
    description: 'A solid oak dining table crafted for durability and timeless elegance.'
  }
];

export const PAINTS: Product[] = [
  {
    id: 'p1',
    name: 'Royal Emerald Green',
    price: '$85 / gal',
    category: 'Paint',
    image: 'https://images.unsplash.com/photo-1562184552-997c461abbe6?auto=format&fit=crop&q=80&w=800',
    description: 'Our signature deep green, matching the MM&GG prestige.'
  },
  {
    id: 'p2',
    name: 'Champagne Gold Mist',
    price: '$95 / gal',
    category: 'Paint',
    image: 'https://images.unsplash.com/photo-1589939705384-5185138a0470?auto=format&fit=crop&q=80&w=800',
    description: 'A shimmering metallic finish for accent walls and luxurious trims.'
  }
];
