
// Added React import to fix "Cannot find namespace 'React'" error on line 5
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Step {
  id: number;
  title: string;
  description: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  count: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}
