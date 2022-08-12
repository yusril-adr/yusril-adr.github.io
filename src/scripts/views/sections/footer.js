const Footer = {
  async init() {
    this._renderCopyright();
  },

  _renderCopyright() {
    const copyrightElem = document.querySelector('footer #copyright-year');
    const currentYear = new Date().getFullYear();

    copyrightElem.innerHTML = currentYear;
  },
};

export default Footer;
