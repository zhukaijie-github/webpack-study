'use strict';
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const webpackProdConfig = require('./webpack.prod.config');

webpack(webpackProdConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
    // 构建过程出错
    console.log(err);
  }
  // 成功执行完构建
  console.log('success');
});
