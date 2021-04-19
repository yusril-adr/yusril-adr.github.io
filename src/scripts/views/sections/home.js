import homeConfig from '../../data/home';
import LanguageHelper from '../../utils/language-helper';

const Home = {
  async init() {
    await this._renderImgAlt();
  },

  async _renderImgAlt() {
    const lang = await LanguageHelper.getLanguage();
    const img = document.querySelector('.my-picture img');
    img.setAttribute('alt', homeConfig.img.alt[lang]);
  },
};

export default Home;
