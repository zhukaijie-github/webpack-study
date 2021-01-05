const path = require('path');
const config = require('../config/index');

// 生成资源包路径
const assetsPath = _path => {
  const assetsDir =
    process.env.NODE_ENV === 'production'
      ? config.build.assetsDir
      : config.dev.assetsDir;
  /**
   * path.posix
   * https://nodejs.org/api/path.html#path_path_posix
   *
   */

  return path.posix.join(assetsDir, _path);
};

module.exports = {
  assetsPath,
};
