import CONFIG from '../global/CONFIG';
import portfolios from '../data/portfolio';
import {
  createOddPortfolioTemplate,
  createEvenPortfolioTemplate,
} from './templates/template-creator';

const Portfolio = {
  async init() {
    const listElem = document.querySelector('#portfolio-list');
    const filteredPortofolios = portfolios.slice(0, CONFIG.PORTFOLIO.ITEMS);

    listElem.innerHTML = '';
    filteredPortofolios.forEach(async (portfolio, index) => {
      const portfolioElem = document.createElement('li');
      await this._setClass(portfolioElem, index);
      portfolioElem.innerHTML = await this._getContent(portfolio, index);

      listElem.appendChild(portfolioElem);
    });
  },

  async _setClass(portfolioElem, index) {
    portfolioElem.setAttribute('class', 'portfolio-item w-full flex md:flex-row justify-between items-center mb-16');

    if (index % 2 === 0) {
      return portfolioElem.classList.add('flex-col');
    }

    return portfolioElem.classList.add('flex-col-reverse');
  },

  async _getContent(portfolio, index) {
    if (index % 2 === 0) {
      return createEvenPortfolioTemplate(portfolio);
    }

    return createOddPortfolioTemplate(portfolio);
  },
};

export default Portfolio;
