export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  challenge: string;
  timeline: string;
  size: string;
}

export interface ScrollState {
  scrollY: number;
  isScrolled: boolean;
}

export interface Theme {
  mode: 'light' | 'dark';
}