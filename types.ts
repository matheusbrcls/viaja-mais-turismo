import { LucideIcon } from 'lucide-react';

export interface Destination {
  id: number;
  name: string;
  price: string;
  image: string;
  badges?: string[];
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Package {
  id: number;
  destination: string;
  description: string;
  price: string;
  image: string;
  duration: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  stars: number;
  avatar: string;
}