/**
 * module 配置如何处理模块。
 * rules  配置模块的读取和解析规则，通常用来配置 Loader, 类型是个数组
 *        1. 条件匹配 ： test 正则匹配， include只匹配定义目录下的js， exclude排除定义目录下的js
 *        2. 应用规则 ： 对选中后的文件通过 use 配置项来应用 Loader，
 *        可以只应用一个 Loader 或者按照【从后往前】的顺序应用一 组 Loader，同时还可以分别给 Loader 传入参数。
 *        3. 重置顺序：一组 Loader 的执行顺序默认是【从右到左】执行，
 *        通过 enforce 选项可以让其中一个 Loader 的执行顺序放到最前或者最后。
 * noParse 配置项可以让 Webpack 忽略对部分没采用模块化的文件的递归解析和处理，这样做的好处是能提高构建性能。
 *         原因是一些库例如 jQuery 、ChartJS 它们庞大又没有采用模块化标准，让 Webpack 去解析这些文件耗时又没有意义。
 */

const path = require('path');

module.exports = {
  entry: './module/src/main.js',
  output: {
    filename: '[name][chunkhash:8].js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    // noParse: /jquery|chartjs/, //不去解析jquery中的依赖库
    // 使用函数
    noParse: content => {
      // content 代表一个模块的文件路径
      // 返回 true or false
      return /jquery|chartjs/.test(content);
    },
    rules: [
      {
        // 命中js文件
        test: /\.js$/,
        // 用 babel-loader 转换 JavaScript 文件
        // ?cacheDirectory 表示传给 babel-loader 的参数，用于缓存 babel 编译结果加快重新编译速度
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true,
          },
        },
        // 只命中src目录里的js文件，加快 Webpack 搜索速度
        include: path.resolve(__dirname, './src'),
        // 排除 node_modules 目录下的文件
        exclude: path.resolve(__dirname, 'node_modules'),
        // parser 属性可以更细粒度的配置哪些模块语法要解析哪些不解析
        // parser: {
        //   amd: false, // 禁用 AMD
        //   commonjs: false, // 禁用 CommonJS
        //   system: false, // 禁用 SystemJS
        //   harmony: false, // 禁用 ES6 import/export
        //   requireInclude: false, // 禁用 require.include
        //   requireEnsure: false, // 禁用 require.ensure
        //   requireContext: false, // 禁用 require.context
        //   browserify: false, // 禁用 browserify
        //   requireJs: false, // 禁用 requirejs
        // },
      },
      {
        // 命中 SCSS 文件
        test: /\.scss$/,
        // 使用一组 Loader 去处理 SCSS 文件。
        // 处理顺序为从后到前，即先交给 sass-loader 处理，再把结果交给 css-loader 最后再给 style-loader。
        use: ['style-loader', 'css-loader', 'sass-loader'],
        // 排除 node_modules 目录下的文件
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        // 对非文本文件采用 file-loader 加载
        test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
        use: ['file-loader'],
      },
    ],
  },
};
