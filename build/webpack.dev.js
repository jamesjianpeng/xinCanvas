const config = require('./webpack.config')
const webpackMerge = require('webpack-merge')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = webpackMerge(config, {
  plugins: [
    new HtmlWebPackPlugin({
      filename: 'index.html'
    })
  ]
})
