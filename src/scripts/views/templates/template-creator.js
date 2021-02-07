import CONFIG from '../../global/CONFIG';

const createOddPortfolioTemplate = ({
  name, description, image, url,
}) => `
  <div class="portfolio-text mt-8 md:mt-0">
    <a href="${url}" target="_blank">
      <h3
        class="text-white hover:text-blue-400 tracking-wider text-left text-3xl md:text-2xl lg:text-3xl xl:text-4xl">
        ${name}</h3>
    </a>

    <p class="text-gray-400 mt-4 lg:mt-8">${description.id}</p>
  </div>

  <a href="${url}" target="_blank" class="contents">
    <picture class="portfolio-image md:inline-block">
      <source media="(max-width: ${CONFIG.PORTFOLIO.IMAGES.SMALL}px)" srcset="/images/${image.name}-small.png">
      <source media="(max-width: ${image.size - 1}px)" srcset="/images/${image.name}-medium.png">
      <source srcset="/images/${image.name}.webp">
      <img src="/images/${image.name}.png" srcset="
            /images/${image.name}-small.png ${CONFIG.PORTFOLIO.IMAGES.SMALL}w,
            /images/${image.name}-medium.png ${CONFIG.PORTFOLIO.IMAGES.MEDIUM}w,
            /images/${image.name}.png ${image.size}w
        " sizes="(max-width: ${CONFIG.PORTFOLIO.IMAGES.SMALL}px) ${CONFIG.PORTFOLIO.IMAGES.SMALL}px,(max-width: ${image.size - 1}px) ${CONFIG.PORTFOLIO.IMAGES.MEDIUM}px, ${image.size}px" alt="${name}" />

      <div class="hover-image">
        <i class="fas fa-search m-auto text-gradient text-7xl" aria-label="Kunjungi Website"></i>
      </div>
    </picture>
  </a>
`;

const createEvenPortfolioTemplate = ({
  name, description, image, url,
}) => `
  <a href="${url}" target="_blank" class="contents">
    <picture class="portfolio-image md:inline-block">
      <source media="(max-width: ${CONFIG.PORTFOLIO.IMAGES.SMALL}px)" srcset="/images/${image.name}-small.png">
      <source media="(max-width: ${image.size - 1}px)" srcset="/images/${image.name}-medium.png">
      <source srcset="/images/${image.name}.webp">
      <img src="/images/${image.name}.png" srcset="
              /images/${image.name}-small.png ${CONFIG.PORTFOLIO.IMAGES.SMALL}w,
              /images/${image.name}-medium.png ${CONFIG.PORTFOLIO.IMAGES.MEDIUM}w,
              /images/${image.name}.png ${image.size}w
          " sizes="(max-width: ${CONFIG.PORTFOLIO.IMAGES.SMALL}px) ${CONFIG.PORTFOLIO.IMAGES.SMALL}px,(max-width: ${image.size - 1}px) ${CONFIG.PORTFOLIO.IMAGES.MEDIUM}px, ${image.size}px" alt="${name}" />

      <div class="hover-image">
        <i class="fas fa-search m-auto text-gradient text-7xl" aria-label="Kunjungi Website"></i>
      </div>
    </picture>
  </a>

  <div class="portfolio-text mt-8 md:mt-0">
    <a href="${url}" target="_blank">
      <h3
        class="text-white hover:text-blue-400 tracking-wider text-left text-3xl md:text-2xl lg:text-3xl xl:text-4xl">
        ${name}</h3>
    </a>

    <p class="text-gray-400 mt-4 lg:mt-8">${description.id}</p>
  </div>
`;

export {
  createOddPortfolioTemplate,
  createEvenPortfolioTemplate,
};