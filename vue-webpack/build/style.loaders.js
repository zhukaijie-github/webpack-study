// 抽离css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssLoaders = () => {
  const defaultLoader = {
    loader: 'style-loader',
  };
  const cssLoader = {
    loader: 'css-loader',
  };
  const postcssLoader = {
    loader: 'postcss-loader',
  };

  function generateLoaders(loader) {
    const loaders = [cssLoader, postcssLoader];

    if (process.env.NODE_ENV === 'production') {
      // 生产环境抽离css样式
      loaders.unshift({
        loader: MiniCssExtractPlugin.loader,
      });
    } else {
      loaders.unshift(defaultLoader);
    }

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
      });
    }

    return loaders;
  }

  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass'),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus'),
  };
};

const styleLoaders = () => {
  const loaders = cssLoaders();
  const output = [];
  for (const key in loaders) {
    output.push({
      test: new RegExp('\\.' + key + '$'),
      use: loaders[key],
    });
  }

  return output;
};

module.exports = {
  styleLoaders,
};
