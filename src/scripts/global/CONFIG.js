const CONFIG = {
  BREAKPOINTS: {
    sm: 640,
  },
  FRAMEWORK: [
    'sass',
    // 'bootstrap',
    // 'materialize',
    'tailwindcss',
    'webpack',
    'mongodb',
    'express',
    // 'react',
    'nodejs',
  ],
  PORTFOLIO: {
    ITEMS: 5,
    IMAGES: {
      SMALL: 360,
      MEDIUM: 640,
    },
  },
  FEED_URL: 'http://127.0.0.1:3000/api/feeds',
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
