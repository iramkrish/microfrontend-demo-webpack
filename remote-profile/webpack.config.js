const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: path.resolve(__dirname, "src/index.jsx"),
  devServer: {
    port: 3001,
    headers: { "Access-Control-Allow-Origin": "*" },
    static: path.resolve(__dirname, "public"),
  },
  output: { publicPath: "auto" },
  resolve: { extensions: [".js", ".jsx"] },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "profile_remote",
      filename: "remoteEntry.js",
      exposes: { "./Profile": "./src/Profile.jsx" },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
