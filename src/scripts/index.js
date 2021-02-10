import 'regenerator-runtime';
import '../styles/style.scss';
import App from './views/app';

window.addEventListener('load', async () => {
  await App.renderPage();
});
