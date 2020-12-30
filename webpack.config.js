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
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  output: {
    filename: "bundle.js",
  },
};
