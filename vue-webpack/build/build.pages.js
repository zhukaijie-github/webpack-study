'use strict';
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const webpackPagesConfig = require('./webpack.pages.config');

webpack(webpackPagesConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
    // 构建过程出错
    console.log('err', err);
    console.log('stats', stats);
  }
  // 成功执行完构建
  console.log('success----');
});
