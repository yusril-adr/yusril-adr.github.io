import { 
  createEnLanguageListTemplate,
  createIdLanguageListTemplate,
} from '../views/templates/template-creator';
import LanguageHelper from './language-helper';

const LanguageInitiator = {
  async init() {
    await this._renderBtn();
    await this._initBtn();
    await this._removeAnimClassFromBodyEvent();
  },

  async _renderBtn() {
    const lang = await LanguageHelper.getLanguage();
    const langLists = document.querySelectorAll('ul.language-list');

    langLists.forEach((list) => {
      list.innerHTML = '';
      if (lang === 'en') {
        list.innerHTML = createEnLanguageListTemplate();
      } else list.innerHTML = createIdLanguageListTemplate();
    });
  },

  async _initBtn() {
    const buttons = document.querySelectorAll('button.language');
    const langLists = document.querySelectorAll('ul.language-list');

    buttons.forEach(async (button) => {
      button.addEventListener('click', async (event) => {
        await this._toggleAnimClass();
        event.stopPropagation();
      });
    });

    langLists.forEach(async (list) => {
      await this._listEvent(list);
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
};

export default LanguageInitiator;
