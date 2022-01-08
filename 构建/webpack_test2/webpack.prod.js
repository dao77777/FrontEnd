const path = require("path");
const HtmlWepackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (env) => {
  return {
    output: {
      filename: "scripts/[name].[contenthash:10].js",
    },
    externalsType: "script",
    externals: {
      echarts: [
        "https://cdn.jsdelivr.net/npm/echarts@5.2.2/dist/echarts.min.js",
        "echarts",
      ],
    },
    plugins: [
      new HtmlWepackPlugin({
        template: path.resolve(__dirname, "public/index.html"),
        filename: "index.html",
        inject: "head",
        minify: {
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      env.visulize ? new BundleAnalyzerPlugin() : () => {},
    ],
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin(),
      ]
    },
    mode: "production",
  }
}