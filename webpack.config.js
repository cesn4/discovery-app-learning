const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React app',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new CleanWebpackPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] }
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.min.css'
    })
  ]
};