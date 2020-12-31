/**
 * plugin 用于扩展webpack能力,
 *       js， css, img 压缩  等
 *
 */

/**
 * 常用的几个插件
 * https://www.webpackjs.com/plugins/
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  plugins: [new HtmlWebpackPlugin()],
};
