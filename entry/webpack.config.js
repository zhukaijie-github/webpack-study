module.exports = {
  /**
   * entry 是配置入口，webpakc会依据这个入口地址递归解析依赖模块
   * @param {type: 类型}: String Array Object
   */
  entry: './src/main.js', // string 字符串
  // entry: ['./src/main.js'], // array 数组
  // entry: { main: './src/main.js' }, // object 对象

  /**
   * 配置动态 Entry
   */

  // // 同步函数
  // entry: () => {
  //   return {
  //     a: './pages/a',
  //     b: './pages/b',
  //   };
  // },
  // // 异步函数
  // entry: () => {
  //   return new Promise(resolve => {
  //     resolve({
  //       a: './pages/a',
  //       b: './pages/b',
  //     });
  //   });
  // },

  /**
   * context 是webpack寻找相当路径文件的根目录，默认情况下是执行启动 Webpack 时所在的当前工作目录
   */
  // context: path.resolve(__dirname, 'app'),

  /**
   * Chunk 名称
   * Webpack 会为每个生成的 Chunk 取一个名称，Chunk 的名称和 Entry 的配置有关：
   *  如果 entry 是一个 string 或 array，就只会生成一个 Chunk，这时 Chunk 的名称是 main；
   *  如果 entry 是一个 object，就可能会出现多个 Chunk，这时 Chunk 的名称是 object 键值对里键的名称。
   */
};
