const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const { NODE_ENV = "production" } = process.env;

module.exports = {
  entry: "./server.js",
  mode: NODE_ENV,
  node: {
    __dirname: false,
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "."),
    filename: "server.bundle.js",
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
};
