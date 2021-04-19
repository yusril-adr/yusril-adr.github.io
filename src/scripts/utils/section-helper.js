import Header from '../views/sections/header';
import Home from '../views/sections/home';
import About from '../views/sections/about';
import Excellence from '../views/sections/excellence';
import Framework from '../views/sections/framework';
import Portfolio from '../views/sections/portfolio';
import Feed from '../views/sections/feed';
import Contact from '../views/sections/contact';

const SectionHelper = {
  async renderSection() {
    await Header.init();
    await Home.init();
    await About.init();
    await Excellence.init();
    await Framework.init();
    await Portfolio.init();
    await Feed.init();
    await Contact.init();
  },

  async initAnimation() {
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      const sectionId = section.id;
      if (sectionId !== 'home' && sectionId !== 'contact') {
        document.addEventListener('scroll', async () => {
          this._setAnimation(section);
        });
      }
    });
  },

  async _setAnimation(section) {
    const sectionOffset = section.offsetTop;

    if (await this._isReach(sectionOffset) && !(await this._hasClass(section, 'reached'))) {
      section.classList.add('reached');
    }
  },

  async _isReach(elementOffset) {
    const offset = elementOffset - (innerHeight * 0.75);
    return document.body.scrollTop > offset || document.documentElement.scrollTop > offset;
  },

  async _hasClass(element, className) {
    return element.classList.contains(className);
  },
};

export default SectionHelper;
