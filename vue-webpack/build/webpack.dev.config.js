const { merge } = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config');
const { styleLoaders } = require('./style.loaders');
const env = require('../config/dev.env');
// 复制静态资源到打包输出目录
const CopyWebpackPlugin = require('copy-webpack-plugin');

process.env.NODE_ENV = 'development';

const webpackDevConfig = {
  mode: 'development',
  module: {
    rules: styleLoaders(),
  },
  devServer: {
    host: 'localhost',
    port: '9000',
    hot: true,
    inline: true,
  },
  plugins: [
    // 允许在编译时(compile time)配置的全局常量
    new webpack.DefinePlugin({
      'process.env': env,
    }),
    // 复制public静态资源
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          to: '',
        },
      ],
    }),
  ],
};
module.exports = merge(webpackBaseConfig, webpackDevConfig);
