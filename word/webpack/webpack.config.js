const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  // entry: './src/index.js',
  entry: {
    app:'./src/index.js',
    // print:'./src/print.js'
  },
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer:{
    contentBase:__dirname,
    hot:true
  },
  devtool:'inline-source-map',
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:'output management'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },{
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader']
    }]
  }
};