const { DllPlugin } = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const resolvePath = (url) => path.resolve(__dirname, url)

module.exports = {
  entry: {
    // 打包入口
    vue: ['vue', 'vuex', 'vue-router']
  },
  output: {
    // 出力的dll 路径
    filename: '[name]-[hash].dll.js',
    // 输出的解析地址
    path: resolvePath('../dll'),
    // 包名称
    library: '_dll_[name]'
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['dll/**/*']
    }),
    new DllPlugin({
      // 暴露的全局名称
      name: '_dll_[name]',
      // 以及输出的地址
      path: path.join(__dirname, '../dll', '[name].dll.manifest.json')
    })
  ]
}
