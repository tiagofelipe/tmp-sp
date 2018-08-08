const
  theme = process.argv[2] || 'theme-default',
  host = process.env.HOST || '0.0.0.0',
  port = process.env.PORT || 8080

module.exports = {
  theme,
  ulocVersion: require('../package.json').version,
  host,
  port,
  uri: `http://${host}:${port}`,
  rtl: process.env.ULOC_RTL !== void 0,
  devServerConfig: {
    publicPath: '/',
    host,
    port,
    stats: 'none',
    hot: true,
    inline: true,
    overlay: true,
    quiet: true,
    historyApiFallback: true,
    noInfo: true,
    disableHostCheck: true,
    contentBase: [
      require('path').resolve(__dirname, '../dev')
    ]
  }
}
