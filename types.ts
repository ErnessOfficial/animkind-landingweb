export interface LanguageContent {
  nav: {
    home: string;
    ecosystem: string;
    about: string;
    pricing: string;
    contact: string;
    getStarted: string;
  };
  pricingModal: {
    title: string;
    description: string;
    ctaText: string;
    ctaButton: string;
  };
  hero: {
    badge: string;
    headline: string[];
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  valueProp: {
    title: string;
    intro: string;
    items: {
      title: string;
      desc: string;
      icon: string;
    }[];
  };
  aiSection: {
    title: string;
    subtitle: string;
    description: string;
    feature1: string;
    feature2: string;
    feature3: string;
  };
  ecosystem: {
    title: string;
    subtitle: string;
    products: {
      name: string;
      tag: string;
      description: string;
      features: string[];
      image?: string;
      image2?: string;
      logo?: string;
    }[];
  };
  impact: {
    title: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
  demoSection: {
    title: string;
    buttonText: string;
    description: string;
  };
  footer: {
    description: string;
    contact: string;
    rights: string;
    links: string[];
  };
  chat: {
    trigger: string;
    placeholder: string;
    intro: string;
    error: string;
  }
}

export type Language = 'en' | 'es';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}