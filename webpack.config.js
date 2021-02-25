const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./server.js",
  node: {
    __dirname: false,
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "."),
    filename: "server.bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  optimization: {
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
};
