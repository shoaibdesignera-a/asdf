
export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  type: 'Villa' | 'Apartment' | 'Penthouse' | 'Office';
  beds: number;
  baths: number;
  sqft: number;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  category: 'Furniture' | 'Paint';
  image: string;
  description: string;
}

export enum Page {
  Home = 'home',
  Properties = 'properties',
  Furniture = 'furniture',
  Paints = 'paints',
  Contact = 'contact'
}
