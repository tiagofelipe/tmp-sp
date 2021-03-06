const
  path = require('path'),
  webpack = require('webpack'),
  WebpackChain = require('webpack-chain'),
  HtmlWebpackPlugin = require('html-webpack-plugin')

const env = require('./env')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const chain = new WebpackChain()

// inject base
require('./webpack.inject.base')(chain)

chain.entry('app')
  .add(resolve('dev/main.js'))

chain.plugin('define')
  .use(webpack.DefinePlugin, [{
    'process.env': {
      NODE_ENV: '"development"',
      THEME: JSON.stringify(env.theme)
    }
  }])

chain.plugin('html-webpack')
  .use(HtmlWebpackPlugin, [{
    filename: 'index.html',
    template: 'dev/index.html',
    inject: true,
    cache: true
  }])

chain.plugin('hot-module-replacement')
  .use(webpack.HotModuleReplacementPlugin)

chain.plugin('friendly-errors')
  .init((Plugin, args) => new Plugin({
    compilationSuccessInfo: {
      messages: [
        `Running SPA with Uloc v${env.ulocVersion} at ${env.uri}\n`
      ]
    },
    clearConsole: true
  }))

chain.optimization
  .namedModules(true) // HMR shows filenames in console on update

const webpackConfig = chain.toConfig()

// tap entries for HMR
require('webpack-dev-server').addDevServerEntrypoints(webpackConfig, env.devServerConfig)

module.exports = webpackConfig
