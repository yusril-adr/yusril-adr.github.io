/* eslint-disable no-console */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const exceptionImage = [
  'icon.png',
];

const isResized = (image, extension) => image.endsWith(`-medium.${extension}`) || image.endsWith(`-small.${extension}`);

const isExceptionImage = (image) => exceptionImage.includes(image);

if (!fs.existsSync(target)) {
  fs.mkdirSync(target);
}

console.log('Resizing images ...');
fs.readdirSync(target).forEach((image) => {
  const extension = image.split('.').slice(-1).join('.');

  if (!isResized(image, extension) && extension !== 'svg' && !isExceptionImage(image)) {
    // mengubah ukuran gambar dengan prefix -medium.ext
    sharp(`${target}/${image}`)
      .resize(640)
      .toFile(
        path.resolve(
          __dirname,
          `${target}/${image.split('.').slice(0, -1).join('.')}-medium.${extension}`,
        ),
      )
      .catch((error) => {
        console.log(error);
      });

    // mengubah ukuran gambar dengan prefix -small.ext
    sharp(`${target}/${image}`)
      .resize(360)
      .toFile(
        path.resolve(
          __dirname,
          `${target}/${image.split('.').slice(0, -1).join('.')}-small.${extension}`,
        ),
      )
      .catch((error) => {
        console.log(error);
      });
  }
});

console.log('Resize images completed.');
