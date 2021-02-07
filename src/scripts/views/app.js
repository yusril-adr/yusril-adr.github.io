import HeaderInitiator from '../utils/header-initiator';
import SectionHelper from '../utils/section-helper';
import Portfolio from './portfolio';
import swRegister from '../utils/sw-register';

class App {
  constructor({ header = document.querySelector('header') } = {}) {
    this._header = header;
  }

  async renderPage() {
    await HeaderInitiator.init(this._header);
    await SectionHelper.initAnimation();
    await Portfolio.init();
    await swRegister();
  }
}

export default App;
