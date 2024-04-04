const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');
const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:3000/",
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  // 모듈 및 플러그인 설정은 유지
  module: {
    // 규칙 설정 유지
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "StudentApp1",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./StudentForm": "./src/components/StudentForm",
      },
      shared: {
        ...deps,
        react: { singleton: true, requiredVersion: deps.react },
        "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv()
  ],
});
