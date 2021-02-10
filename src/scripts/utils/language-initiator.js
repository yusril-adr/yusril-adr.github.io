import {
  createEnLanguageListTemplate,
  createIdLanguageListTemplate,
} from '../views/templates/template-creator';
import LanguageHelper from './language-helper';
import SectionHelper from './section-helper';

const LanguageInitiator = {
  async init() {
    await this._renderLanguage();
    await this._initBtn();
    await this._removeAnimClassFromBodyEvent();
  },

  async _renderLanguage() {
    await this._renderBtn();
    await SectionHelper.renderSection();
  },

  async _renderBtn() {
    const lang = await LanguageHelper.getLanguage();
    const langLists = document.querySelectorAll('ul.language-list');

    langLists.forEach(async (list) => {
      list.innerHTML = '';
      if (lang === 'en') {
        list.innerHTML = createEnLanguageListTemplate();
      } else list.innerHTML = createIdLanguageListTemplate();

      await this._listEvent(list);
    });
  },

  async _initBtn() {
    const buttons = document.querySelectorAll('button.language');

    buttons.forEach(async (button) => {
      button.addEventListener('click', async (event) => {
        await this._toggleAnimClass();
        event.stopPropagation();
      });
    });
  },

  async _removeAnimClassFromBodyEvent() {
    document.body.addEventListener('click', (event) => {
      const langLists = document.querySelectorAll('ul.language-list');

      langLists.forEach((list) => {
        if (list.classList.contains('active')) {
          list.classList.remove('active');
        }
      });

      event.stopPropagation();
    });
  },

  async _toggleAnimClass() {
    const langLists = document.querySelectorAll('ul.language-list');

    langLists.forEach((list) => {
      if (list.classList.contains('active')) {
        list.classList.remove('active');

        setTimeout(() => {
          list.classList.add('hidden');
        }, 300);
      } else {
        list.classList.remove('hidden');
        list.classList.add('active');
      }
    });
  },

  async _listEvent(list) {
    const items = list.querySelectorAll('.language-item');

    items.forEach(async (item) => {
      item.addEventListener('click', async (event) => {
        const lang = item.getAttribute('value');
        await this._toggleAnimClass();
        await this._changeLanguage(lang);
        event.stopPropagation();
      });
    });
  },

  async _changeLanguage(lang) {
    document.querySelector('html').lang = lang;
    await this._renderLanguage();
  },
};

export default LanguageInitiator;
