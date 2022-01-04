const path = require("path");
const toml = require("toml");
const yaml = require("yamljs");
const json5 = require("json5");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env) => {
  console.log(env);
  return {
    entry: "./src/index.js",
    output: {
      filename: "[name].[contenthash:10].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    module: {
      rules: [
        // js
        // html
        {
          test: /\.html$/i,
          use: ["html-loader"],
        },
        // css
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        // url: png, svg, jpg, jpeg, gif, woff, woff2, eot, ttf, otf
        {
          test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
        // data: cxv, tsv, xml, json, toml, yaml, json5
        {
          test: /\.(csv|tsv)$/i,
          use: ["csv-loader"],
        },
        {
          test: /\.xml$/i,
          use: ["xml-loader"],
        },
        {
          test: /\.toml$/i,
          type: "json",
          parser: {
            parse: toml.parse,
          },
        },
        {
          test: /\.yaml$/i,
          type: "json",
          parser: {
            parse: yaml.parse,
          },
        },
        {
          test: /\.json5$/i,
          type: "json",
          parser: {
            parse: json5.parse,
          },
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        minify: {
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      // new BundleAnalyzerPlugin(),
    ],
    devtool: "inline-source-map",
    devServer: {
      static: "./dist"
    },
    optimization: {
      moduleIds: "deterministic",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\\/]node_modules[\\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
      runtimeChunk: "single",
    },
    mode: "development",
  }
};