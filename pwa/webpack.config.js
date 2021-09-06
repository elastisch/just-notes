const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'pwa.css'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "pwa.js",
  },
  devServer: {
    static: path.join(__dirname, "build"),
    compress: true,
    port: 3000,
    allowedHosts: ".gitpod.io"
  },
  mode: "development",
  stats: {
    children: true
  }
};

module.exports = config;