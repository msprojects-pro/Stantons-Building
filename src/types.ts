export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  longDescription: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  service: string;
  date: string;
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  postcode: string;
  message: string;
}
