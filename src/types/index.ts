export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  location: {
    city: string;
    country: string;
    address: string;
  };
  host: {
    name: string;
    avatar: string;
    superhost: boolean;
  };
  amenities: string[];
  guests: number;
  bedrooms: number;
  bathrooms: number;
  rating: number;
  reviews: number;
  type: 'apartment' | 'house' | 'villa' | 'cabin';
  featured: boolean;
  isFavorite?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  trips: Trip[];
  listings: Property[];
}

export interface Trip {
  id: string;
  property: Property;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface SearchFilters {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  priceRange: [number, number];
  propertyType: string;
  minRating: number;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  location: string;
  duration: string;
  rating: number;
  reviews: number;
  category: string;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  cuisine: string;
  image: string;
  location: string;
  rating: number;
  reviews: number;
  priceRange: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}