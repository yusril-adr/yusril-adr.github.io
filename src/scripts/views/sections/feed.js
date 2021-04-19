import Swal from 'sweetalert2';
import feedConfig from '../../data/feed';
import CONFIG from '../../global/CONFIG';
import LanguageHelper from '../../utils/language-helper';
import FeedHelper from '../../utils/feed-helper';
import Toast from '../../utils/toast';
import ValidationError from '../../utils/validationError';

const Feed = {
  async init() {
    await this._renderTitle();
    await this._renderSubtitle();
    await this._renderPlaceholder();
    await this._renderSubmitBtn();
    await this._renderImgAlt();
    await this._initFormEvent();
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
    const input = document.querySelector('#feed-sender');
    input.setAttribute('placeholder', feedConfig.placeholder.sender[lang]);
  },

  async _renderSubject(lang) {
    const input = document.querySelector('#feed-subject');
    input.setAttribute('placeholder', feedConfig.placeholder.subject[lang]);
  },

  async _renderBody(lang) {
    const input = document.querySelector('#feed-body');
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

  async _initFormEvent() {
    const lang = await LanguageHelper.getLanguage();
    const form = document.querySelector('#feed-form');

    form.addEventListener('submit', async (event) => {
      event.stopPropagation();
      event.preventDefault();

      try {
        Swal.showLoading();
        await this._validateInput(event.target, lang);

        await this._postForm(event.target);

        await Toast.fire({
          icon: 'success',
          title: feedConfig.toast.success[lang],
        });
      } catch (error) {
        await Toast.fire({
          icon: 'error',
          title: (error instanceof ValidationError)
            ? error.message : CONFIG.ERROR_MESSAGE[lang],
        });
      }
    });
  },

  async _validateInput(form, lang) {
    if (!form['feed-sender'].value || !form['feed-subject'].value || !form['feed-body'].value) {
      throw new ValidationError(feedConfig.toast.validationError[lang]);
    }
  },

  async _postForm(form) {
    const feed = {
      sender: await FeedHelper.formatText(form['feed-sender'].value),
      subject: await FeedHelper.formatText(form['feed-subject'].value),
      body: await FeedHelper.formatText(form['feed-body'].value),
    };

    const response = await fetch(CONFIG.FEED_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feed),
    });
    const responseJSON = await response.json();

    if (response.status !== 200) throw new Error(responseJSON.message);
  },
};

export default Feed;
