/**
 * historyApiFallback: {
    // 使用正则匹配命中路由
    rewrites: [
      // /user 开头的都返回 user.html
      { from: /^\/user/, to: '/user.html' },
      { from: /^\/game/, to: '/game.html' },
      // 其它的都返回 index.html
      { from: /./, to: '/index.html' },
    ]
  }

  allowedHosts => 配置一个白名单列表只有 HTTP 请求的 HOST 在列表里才正常返回

  https => 使用 HTTPS 协议服务
 */

module.exports = {
  devServer: {
    hot: true, // 模块热替换功能
    inline: true, // 默认开启， 开启 inline，DevServer 会在构建完变化后的代码时通过代理客户端控制网页刷新，自动刷新网页实现实时预览
    historyApiFallback: true, // 配置h5 history 历史路由， 需要服务端配合配置
    allowedHosts: [
      // 匹配单个域名
      'host.com',
      'sub.host.com',
      // host2.com 和所有的子域名 *.host2.com 都将匹配
      '.host2.com',
    ],
  },
};
