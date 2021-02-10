import aboutConfig from '../../data/about';
import LanguageHelper from '../../utils/language-helper';

const About = {
  async init() {
    await this._renderDecorationObject();
    await this._renderTitle();
    await this._renderDescription();
  },

  async _renderDecorationObject() {
    const lang = await LanguageHelper.getLanguage();
    const illust = document.querySelector('#about .about-illust')
    illust.setAttribute('aria-label', aboutConfig.decoration.aria_label[lang]);
  },

  async _renderTitle() {
    const lang = await LanguageHelper.getLanguage();
    document.querySelector('#about .title').innerHTML = aboutConfig.title[lang];
  },

  async _renderDescription() {
    const lang = await LanguageHelper.getLanguage();
    document.querySelector('#about .description').innerHTML = aboutConfig.description[lang];
  },
};

export default About;
