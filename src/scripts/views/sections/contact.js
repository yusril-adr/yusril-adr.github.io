import contactConfig from '../../data/contact';
import LanguageHelper from '../../utils/language-helper';

const Contact = {
  async init() {
    await this._renderWeb();
    await this._renderContact();
    await this._renderService();
  },

  async _renderWeb() {
    const lang = await LanguageHelper.getLanguage();
    document.querySelector('#contact .web-title').innerHTML = contactConfig.web.title[lang];
    document.querySelector('#contact .web-university').innerHTML = contactConfig.web.university[lang];
    document.querySelector('#contact .web-location').innerHTML = contactConfig.web.location[lang];
  },

  async _renderContact() {
    const lang = await LanguageHelper.getLanguage();
    document.querySelector('#contact .contact-title').innerHTML = contactConfig.contact.title[lang];

    const phone = document.querySelector('#contact .contact-phone');
    phone.setAttribute('aria_label', contactConfig.contact.phone.aria_label[lang]);
  },

  async _renderService() {
    const lang = await LanguageHelper.getLanguage();
    document.querySelector('#contact .service-title').innerHTML = contactConfig.service.title[lang];
  },
};

export default Contact;
