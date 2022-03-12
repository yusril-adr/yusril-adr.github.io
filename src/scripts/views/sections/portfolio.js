import CONFIG from '../../global/CONFIG';
import portofolioConfig from '../../data/portfolio';
import {
  createOddPortfolioTemplate,
  createEvenPortfolioTemplate,
} from '../templates/template-creator';
import LanguageHelper from '../../utils/language-helper';

const Portfolio = {
  async init() {
    await this._renderTitle();
    await this._renderSubtitle();
    await this._renderPortfolios();
  },

  async _renderTitle() {
    const lang = await LanguageHelper.getLanguage();
    const title = document.querySelector('#portfolio .title');
    title.innerHTML = portofolioConfig.title[lang];
  },

  async _renderSubtitle() {
    const lang = await LanguageHelper.getLanguage();
    const subtitle = document.querySelector('#portfolio .subtitle');
    subtitle.innerHTML = portofolioConfig.subtitle[lang];
  },

  async _renderPortfolios() {
    const listElem = document.querySelector('#portfolio-list');
    const filteredPortfolios = portofolioConfig.portfolios.slice(0, CONFIG.PORTFOLIO.ITEMS);

    listElem.innerHTML = '';
    filteredPortfolios.forEach(async (portfolio, index) => {
      const portfolioElem = document.createElement('li');
      await this._setClass(portfolioElem, index);
      portfolioElem.innerHTML = await this._getPortfolios(portfolio, index);

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

  async _getPortfolios(portfolio, index) {
    const lang = await LanguageHelper.getLanguage();
    if (index % 2 === 0) {
      return createEvenPortfolioTemplate(portfolio, lang);
    }

    return createOddPortfolioTemplate(portfolio, lang);
  },
};

export default Portfolio;
