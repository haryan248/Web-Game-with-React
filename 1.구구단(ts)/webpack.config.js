const path = require("path");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "",
  mode: "development",
  devtool: "eval", // hidden-source-map
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
  entry: {
    app: "./client",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  // plugins: [new ReactRefreshWebpackPlugin()],
  output: {
    path: path.join(__dirname, "dist"), // 실제 경로
    filename: "[name].js",
    publicPath: "/dist", // 가상 경로
  },
  devServer: {
    devMiddleware: { publicPath: "/dist" },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
};
