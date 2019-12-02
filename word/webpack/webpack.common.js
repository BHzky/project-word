const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        another:'./src/another.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization:{
        splitChunks:{
            chunks:'all',
            minSize:1
        }
    },
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