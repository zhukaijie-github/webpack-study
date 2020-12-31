/**
 * resolve 配置webpack如何去寻找模块对应的文件（有配置别名）
 *         1. alias 配置别名
 *         2. mainFields 有一些第三方模块会针对不同环境提供几分代码。
 *            Webpack 会按照数组里的顺序去【package.json】 文件里寻找，只会使用找到的第一个
 *         3. extensions 在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在。
 *         4. modules resolve.modules 配置 Webpack 去哪些目录下寻找第三方模块，
 *            默认是只会去 node_modules 目录下寻找。
 *         5. enforceExtension   resolve.enforceExtension 如果配置为 true 所有导入语句都必须要带文件后缀
 */

module.export = {
  resolve: {
    // 别名配置
    alias: {
      '@': './src',
      react$: '/path/to/react.min.js', // 值命中以react结尾的引入
    },
    mainFields: ['jsnext:main', 'browser', 'main'],
    extensions: ['.ts', '.js', '.json', '.vue', '.jsx', '.tsx'],
    modules: ['./src/components', 'node_modules'],
  },
};
