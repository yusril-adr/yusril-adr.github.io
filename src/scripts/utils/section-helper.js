const SectionHelper = {
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
