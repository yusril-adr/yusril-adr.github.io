import React, { PropsWithChildren } from "react";

const GradientLucide: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <svg width="0" height="0" className="absolute">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgb(96, 165, 250)" />
          <stop offset="50%" stopColor="rgb(99, 102, 241)" />
          <stop offset="100%" stopColor="rgb(4, 120, 87)" />
        </linearGradient>
      </defs>
    </svg>
    {children}
  </>
);

export default GradientLucide;
