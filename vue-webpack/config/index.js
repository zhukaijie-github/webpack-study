module.exports = {
  dev: {
    assetsDir: 'static',
  },
  build: {
    assetsDir: 'static',
    outputDir: 'dist',
    publicPath: './',
    externals: [
      {
        module: 'vue',
        entry: 'https://cdn.bootcss.com/vue/2.5.2/vue.min.js',
        global: 'Vue',
      },
      {
        module: 'vue-router',
        entry: 'https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js',
        global: 'VueRouter',
      },
    ],
  },
};
