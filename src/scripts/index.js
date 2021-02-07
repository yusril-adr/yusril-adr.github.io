import 'regenerator-runtime';
import '../styles/style.scss';
import App from './views/app';

const app = new App();

document.addEventListener('DOMContentLoaded', async () => {
  app.renderPage();
});
