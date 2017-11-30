const path  =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: process.cwd(),
  entry: './app/scripts/main.js',
  output: {
    path: path.resolve(process.cwd(), 'docs/'),
    filename: 'scripts/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jade$/,
        use: [
          'pug-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              context: 'app',
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/jade/index.jade'
    }),
    new CleanWebpackPlugin(['docs'])
  ]
};
