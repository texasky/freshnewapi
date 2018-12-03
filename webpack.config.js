const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/controller.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: './build/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  }
}
