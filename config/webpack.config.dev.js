const { webpack } = require('webpack')
const webpackMerge = require('webpack-merge')

const baseConfig = require('./webpack.config.base')

const devConfig = webpackMerge(
    baseConfig,
    {
        mode: 'development',
        devtool: 'eval-source-map',
    }
)

module.exports = devConfig