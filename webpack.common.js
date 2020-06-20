const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
//   devtool: "none",
  devServer: {
    // contentBase: "./dist",
    // open: true
    historyApiFallback: true,
  },

  entry: {main:"./src/index.js", 
  // 'src/css/waveSVG.css':'src/css/waveSVG.css'
},
  
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
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
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
