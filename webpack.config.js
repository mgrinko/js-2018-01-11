const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: './frontend/js/app.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'public')
  },
  devtool: 'source-map',


  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
    })
  ],
};