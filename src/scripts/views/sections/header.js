import headerConfig from '../../data/header';
import LanguageHelper from '../../utils/language-helper';

const Header = {
  async init() {
    await this._renderHeader();
  },

  async _renderHeader() {
    await this._renderTitle();
    await this._renderMenu();
    await this._renderNav();
  },

  async _renderTitle() {
    const lang = await LanguageHelper.getLanguage();
    document.querySelector('header .title').innerHTML = headerConfig.title[lang];
  },

  async _renderMenu() {
    const lang = await LanguageHelper.getLanguage();

    const open = document.querySelector('header #menu-trigger');
    open.setAttribute('aria-label', headerConfig.menu.open.aria_label[lang]);

    const close = document.querySelector('header #close-menu');
    close.setAttribute('aria-label', headerConfig.menu.close.aria_label[lang]);
  },

  async _renderNav() {
    const lang = await LanguageHelper.getLanguage();
    document.querySelector('header .about').innerHTML = headerConfig.nav.about[lang];
    document.querySelector('header .portfolio').innerHTML = headerConfig.nav.portfolio[lang];
    document.querySelector('header .contact').innerHTML = headerConfig.nav.contact[lang];

    const langButtons = document.querySelectorAll('header .language');
    langButtons.forEach((button) => {
      button.setAttribute('aria-label', headerConfig.nav.language.aria_label[lang]);
    });
  },
};

export default Header;
