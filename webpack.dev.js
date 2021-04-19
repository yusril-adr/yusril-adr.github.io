const { merge } = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const tailwindcss = require('tailwindcss');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    index: ['webpack-hot-middleware/client'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  tailwindcss,
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  tailwindcss,
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      favicon: path.resolve('src', 'public', 'images', 'icon.png'),
      filename: 'index.html',
    }),
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'Yusril A. P. Portfolio',
      short_name: 'Yusril A. P.',
      description: 'Front-end Developer | Back-end Developer | Fullstack Developer',
      start_url: '/',
      display: 'standalone',
      background_color: '#040402',
      theme_color: '#1e2327',
      inject: true,
      fingerprints: true,
      ios: true,
      icons: [
        {
          src: path.resolve('src', 'public', 'images', 'icon.png'),
          sizes: [192, 256, 384, 512],
          ios: true,
          destination: 'images',
          purpose: 'any maskable',
        },
      ],
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
