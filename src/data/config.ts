import { AppConfig } from '../types';

const CONFIG: AppConfig = {
  // true: register /sw.js as now. false: unregister every service worker and clear its caches
  IS_USING_SW: false,
  FRAMEWORK: [
    // 'nodejs',
    'sass',
    // 'bootstrap',
    // 'materialize',
    'tailwindCss',
    // 'webpack',
    'react',
    // 'chakraUi',
    'express',
    'nestjs',
    'dotnet',
    // 'mongodb',
    'firebase',
    'supabase',
  ],
  PORTFOLIO: {
    ITEMS: 5,
    IMAGES: {
      SMALL: 360,
      MEDIUM: 640,
    },
  },
  FEED_URL: 'https://yusril-feeds.herokuapp.com/api/feeds',
  ERROR_MESSAGE: {
    en: 'Something went wrong.',
    id: 'Telah terjadi kesalahan.',
    NETWORK: {
      en: 'Network connection required.',
      id: 'Koneksi internet diperlukan.',
    },
  },
};

export default CONFIG;