
const  path = require('path')
const nodeExcternals = require('webpack-node-externals')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack  = require('webpack')

const webpackConfig = {
    target: 'node',
    entry: {
      server: path.resolve(__dirname,'../','src/index.js')  
    },
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'../', 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: [path.resolve(__dirname,'../','/node_modules')]
            }
        ]
    },
    externals: [nodeExcternals()],
    plugins:[
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod')?'production':'development'
            }
        })
    ]
}

module.exports = webpackConfig