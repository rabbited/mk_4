const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Webpack will generate bundle.js here
  },
  mode: 'development',
};