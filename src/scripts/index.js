import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/style.scss';
import App from './views/app';

window.addEventListener('load', async () => {
  await App.renderPage();
});
