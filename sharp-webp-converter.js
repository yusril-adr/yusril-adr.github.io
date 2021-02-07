/* eslint-disable no-console */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const exceptionImage = [
  'icon.png',
];

const isResized = (image, extension) => image.endsWith(`-medium.${extension}`) || image.endsWith(`-small.${extension}`);

const isWebP = (image) => image.endsWith('.webp');

const isExceptionImage = (image) => exceptionImage.includes(image);

if (!fs.existsSync(target)) {
  fs.mkdirSync(target);
}

console.log('Coverting images ...');
fs.readdirSync(target).forEach((image) => {
  const extension = image.split('.').slice(-1).join('.');

  if (!isResized(image, extension) && !isWebP(image) && extension !== 'svg' && !isExceptionImage(image)) {
    sharp(`${target}/${image}`)
      .webp({ quality: 50 })
      .toFile(
        path.resolve(
          __dirname,
          `${target}/${image.split('.').slice(0, -1).join('.')}.webp`,
        ),
      )
      .catch((error) => {
        console.log(error);
      });
  }
});

console.log('Convert images completed.');
