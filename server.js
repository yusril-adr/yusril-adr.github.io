/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.dev');

const compiler = webpack(webpackConfig);
const PORT = 8080;
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  }));

  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`App listening to http://127.0.0.1:${PORT} || http://localhost:${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
