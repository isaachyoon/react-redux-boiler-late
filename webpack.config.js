const path = require('path');
const webpack = require('webpack');
const cssLoader = require('css-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

var BUILD_DIR = path.join(__dirname, 'client/public');


module.exports = {
  // entry: './client/index.js',
  //script to make react hot load
  entry: [
    'react-hot-loader/patch',
    './client/index.js'
  ],
  devtool: 'source-map',  
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
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ],
    // rules: [
    //   {
    //     test: /\.css$/,
    //     use: [ 'style-loader', 'css-loader' ]
    //   }
    // ]
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