import frameworkConfig from '../../data/framework';
import LanguageHelper from '../../utils/language-helper';
import CONFIG from '../../global/CONFIG';
import { createFrameworkItemTemplate } from '../templates/template-creator';

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
    const listElement = document.querySelector('#framework ul');
    listElement.innerHTML = '';

    CONFIG.FRAMEWORK.forEach((framework) => this._renderFramework(framework));
  },

  async _renderFramework(framework) {
    const lang = await LanguageHelper.getLanguage();

    const frameworkElement = document.createElement('li');
    frameworkElement.classList.add('flex');
    frameworkElement.classList.add('justify-center');
    frameworkElement.innerHTML += createFrameworkItemTemplate(frameworkConfig[framework], lang);

    const listElement = document.querySelector('#framework ul');
    listElement.appendChild(frameworkElement);
  },
};

export default Framework;
