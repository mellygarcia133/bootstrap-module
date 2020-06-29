const TerserWebpackPlugin = require('terser-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './js/index.js',
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    index: 'index.html',
    port: 8000

  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    
  },

  module: {
    rules: [

      {

        test: /index.html$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
            name: 'index.html'
            }
          }
        ]
      },

      {
        test: /\.css$/i,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/i,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.(gif|jpg|jpeg|png)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },

  plugins: [

    new CleanWebpackPlugin(),
    new TerserWebpackPlugin(),

  ]

};
