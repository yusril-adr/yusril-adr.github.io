import feedConfig from '../../data/feed';
import LanguageHelper from '../../utils/language-helper';

const Feed = {
  async init() {
    await this._renderTitle();
    await this._renderSubtitle();
    await this._renderPlaceholder();
    await this._renderSubmitBtn();
    await this._renderImgAlt();
  },

  async _renderTitle() {
    const lang = await LanguageHelper.getLanguage();
    const title = document.querySelector('#feed .title');
    title.innerHTML = feedConfig.title[lang];
  },

  async _renderSubtitle() {
    const lang = await LanguageHelper.getLanguage();
    const title = document.querySelector('#feed .subtitle');
    title.innerHTML = feedConfig.subtitle[lang];
  },

  async _renderPlaceholder() {
    const lang = await LanguageHelper.getLanguage();
    await this._renderSender(lang);
    await this._renderSubject(lang);
    await this._renderBody(lang);
  },

  async _renderSender(lang) {
    const input = document.querySelector('#feed input[name=sender]');
    input.setAttribute('placeholder', feedConfig.placeholder.sender[lang]);
  },

  async _renderSubject(lang) {
    const input = document.querySelector('#feed input[name=subject]');
    input.setAttribute('placeholder', feedConfig.placeholder.subject[lang]);
  },

  async _renderBody(lang) {
    const input = document.querySelector('#feed textarea[name=body]');
    input.setAttribute('placeholder', feedConfig.placeholder.body[lang]);
  },

  async _renderSubmitBtn() {
    const lang = await LanguageHelper.getLanguage();
    const button = document.querySelector('#feed button[type=submit]');
    button.innerHTML = feedConfig.button[lang];
  },

  async _renderImgAlt() {
    const lang = await LanguageHelper.getLanguage();
    const img = document.querySelector('.form-image img');
    img.setAttribute('alt', feedConfig.img.alt[lang]);
  },
};

export default Feed;
