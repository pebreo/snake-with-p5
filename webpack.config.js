var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

var conf = {
 entry: './src/main.js',
 output: {
    //path: path.join(__dirname, 'build'),
    filename: './bundle.js'
  },
   plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};

module.exports = conf;

