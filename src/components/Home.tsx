"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import homeConfig from "../data/home";

const Home: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section
      className="container flex flex-col md:flex-row items-center justify-around min-h-screen 2xl:min-h-0 2xl:mt-8 mb-10"
      id="home"
    >
      <div className="tracking-wider text-center md:text-left animate-slide-from-bottom">
        <h1 className="text-gradient text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
          Yusril A. P.
        </h1>
        <h2 className="text-xl">Web Developer</h2>
      </div>

      <picture className="my-picture animate-slide-from-bottom">
        {/* <source
          media="(max-width: 360px)"
          data-srcset="/images/me-2-small.webp"
          srcSet="/images/me-2-small.webp"
        />
        <source
          media="(max-width: 640px)"
          data-srcset="/images/me-2-medium.webp"
          srcSet="/images/me-2-medium.webp"
        />
        <source data-srcset="/images/me-2.webp" srcSet="/images/me-2.webp" />
        <img
          data-src="/images/me-2.png"
          data-srcset="
            /images/me-2-small.png 360w,
            /images/me-2-medium.png 640w,
            /images/me-2.png 857w
      "
          data-sizes="(max-width: 360px) 360px,(max-width: 768px) 640px, 857px"
          alt="My photo"
          className="ml-auto ls-is-cached lazyloaded"
          sizes="(max-width: 360px) 360px,(max-width: 768px) 640px, 857px"
          srcSet="
            /images/me-2-small.png 360w,
            /images/me-2-medium.png 640w,
            /images/me-2.png 857w
          "
          src="/images/me-2.png"
        /> */}

        <Image
          src="/images/me-2.png"
          alt={homeConfig.img.alt[language]}
          className="ml-auto"
          width={857}
          height={857}
          priority
          sizes="(max-width: 360px) 360px,(max-width: 768px) 640px, 857px"
        />
      </picture>
    </section>
  );
};

export default Home;
