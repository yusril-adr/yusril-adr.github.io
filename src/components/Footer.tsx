'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-32 gap-y-16 m-auto text-gray-500 text-xs">
        <p className="hidden md:inline-block lg:col-span-2">Keep the style minimalist.</p>
        <p>© Yusril A. P. 2025 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;