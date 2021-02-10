import frameworkConfig from '../../data/framework';
import LanguageHelper from '../../utils/language-helper';

const Framework = {
  async init() {
    await this._renderTitle();
    await this._rendersubtitle();
    await this._renderList();
  },

  async _renderTitle() {
    const lang = await LanguageHelper.getLanguage();
    document.querySelector('#framework .title').innerHTML = frameworkConfig.title[lang];
  },

  async _rendersubtitle() {
    const lang = await LanguageHelper.getLanguage();
    document.querySelector('#framework .subtitle').innerHTML = frameworkConfig.subtitle[lang];
  },

  async _renderList() {
    await this._renderFramework('sass');
    await this._renderFramework('tailwindcss');
    await this._renderFramework('webpack');
    await this._renderFramework('nodejs');
    await this._renderFramework('mongodb');
  },

  async _renderFramework(framework) {
    const lang = await LanguageHelper.getLanguage();

    const logo = document.querySelector(`#framework .${framework}-logo`);
    logo.setAttribute('aria-label', frameworkConfig.aria_label[framework][lang]);
  },
};

export default Framework;
