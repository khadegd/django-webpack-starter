const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const BundleTracker = require('webpack-bundle-tracker');

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./assets/dist")
  },
  plugins: [
    new BundleTracker({path: __dirname, filename: './assets/dist/webpack.dev.json'})
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      }
    ]
  }
});
