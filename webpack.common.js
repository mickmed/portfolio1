const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
//   devtool: "none",
//   devServer: {
//     // contentBase: "./dist",
//     // open: true
//     historyApiFallback: true,
//   },

  entry: "./src/index.js",
  
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: [
      //         "@babel/preset-env",
      //         // {
      //         //   targets: {
      //         //     esmodules: true,
      //         //   },
      //         // },
      //       ],
      //     },
      //   },
      // }, 
      {
        test: /\.html$/,
        use: ["html-loader"]
      },

      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "/src/img",
            },
          },
        ],
      },
    ],
  },
  
}
