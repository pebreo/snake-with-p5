var path = require("path");
var HtmlWebpackPlugin =  require('html-webpack-plugin');
module.exports = {
  entry: {
    app: ["./main.js"]
  },
  output: {
    path: './',
    filename: "bundle.js"
  },
  plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};