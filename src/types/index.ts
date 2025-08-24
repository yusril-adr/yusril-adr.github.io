export interface LanguageContent {
  en: string;
  id: string;
}

export interface ImageData {
  src: string;
  alt: LanguageContent;
}

export interface FrameworkData {
  name: string;
  url: string;
  image: ImageData;
}

export interface PortfolioImage {
  name: string;
  size: number;
}

export interface PortfolioItem {
  name: string;
  description: LanguageContent;
  image: PortfolioImage;
  url: string;
  aria_label: LanguageContent;
}

export interface NavbarConfig {
  title: LanguageContent;
  menu: {
    open: {
      aria_label: LanguageContent;
    };
    close: {
      aria_label: LanguageContent;
    };
  };
  nav: {
    about: LanguageContent;
    portfolio: LanguageContent;
    contact: LanguageContent;
    language: {
      aria_label: LanguageContent;
    };
  };
}

export interface HomeConfig {
  img: {
    alt: LanguageContent;
  };
}

export interface AboutConfig {
  title: LanguageContent;
  description: LanguageContent;
  decoration: {
    aria_label: LanguageContent;
  };
}

export interface ExcellenceConfig {
  title: LanguageContent;
  subtitle: LanguageContent;
}

export interface FrameworkConfig {
  title: LanguageContent;
  subtitle: LanguageContent;
  [key: string]: FrameworkData | LanguageContent;
}

export interface PortfolioConfig {
  title: LanguageContent;
  subtitle: LanguageContent;
  portfolios: PortfolioItem[];
}

export interface ContactConfig {
  web: {
    title: LanguageContent;
    university: LanguageContent;
    location: LanguageContent;
  };
  contact: {
    title: LanguageContent;
    phone: {
      aria_label: LanguageContent;
    };
  };
  service: {
    title: LanguageContent;
  };
}

export interface AppConfig {
  FRAMEWORK: string[];
  PORTFOLIO: {
    ITEMS: number;
    IMAGES: {
      SMALL: number;
      MEDIUM: number;
    };
  };
  FEED_URL: string;
  ERROR_MESSAGE: {
    en: string;
    id: string;
    NETWORK: LanguageContent;
  };
}

export type Language = 'en' | 'id';