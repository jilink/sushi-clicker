const path = require("path");

module.exports = {
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "./src"),
    historyApiFallback: true,
    port: 8000,
  },
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
    ],
  },
  output: {
    filename: "bundle.js",
  },
};
