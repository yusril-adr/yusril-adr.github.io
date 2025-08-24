import { PortfolioConfig } from '../types';

const portfolioConfig: PortfolioConfig = {
  title: {
    en: 'Portfolio',
    id: 'Portofolio',
  },
  subtitle: {
    en: 'Here are some of the amazing applications I made.',
    id: 'Beberapa karya menakjubkan yang saya buat.',
  },
  portfolios: [
    {
      name: 'Wager - Wallet Manager',
      description: {
        en:
          'Your Personal Finance Assistant: Wallet Manager (Wager)! Stay on top of your spending, organize your transactions, and watch your savings grow. With intuitive features and real-time insights, managing your money has never been easier!',
        id:
          'Asisten Keuangan Pribadi Anda: Wallet Manager! Tetapkan pengeluaran Anda, atur transaksi, dan saksikan tabungan Anda bertumbuh. Dengan fitur intuitif dan wawasan real-time, mengelola uang Anda jadi lebih mudah!',
      },
      image: {
        name: 'wager',
        size: 1200,
      },
      url: 'https://my-wager.web.app',
      aria_label: {
        en: 'Visit the website',
        id: 'Kunjungi website',
      },
    },
    {
      name: 'Ani-Time',
      description: {
        en:
          'Dive into the World of Anime with ANi-TIME! Keep track of your favorite anime and discover new series, all in one place! From classics to the latest releases, ANi-TIME has everything you need to fuel your anime obsession!',
        id:
          'Jelajahi Dunia Anime dengan ANi-TIME! Pantau anime favoritmu dan temukan serial baru, semuanya dalam satu tempat! Dari klasik hingga yang terbaru, ANi-TIME memiliki segalanya untuk memuaskan kegemaran anime-mu!',
      },
      image: {
        name: 'ani-time',
        size: 2160,
      },
      url: 'https://ani-time.web.app',
      aria_label: {
        en: 'Visit the website',
        id: 'Kunjungi website',
      },
    },
    {
      name: 'D-Forum App',
      description: {
        en:
          'Introducing the Next Level of Community Engagement: D-Forum App! Join the conversation, share your thoughts, and connect with like-minded individuals effortlessly. Whether you\'re passionate about tech, art, or anything in between, D-Forum has a space for you!',
        id:
          'Perkenalkan Era Baru Keterlibatan Komunitas: D-Forum App! Bergabunglah dalam percakapan, bagikan pemikiranmu, dan terhubung dengan individu seangkatan dengan mudah. Apapun minatmu, apakah itu teknologi, seni, atau hal lainnya, D-Forum memiliki ruang untukmu!',
      },
      image: {
        name: 'd-forum-app',
        size: 1080,
      },
      url: 'https://d-forum-app.vercel.app',
      aria_label: {
        en: 'Visit the website',
        id: 'Kunjungi website',
      },
    },
  ],
};

export default portfolioConfig;