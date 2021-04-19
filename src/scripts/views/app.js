import LanguageInitiator from '../utils/language-initiator';
import HeaderInitiator from '../utils/header-initiator';
import SectionHelper from '../utils/section-helper';
import swRegister from '../utils/sw-register';

const App = {
  async renderPage() {
    await LanguageInitiator.init();
    await HeaderInitiator.init();
    await SectionHelper.initAnimation();
    await swRegister();
  },
};

export default App;
