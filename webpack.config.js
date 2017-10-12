const path = require("path");
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const SplitByPathPlugin = require('webpack-split-by-path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: ['./assets/js/app.js', './assets/scss/app.scss'],
  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "[name]-[hash].js",
      chunkFilename: "[name]-[hash].js"
  },

  plugins: [
    new CleanWebpackPlugin([ path.resolve('./assets/bundles/')]),
    
    new BundleTracker({filename: './webpack-stats.json'}),
    new SplitByPathPlugin([
      {
        name: 'vendor',
        path: path.join(__dirname, './node_modules/')
      }
    ]),
    new ExtractTextPlugin({
     filename: "[name]-[hash].css",
     allChunks: true,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      }
    ],
    loaders: [
      // we pass the output from babel loader to react-hot loader
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'], },
    ],
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },
}
