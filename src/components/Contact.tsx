'use client';

import React from 'react';
import { Instagram, Github, Linkedin, MessageCircle, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import contactConfig from '../data/contact';

const Contact: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="flex justify-center py-8 text-gray-400 text-sm" id="contact">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-32 gap-y-16">
        <div className="flex flex-col">
          <h3 
            className="web-title text-lg"
            dangerouslySetInnerHTML={{ 
              __html: contactConfig.web.title[language]
            }}
          />            
          <p className="mt-4">Yusril Adriansyah Putra</p>
          <p className="web-location mt-2">{contactConfig.web.location[language]}</p>
          <ul className="flex mt-4 text-lg font-bold">
            <li className="mr-4">
              <a 
                href="https://www.instagram.com/yusril_adr" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="instagram" 
                className="hover:svg-gradient"
              >
                <Instagram size={18} className="hover:text-indigo-500" />
              </a>
            </li>
            <li className="mr-4">
              <a 
                href="https://github.com/yusril-adr" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="github" 
                className="hover:svg-gradient"
              >
                <Github size={18} className="hover:text-indigo-500" />
              </a>
            </li>
            <li className="mr-4">
              <a 
                href="https://www.linkedin.com/in/yusril-adr" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="linkedin" 
                className="hover:svg-gradient"
              >
                <Linkedin size={18} className="hover:text-indigo-500" />
              </a>
            </li>
            <li>
              <a 
                href="https://wa.me/6287854029394" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="whatsapp" 
                className="hover:svg-gradient"
              >
                <MessageCircle size={18} className="hover:text-indigo-500" />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="contact-title text-white text-lg font-bold tracking-wider">
            {contactConfig.contact.title[language]}
          </h3>
          <p className="mt-4 flex items-center">
            <Mail size={18} aria-label="Email" />&ensp;: yusriladr.37@gmail.com
          </p>
          <p className="mt-4 flex items-center">
            <Phone 
              size={18} 
              className="contact-phone" 
              aria-label={contactConfig.contact.phone.aria_label[language]}
            />&ensp;: +6287854029394
          </p>
        </div>

        <div className="flex flex-col">
          <h3 className="service-title text-white text-lg mb-4 font-bold tracking-wider">
            {contactConfig.service.title[language]}
          </h3>
          <p>Front-End Web Developer</p>
          <p className="mt-2">Back-End Web Developer</p>
          <p className="mt-2">Fullstack Web Developer</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;