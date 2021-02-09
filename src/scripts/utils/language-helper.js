const LanguageHelper = {
  async getLanguage() {
    return document.querySelector('html').lang;
  },
};

export default LanguageHelper;
