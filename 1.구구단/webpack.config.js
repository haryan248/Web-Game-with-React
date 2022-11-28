const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "inline-source-map", // hidden-source-map
  resolve: {
    extensions: [".jsx", ".js"],
  },
  entry: {
    // 입력
    app: "./client",
  },
  module: {
    rules: [
      {
        // js, jsx에 바벨 로더 옵션 적용
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 1% in KR"], // browserslist 지원할 브라우저 작성
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [],
        },
      },
    ],
  },
  output: {
    // 출력
    filename: "app.js",
    path: path.join(__dirname, "dist"),
  },
};
