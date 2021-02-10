import excellenceConfig from '../../data/excellence';
import LanguageHelper from '../../utils/language-helper';

const Excellence = {
  async init() {
    await this._renderTitle();
    await this._rendersubtitle();
    await this._renderList();
  },

  async _renderTitle() {
    const lang = await LanguageHelper.getLanguage();
    document.querySelector('#excellence .title').innerHTML = excellenceConfig.title[lang];
  },

  async _rendersubtitle() {
    const lang = await LanguageHelper.getLanguage();
    document.querySelector('#excellence .subtitle').innerHTML = excellenceConfig.subtitle[lang];
  },

  async _renderList() {
    await this._renderResponsive();
    await this._renderAccessibility();
    await this._renderPWA();
  },

  async _renderResponsive() {
    const lang = await LanguageHelper.getLanguage();

    const illust = document.querySelector('#excellence .responsive-illust');
    illust.setAttribute('aria-label', excellenceConfig.list.responsive.aria_label[lang]);

    const title = document.querySelector('#excellence .responsive-title');
    title.innerHTML = excellenceConfig.list.responsive[lang];

    const desc = document.querySelector('#excellence .responsive-description');
    desc.innerHTML = excellenceConfig.list.responsive.description[lang];
  },

  async _renderAccessibility() {
    const lang = await LanguageHelper.getLanguage();

    const illust = document.querySelector('#excellence .accessibility-illust');
    illust.setAttribute('aria-label', excellenceConfig.list.accessibility.aria_label[lang]);

    const title = document.querySelector('#excellence .accessibility-title');
    title.innerHTML = excellenceConfig.list.accessibility[lang];

    const desc = document.querySelector('#excellence .accessibility-description');
    desc.innerHTML = excellenceConfig.list.accessibility.description[lang];
  },

  async _renderPWA() {
    const lang = await LanguageHelper.getLanguage();

    const illust = document.querySelector('#excellence .pwa-illust');
    illust.setAttribute('aria-label', excellenceConfig.list.pwa.aria_label[lang]);

    const title = document.querySelector('#excellence .pwa-title');
    title.innerHTML = excellenceConfig.list.pwa[lang];

    const desc = document.querySelector('#excellence .pwa-description');
    desc.innerHTML = excellenceConfig.list.pwa.description[lang];
  },
};

export default Excellence;
