'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import frameworkConfig from '../data/framework';
import CONFIG from '../data/config';

const Framework: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="container flex justify-center mb-28" id="framework">
      <div className="w-full pt-16 pb-4 flex flex-col items-center justify-evenly min-h-screen md:min-h-0 xl:mt-8">
        <div className="text-center mt-8 mb-8">
          <h2 className="title text-white tracking-wider text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
            {frameworkConfig.title[language]}
          </h2>
          <p className="subtitle text-gray-400 mt-4">
            {frameworkConfig.subtitle[language]}
          </p>
        </div>

        <ul className="w-full mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 gap-y-16 md:gap-x-0 xl:gap-y-32">
          {CONFIG.FRAMEWORK.map((frameworkKey) => {
            const framework = frameworkConfig[frameworkKey] as {
              name: string;
              url: string;
              image: { src: string; alt: { en: string; id: string } };
            };
            
            if (!framework) return null;

            return (
              <li key={frameworkKey} className="flex justify-center">
                <a 
                  href={framework.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-center text-white hover:text-blue-400"
                >
                  <Image
                    src={framework.image.src}
                    alt={framework.image.alt[language]}
                    width={64}
                    height={64}
                    className="lazyload h-16 m-auto"
                  />
                  <p className="mt-6">{framework.name}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Framework;