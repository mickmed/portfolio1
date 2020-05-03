const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  mode: "production",

  output: {
    filename: "[name].[contentHash].js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: "/",
  },
}
