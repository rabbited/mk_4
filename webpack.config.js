const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Your main JavaScript file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clears old files in 'dist' when rebuilding
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, '.'), // Serve from the root folder
    compress: true,
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Tells Webpack where your HTML file is
      filename: 'index.html',
    }),
  ],
};