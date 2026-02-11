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
      tagline?: string;
      description: string;
      features: string[];
      image?: string;
      image2?: string;
      image3?: string;
      image4?: string;
      logo?: string;
      cpdLogo?: string;
    }[];
  };
  impact: {
    title: string;
    stats: {
      title: string;
      subtitle: string;
      text: string;
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
    gepLink: string;
  };
  chat: {
    trigger: string;
    placeholder: string;
    intro: string;
    error: string;
  };
  surveyContest: {
    buttonText: string;
    modalTitle: string;
    modalIntro: string;
    modalDescription: string;
    prizeTitle: string;
    prizeDescription: string;
    deadline: string;
    ctaButton: string;
  };
  socialCommitment: {
    quote: string;
    badge: string;
    title: string;
    description: string;
    principles: {
      title: string;
      description: string;
    }[];
    ctaButton: string;
  };
}

export type Language = 'en' | 'es';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}