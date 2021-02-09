import LanguageInitiator from '../utils/language-initiator';
import HeaderInitiator from '../utils/header-initiator';
import SectionHelper from '../utils/section-helper';
import Portfolio from './portfolio';
import swRegister from '../utils/sw-register';

const App = {
  async renderPage() {
    await LanguageInitiator.init();
    await HeaderInitiator.init();
    await SectionHelper.initAnimation();
    await Portfolio.init();
    await swRegister();
  },
};

export default App;
