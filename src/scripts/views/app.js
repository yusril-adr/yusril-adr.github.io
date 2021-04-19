import LanguageInitiator from '../utils/language-initiator';
import HeaderInitiator from '../utils/header-initiator';
import SectionHelper from '../utils/section-helper';
import swRegister from '../utils/sw-register';

const App = {
  async renderPage() {
    await this._scrollToTop();
    await LanguageInitiator.init();
    await HeaderInitiator.init();
    await SectionHelper.initAnimation();
    // await swRegister();
  },

  async _scrollToTop() {
    scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  },
};

export default App;
