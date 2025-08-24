import { NavbarConfig } from "@/types";

const headerConfig: NavbarConfig = {
  title: {
    en: '<span class="text-gradient">yusril</span>-adr',
    id: '<span class="text-gradient">yusril</span>-adr',
  },
  menu: {
    open: {
      aria_label: {
        en: 'Open menu',
        id: 'Buka menu',
      },
    },
    close: {
      aria_label: {
        en: 'Close menu',
        id: 'Tutup menu',
      },
    },
  },
  nav: {
    about: {
      en: 'About',
      id: 'Tentang',
    },
    portfolio: {
      en: 'Portfolio',
      id: 'Portofolio',
    },
    contact: {
      en: 'Contact',
      id: 'Kontak',
    },
    language: {
      aria_label: {
        en: 'Switch language',
        id: 'Ganti bahasa',
      },
    },
  },
};

export default headerConfig;
