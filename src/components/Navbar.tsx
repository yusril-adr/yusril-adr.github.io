'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import headerConfig from '../data/navbar';

const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  
  const toggleLanguage = () => setIsLanguageOpen(!isLanguageOpen);

  const handleLanguageChange = (lang: 'en' | 'id') => {
    setLanguage(lang);
    setIsLanguageOpen(false);
  };

  const scrollToSection = (href: string, event: React.MouseEvent) => {
    event.preventDefault();
    
    if (href === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        window.scrollTo({
          top: (targetElement as HTMLElement).offsetTop,
          behavior: 'smooth'
        });
      }
    }
    
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      
      if (scrollTop > 50) {
        setIsScrolled(true);
        if (navRef.current) {
          navRef.current.parentElement?.classList.add('onscroll');
        }
      } else {
        setIsScrolled(false);
        if (navRef.current) {
          navRef.current.parentElement?.classList.remove('onscroll');
        }
      }
    };

    document.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      ref={navRef}
      className={`text-lg md:text-xl lg:text-2xl tracking-wider py-4 transition-colors duration-300 ease-in ${
        isScrolled ? 'bg-black' : 'bg-black/0'
      }`}
    >
      <div className="container flex justify-between items-center">
        <p 
          className="title text-xl md:text-3xl"
          dangerouslySetInnerHTML={{ __html: headerConfig.title[language] }}
        />

        <div className="flex lg:hidden">
          <div className="language-container relative text-base flex flex-col justify-center items-center mr-4">
            <button 
              className="language flex items-center hover:text-blue-400" 
              aria-label={headerConfig.nav.language.aria_label[language]}
              onClick={toggleLanguage}
            >
              <Globe size={16} />
              <ChevronDown size={12} className="ml-2" />
            </button>

            <ul className={`language-list absolute -bottom-24 text-left bg-black transform origin-top transition-all duration-300 tracking-normal ${
              isLanguageOpen ? 'grid grid-rows-2 gap-2 scale-100 opacity-100' : 'hidden scale-0 opacity-0'
            }`}>
              <li>
                <button 
                  className={`language-item p-2 w-full text-left hover:bg-gray-800 transition-colors ${
                    language === 'en' ? 'text-gradient' : 'text-gray-400 hover:text-white'
                  }`} 
                  value="en"
                  onClick={() => handleLanguageChange('en')}
                  disabled={language === 'en'}
                >
                  English
                </button>
              </li>
              <li>
                <button 
                  className={`language-item p-2 w-full text-left ${
                    language === 'id' ? 'text-gradient' : 'text-gray-400 hover:text-white'
                  }`} 
                  value="id"
                  onClick={() => handleLanguageChange('id')}
                  disabled={language === 'id'}
                >
                  Indonesia
                </button>
              </li>
            </ul>
          </div>

          <button 
            className="text-xl hover:text-blue-400" 
            id="menu-trigger" 
            aria-label={headerConfig.menu.open.aria_label[language]}
            onClick={toggleMenu}
          >
            <Menu size={20} />
          </button>
        </div>

        <div className={`nav-list-container flex flex-col lg:inline-block lg:w-2/4 ${
          isMenuOpen ? 
            'fixed inset-y-0 left-0 right-0 opacity-100 visible active' : 
            'fixed inset-y-0 left-0 right-0 opacity-0 invisible lg:opacity-100 lg:visible lg:static lg:inset-auto'
        } transition-opacity duration-300 ease-in lg:transition-none`}>
          <ul className={`nav-list text-lg lg:text-xl text-center flex flex-col lg:flex-row justify-evenly lg:justify-between w-3/4 md:w-2/4 lg:w-full relative z-10 m-auto lg:m-0 rounded-lg transform ${
            isMenuOpen ? 
              'bg-black/90 scale-100' : 
              'bg-black/0 scale-0 lg:bg-transparent lg:scale-100'
          } transition-all duration-300 ease-in lg:transition-none`}>
            <li className="text-2xl text-gradient font-bold p-4 lg:p-0 lg:hidden">
              <p>Menu</p>
            </li>

            <li className="p-4 lg:p-0">
              <a className="home hover:text-blue-400" href="#home" onClick={(e) => scrollToSection('#home', e)}>Home</a>
            </li>

            <li className="p-4 lg:p-0">
              <a className="about hover:text-blue-400" href="#about" onClick={(e) => scrollToSection('#about', e)}>{headerConfig.nav.about[language]}</a>
            </li>

            <li className="p-4 lg:p-0">
              <a className="portfolio hover:text-blue-400" href="#portfolio" onClick={(e) => scrollToSection('#portfolio', e)}>{headerConfig.nav.portfolio[language]}</a>
            </li>

            <li className="p-4 lg:p-0">
              <a className="contact hover:text-blue-400" href="#contact" onClick={(e) => scrollToSection('#contact', e)}>{headerConfig.nav.contact[language]}</a>
            </li>

            <li className="hidden lg:flex flex-col justify-center items-center">
              <div className="language-container relative text-base flex flex-col justify-center items-center">
                <button 
                  className="language flex items-center hover:text-blue-400" 
                  aria-label={headerConfig.nav.language.aria_label[language]}
                  onClick={toggleLanguage}
                >
                  <Globe size={16} />
                  <ChevronDown size={12} className="ml-2" />
                </button>
    
                <ul className={`language-list absolute -bottom-24 text-left bg-black transform origin-top transition-all duration-300 tracking-normal ${
                  isLanguageOpen ? 'grid grid-rows-2 gap-2 scale-100 opacity-100' : 'hidden scale-0 opacity-0'
                }`}>
                  <li>
                    <button 
                      className={`language-item p-2 w-full text-left hover:bg-gray-800 transition-colors ${
                        language === 'en' ? 'text-gradient' : 'text-gray-400 hover:text-white'
                      }`} 
                      value="en"
                      onClick={() => handleLanguageChange('en')}
                      disabled={language === 'en'}
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button 
                      className={`language-item p-2 w-full text-left hover:bg-gray-800 transition-colors ${
                        language === 'id' ? 'text-gradient' : 'text-gray-400 hover:text-white'
                      }`} 
                      value="id"
                      onClick={() => handleLanguageChange('id')}
                      disabled={language === 'id'}
                    >
                      Indonesia
                    </button>
                  </li>
                </ul>
              </div>
            </li>

            <li className="text-4xl p-4 lg:hidden">
              <button 
                className="hover:text-blue-400" 
                id="close-menu" 
                aria-label={headerConfig.menu.close.aria_label[language]}
                onClick={closeMenu}
              >
                <X size={32} />
              </button>
            </li>
          </ul>

          {isMenuOpen && (
            <div 
              className="nav-overlay lg:hidden bg-transparent absolute inset-0"
              onClick={closeMenu}
            ></div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;