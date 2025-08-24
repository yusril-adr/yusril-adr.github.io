"use client";

import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import portfolioConfig from "../data/portfolio";
import CONFIG from "../data/config";
import { PortfolioItem as PortfolioItemType } from "../types";
import GradientLucide from "./GradientLucide";

const Portfolio: React.FC = () => {
  const { language } = useLanguage();

  const PortfolioItem: React.FC<{
    portfolio: PortfolioItemType;
    index: number;
  }> = ({ portfolio, index }) => {
    const isOdd = index % 2 === 0;

    const imageElement = (
      <a
        href={portfolio.url}
        target="_blank"
        rel="noreferrer"
        className="contents"
      >
        <picture className="portfolio-image md:inline-block w-full h-auto">
          <Image
            src={`/images/${portfolio.image.name}.png`}
            alt={portfolio.name}
            width={portfolio.image.size}
            height={portfolio.image.size}
            sizes={`(max-width: ${CONFIG.PORTFOLIO.IMAGES.SMALL}px) ${
              CONFIG.PORTFOLIO.IMAGES.SMALL
            }px,(max-width: ${portfolio.image.size - 1}px) ${
              CONFIG.PORTFOLIO.IMAGES.MEDIUM
            }px, ${portfolio.image.size}px`}
          />
          <div className="hover-image">
            <GradientLucide>
              <Search
                size={96}
                className="m-auto text-gradient text-7xl"
                aria-label={portfolio.aria_label[language]}
                stroke="url(#gradient)"
              />
            </GradientLucide>
          </div>
        </picture>
      </a>
    );

    const textElement = (
      <div className="portfolio-text mt-8 md:mt-0">
        <a href={portfolio.url} target="_blank" rel="noreferrer">
          <h3 className="text-white hover:text-blue-400 tracking-wider text-left text-3xl md:text-2xl lg:text-3xl xl:text-4xl">
            {portfolio.name}
          </h3>
        </a>
        <p className="text-gray-400 mt-4 lg:mt-8">
          {portfolio.description[language]}
        </p>
      </div>
    );

    return (
      <li
        className={`portfolio-item w-full flex md:flex-row justify-between items-center mb-16 ${
          isOdd ? "flex-col" : "flex-col-reverse"
        }`}
      >
        {isOdd ? (
          <>
            {imageElement}
            {textElement}
          </>
        ) : (
          <>
            {textElement}
            {imageElement}
          </>
        )}
      </li>
    );
  };

  return (
    <section className="container flex justify-center mb-10" id="portfolio">
      <div className="pt-16 flex flex-col items-center justify-evenly min-h-screen 2xl:min-h-0 2xl:mt-8">
        <div className="text-center mt-8">
          <h2 className="title text-white tracking-wider text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
            {portfolioConfig.title[language]}
          </h2>
          <p className="subtitle text-gray-400 mt-4">
            {portfolioConfig.subtitle[language]}
          </p>
        </div>

        <ul
          className="w-full flex flex-col justify-between items-center mt-16 pt-8"
          id="portfolio-list"
        >
          {portfolioConfig.portfolios
            .slice(0, CONFIG.PORTFOLIO.ITEMS)
            .map((portfolio, index) => (
              <PortfolioItem
                key={portfolio.name}
                portfolio={portfolio}
                index={index}
              />
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
