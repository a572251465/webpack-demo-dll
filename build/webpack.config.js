const path = require('path')
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')
const resolvePath = (url) => path.resolve(__dirname, url)
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: resolvePath('../src/index.js'),
  output: {
    path: resolvePath('../dist'),
    filename: 'handle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DllReferencePlugin({
      manifest: require('../dll/vue.dll.manifest.json')
    }),
    new HtmlWebpackPlugin({
      template: resolvePath('../public/index.html')
    }),
    new AddAssetHtmlPlugin({
      publicPath: '',
      filepath: resolvePath('../dll/*.dll.js')
    })
  ]
}
