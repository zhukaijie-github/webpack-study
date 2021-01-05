const { merge } = require('webpack-merge');
const path = require('path');
const webpackBaseConfig = require('./webpack.base.config');
// 打包前清理dist
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const env = require('../config/dev.env');
const { assetsPath } = require('./utils');
const { styleLoaders } = require('./style.loaders');
const config = require('../config/index');
// 抽离css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 压缩js
const TerserWebpackPlugin = require('terser-webpack-plugin');
// 将资源不到成模块，直接引入外部文件 cdn ，比如vue,react
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

const webpackDevConfig = {
  mode: 'production',
  output: {
    publicPath: config.build.publicPath ? config.build.publicPath : './',
    path: path.resolve(__dirname, '..', config.build.outputDir),
    filename: assetsPath('js/[name].[chunkhash:8].js'),
    chunkFilename: assetsPath('js/[name].[chunkhash:8].js'),
  },
  module: {
    rules: styleLoaders(),
  },
  // 打包会忽略这些，不会打包成模块（一般是用在index.html 引入了外部js）
  // externals: {
  //   // 把导入语句里的 vue 替换成运行环境里的全局变量 vue
  //   vue: 'vue',
  // },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': env,
    }),
    // 抽离css
    new MiniCssExtractPlugin({
      filename: assetsPath('css/[name]_[contenthash:8].css'),
      chunkFilename: assetsPath('css/[id].css'),
    }),
    // 压缩css
    new OptimizeCssAssetsPlugin(),
    // 压缩js
    new TerserWebpackPlugin(),
  ],
};

if (config.build.externals && config.build.externals.length > 0) {
  const externals = {};
  config.build.externals.map(item => {
    externals[item.global] = item.global;
  });
  webpackDevConfig.externals = externals;
  webpackDevConfig.plugins.push(
    new HtmlWebpackExternalsPlugin({
      externals: config.build.externals,
    })
  );
}
module.exports = merge(webpackBaseConfig, webpackDevConfig);
