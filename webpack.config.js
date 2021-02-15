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
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "."),
    filename: "server.bundle.js",
  },
  resolve: {
    extensions: [".js"],
  },
  optimization: {
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
};
