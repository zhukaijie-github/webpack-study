const { merge } = require('webpack-merge');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config');
const { styleLoaders } = require('./style.loaders');
const env = require('../config/dev.env');

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
  ],
};
module.exports = merge(webpackBaseConfig, webpackDevConfig);
