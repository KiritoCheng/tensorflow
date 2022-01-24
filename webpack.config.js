const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    // vendors: [],
    index: path.resolve(__dirname, "./src/image-ai/index.ts"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname + "dist"),
    publicPath: "/",
    clean: true,
  },
  devServer: {
    static: "./dist",
    // hot: true,
    // compress: true,
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      chunks: ["index"],
      title: "tensorflow",
    }),
    new MiniCssExtractPlugin(),
  ],
};
