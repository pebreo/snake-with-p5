var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

var conf = {
 entry: './app/main.js',
 output: {
    path: path.join(__dirname, 'build'),
    filename: './bundle.js'
  },
   plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};

module.exports = conf;

