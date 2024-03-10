const CONFIG = {
  FRAMEWORK: [
    // 'nodejs',
    'sass',
    // 'bootstrap',
    // 'materialize',
    'tailwindcss',
    // 'webpack',
    'react',
    'chakraUi',
    'express',
    'mongodb',
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
