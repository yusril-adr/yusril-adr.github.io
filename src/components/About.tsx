'use client';

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import aboutConfig from '../data/about';

const About: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="container flex justify-center mb-10" id="about">
      
      <div className="py-32 md:py-0 2xl:py-32 flex items-center justify-around md:min-h-screen 2xl:min-h-0 2xl:mt-8">
        <span 
          className="about-illust text-center tracking-tight text-8xl hidden md:inline-block" 
          aria-label={aboutConfig.decoration.aria_label[language]}
        >
          <span className="text-indigo-500">y:</span>\&gt;<span className="animate-pulse">_</span>
        </span>

        <div className="paragraf-container">
          <h2 className="title text-white tracking-wider text-center md:text-left text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
            {aboutConfig.title[language]}
          </h2>
          <p 
            className="description text-gray-400 mt-4 lg:mt-8"
            dangerouslySetInnerHTML={{ __html: aboutConfig.description[language] }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;