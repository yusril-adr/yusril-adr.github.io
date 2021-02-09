const HeaderInitiator = {
  async init(header = document.querySelector('header')) {
    this._header = header;
    this._navListContainer = this._header.querySelector('.nav-list-container');
    this._navListOverlay = this._header.querySelector('.nav-overlay');
    this._navList = this._navListContainer.querySelectorAll('a');
    this._menuBtn = this._header.querySelector('#menu-trigger');
    this._closeBtn = this._header.querySelector('#close-menu');

    document.addEventListener('scroll', async () => {
      await this._scrollEvent(this._header);
    });

    this._navListOverlay.addEventListener('click', async (event) => {
      await this._closeMenu(this._navListContainer);
      event.stopPropagation();
    });

    this._menuBtn.addEventListener('click', async (event) => {
      await this._openMenu(this._navListContainer);
      event.stopPropagation();
    });

    this._navList.forEach((navItem) => {
      navItem.addEventListener('click', async (event) => {
        event.preventDefault();
        await this._scrollPage(navItem);
        await this._closeMenu(this._navListContainer);
        event.stopPropagation();
      });
    });

    this._closeBtn.addEventListener('click', async (event) => {
      await this._closeMenu(this._navListContainer);
      event.stopPropagation();
    });
  },

  async _scrollEvent(header) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.classList.add('onscroll');
    } else if (header.classList.contains('onscroll')) header.classList.remove('onscroll');
  },

  async _scrollPage(anchor) {
    const href = anchor.getAttribute('href');
    const page = document.querySelector(href);

    scrollTo({
      top: href === '#home' ? 0 : page.offsetTop,
      behavior: 'smooth',
    });
  },

  async _openMenu(navListContainer) {
    if (!navListContainer.classList.contains('active')) navListContainer.classList.add('active');
  },

  async _closeMenu(navListContainer) {
    if (navListContainer.classList.contains('active')) {
      navListContainer.classList.add('right-0');
      navListContainer.classList.remove('active');

      setTimeout(() => {
        navListContainer.classList.remove('right-0');
      }, 300);
    }
  },

};

export default HeaderInitiator;
