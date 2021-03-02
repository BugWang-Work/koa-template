const { merge } = require("webpack-merge");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const baseConfig = require("./webpack.config.base");

const prodConfig = merge(baseConfig, {
  mode: "production",
  optimization: {
    minimizer: [new TerserWebpackPlugin()],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
        },
      },
    }
  },
});

module.exports = prodConfig;
