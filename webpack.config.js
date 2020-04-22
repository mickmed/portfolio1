const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {

  devServer: {
    // contentBase: "./dist",
    // open: true
    historyApiFallback: true,
  },
  // devtool: 'source-map',
  entry: ['babel-polyfill', "./src/app.js"],
  // {
  //   'bundle-home': './src/entry-home.js',
  // 'bundle-category': './src/category.js',
  // 'bundle-product': './entry-product.js',
  // 'bundle-checkout': './entry-checkout.js',
  // },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              // {
              //   targets: {
              //     esmodules: true,
              //   },
              // },
            ],
          },
        },
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
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Mick Roth",
    }),
  ],
}
