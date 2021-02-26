import CONFIG from '../../global/CONFIG';

const createIdLanguageListTemplate = () => `
  <li><button class="language-item p-2 text-gradient font-bold w-full text-left" value="id" disabled>Indonesia</button></li>
  <li><button class="language-item p-2 text-gray-400 hover:text-white w-full text-left" value="en">English</button></li>
`;

const createEnLanguageListTemplate = () => `
  <li><button class="language-item p-2 text-gradient font-bold w-full text-left" value="en" disabled>English</button></li>
  <li><button class="language-item p-2 text-gray-400 hover:text-white w-full text-left" value="id">Indonesia</button></li>
`;

const createFrameworkItemTemplate = ({
  name, url, image: { src, alt },
}, lang) => `
  <a href="${url}" target="_blank" rel="noreferrer" class="text-center text-white hover:text-blue-400">
    <img src="${src}" alt="${alt[lang]}" class="h-16 m-auto">

    <p class="mt-6">${name}</p>
  </a>
`;

const createOddPortfolioTemplate = ({
  name, description, image, url, aria_label,
}, lang) => `
  <div class="portfolio-text mt-8 md:mt-0">
    <a href="${url}" target="_blank" rel="noreferrer">
      <h3
        class="text-white hover:text-blue-400 tracking-wider text-left text-3xl md:text-2xl lg:text-3xl xl:text-4xl">
        ${name}</h3>
    </a>

    <p class="text-gray-400 mt-4 lg:mt-8">${description[lang]}</p>
  </div>

  <a href="${url}" target="_blank" rel="noreferrer" class="contents">
    <picture class="portfolio-image md:inline-block">
      <source media="(max-width: ${CONFIG.PORTFOLIO.IMAGES.SMALL}px)" srcset="/images/${image.name}-small.webp">
      <source media="(max-width: ${image.size - 1}px)" srcset="/images/${image.name}-medium.webp">
      <source srcset="/images/${image.name}.webp">
      <img src="/images/${image.name}.png" srcset="
            /images/${image.name}-small.png ${CONFIG.PORTFOLIO.IMAGES.SMALL}w,
            /images/${image.name}-medium.png ${CONFIG.PORTFOLIO.IMAGES.MEDIUM}w,
            /images/${image.name}.png ${image.size}w
        " sizes="(max-width: ${CONFIG.PORTFOLIO.IMAGES.SMALL}px) ${CONFIG.PORTFOLIO.IMAGES.SMALL}px,(max-width: ${image.size - 1}px) ${CONFIG.PORTFOLIO.IMAGES.MEDIUM}px, ${image.size}px" alt="${name}" />

      <div class="hover-image">
        <i class="fas fa-search m-auto text-gradient text-7xl" aria-label="${aria_label[lang]}"></i>
      </div>
    </picture>
  </a>
`;

const createEvenPortfolioTemplate = ({
  name, description, image, url, aria_label,
}, lang) => `
  <a href="${url}" target="_blank" rel="noreferrer" class="contents">
    <picture class="portfolio-image md:inline-block">
      <source media="(max-width: ${CONFIG.PORTFOLIO.IMAGES.SMALL}px)" srcset="/images/${image.name}-small.webp">
      <source media="(max-width: ${image.size - 1}px)" srcset="/images/${image.name}-medium.webp">
      <source srcset="/images/${image.name}.webp">
      <img src="/images/${image.name}.png" srcset="
              /images/${image.name}-small.png ${CONFIG.PORTFOLIO.IMAGES.SMALL}w,
              /images/${image.name}-medium.png ${CONFIG.PORTFOLIO.IMAGES.MEDIUM}w,
              /images/${image.name}.png ${image.size}w
          " sizes="(max-width: ${CONFIG.PORTFOLIO.IMAGES.SMALL}px) ${CONFIG.PORTFOLIO.IMAGES.SMALL}px,(max-width: ${image.size - 1}px) ${CONFIG.PORTFOLIO.IMAGES.MEDIUM}px, ${image.size}px" alt="${name}" />

      <div class="hover-image">
        <i class="fas fa-search m-auto text-gradient text-7xl" aria-label="${aria_label[lang]}"></i>
      </div>
    </picture>
  </a>

  <div class="portfolio-text mt-8 md:mt-0">
    <a href="${url}" target="_blank" rel="noreferrer">
      <h3
        class="text-white hover:text-blue-400 tracking-wider text-left text-3xl md:text-2xl lg:text-3xl xl:text-4xl">
        ${name}</h3>
    </a>

    <p class="text-gray-400 mt-4 lg:mt-8">${description[lang]}</p>
  </div>
`;

export {
  createIdLanguageListTemplate,
  createEnLanguageListTemplate,
  createFrameworkItemTemplate,
  createOddPortfolioTemplate,
  createEvenPortfolioTemplate,
};
