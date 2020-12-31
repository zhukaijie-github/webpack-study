const path = require('path');

/**
 * 1. filename 输出文件名称，有id: chunk唯一标识,name: chunk名称,hash,chunkhash
 * 2. path 输出文件路径
 * 3. chunkFilename 配置无入口的依赖文件, 比如使用 import()函数加载的文件 vue-router import() 按需加载
 * 4. publicPath 项目中有一些资源需要异步加载，通过publicPath添加地址前缀，
 *          <script src='https://cdn.example.com/assets/a_12345678.js'></script>
 *
 * 5. libraryTarget 和 library 当webpack 构建一个可以被其他模块导入的库的时候会用到他们
 *    libraryTarget 配置以何种方式导出库
 *      var  暴露一个变量  ------ 直接使用library定义的名称
 *      this this[xxx]    ------使用this
 *      window 同上
 *      global 同上
 *      commonjs2         ----- require("myDemo");
 *      amd               ------- AMD define
 *      umd               ------- 通用模块
 *
 *
 *    library 配置导出库的名称
 *
 *    https://github.com/Yuliang-Lee/webpack-libraryTarget-demo
 *
 */

module.exports = {
  entry: './output/main.js',
  output: {
    // filename: '[id]_[name]_[hash:8]_[chunkhash:8].js',
    filename: './js/[name][chunkhash:8].js', // ./js 相当路径，会将编译后的js 存放到path目录下js文件夹内，没有js文件夹会自动生成一个js文件夹
    path: path.resolve(__dirname, './dist'),
    chunkFilename: 'ver_[name][chunkhash:8].js',
    publicPath: 'https://cdn.example.com/assets/',
    libraryTarget: 'umd',
    library: 'mydemo',
  },
};
