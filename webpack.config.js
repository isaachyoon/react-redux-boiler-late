const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

var BUILD_DIR = path.join(__dirname, 'client/public');


module.exports = {
  entry: './client/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin()
  ], 
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" }
  },
}