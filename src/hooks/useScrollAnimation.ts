'use client';

import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section) => {
        const sectionId = section.id;
        
        // Skip home and contact sections as they're always visible
        if (sectionId !== 'home' && sectionId !== 'contact') {
          const sectionOffset = section.offsetTop;
          const offset = sectionOffset - (window.innerHeight * 0.75);
          const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
          
          if (scrollTop > offset && section.style.opacity !== '1') {
            section.style.opacity = '1';
            section.style.animation = 'slide-from-bottom 0.7s ease forwards';
          }
        }
      });
    };

    // Add scroll event listener
    document.addEventListener('scroll', handleScroll);
    
    // Initial check in case some sections are already in view
    handleScroll();

    // Cleanup
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
};