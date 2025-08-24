'use client';

import React from 'react';
import { MonitorSmartphone, PersonStanding, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import excellenceConfig from '../data/excellence';

const Excellence: React.FC = () => {
  const { language } = useLanguage();

  const excellenceItems = [
    {
      icon:<MonitorSmartphone size={96} color="#615fff" />,
      titleKey: 'responsive',
      title: {
        en: 'Responsive',
        id: 'Responsif'
      },
      description: {
        en: 'The design is compatible with any devices.',
        id: 'Desain kompatibel dengan semua perangkat.'
      },
      ariaLabel: {
        en: 'Responsive illustration',
        id: 'Ilustrasi responsif'
      }
    },
    {
      icon:<PersonStanding size={96} color="#615fff" />,
      titleKey: 'accessibility',
      title: {
        en: 'Accessibility',
        id: 'Aksesibilitas'
      },
      description: {
        en: 'The website can be accessed properly by screenreaders (devices for disabilities).',
        id: 'Website dapat diakses dengan baik oleh pembaca layar (perangkat untuk penyandang disabilitas).'
      },
      ariaLabel: {
        en: 'Accessibility illustration',
        id: 'Ilustrasi aksesibilitas'
      }
    },
    {
      icon:<Globe size={96} color="#615fff" />,
      titleKey: 'pwa',
      title: {
        en: 'Progressive Web Apps',
        id: 'Progressive Web Apps'
      },
      description: {
        en: 'The website can be accessed either online or offline.',
        id: 'Website dapat diakses secara online maupun offline.'
      },
      ariaLabel: {
        en: 'Progressive Web Apps illustration',
        id: 'Ilustrasi Progressive Web Apps'
      }
    }
  ];

  return (
    <section className="container flex justify-center mb-20" id="excellence">
      <div className="w-full pt-16 flex flex-col items-center justify-evenly min-h-screen xl:min-h-0 xl:mt-8">
        <div className="text-center mt-8">
          <h2 className="title text-white tracking-wider text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
            {excellenceConfig.title[language]}
          </h2>
          <p className="subtitle text-gray-400 mt-4">
            {excellenceConfig.subtitle[language]}
          </p>
        </div>

        <ul className="w-full text-gray-400 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 md:gap-y-16 mt-16">
          <li className="flex flex-col items-center my-8">
            <span className="responsive-illust fas fa-desktop font-bold text-gradient text-8xl" aria-label={excellenceItems[0].ariaLabel[language]}>
              {excellenceItems[0].icon}
            </span>
            <h3 className="responsive-title text-white font-bold mt-4">
              {excellenceItems[0].title[language]}
            </h3>
            <p className="responsive-description mt-4 text-sm">
              {excellenceItems[0].description[language]}
            </p>
          </li>

          <li className="flex flex-col items-center my-8">
            <span className="accessibility-illust fas fa-universal-access text-gradient font-bold text-8xl" aria-label={excellenceItems[1].ariaLabel[language]}>
              {excellenceItems[1].icon}
            </span>
            <h3 className="accessibility-title text-white font-bold mt-4">
              {excellenceItems[1].title[language]}
            </h3>
            <p className="accessibility-description mt-4 text-sm">
              {excellenceItems[1].description[language]}
            </p>
          </li>

          <li className="md:col-span-2 lg:col-span-1 flex flex-col items-center my-8">
            <span className="pwa-illust fas fa-globe text-gradient font-bold text-8xl" aria-label={excellenceItems[2].ariaLabel[language]}>
              {excellenceItems[2].icon}
            </span>
            <h3 className="pwa-title text-white font-bold mt-4">
              {excellenceItems[2].title[language]}
            </h3>
            <p className="pwa-description mt-4 text-sm">
              {excellenceItems[2].description[language]}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Excellence;