const path = require("path");
const HtmlWepackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    filename: "scripts/[name].js",
  },
  plugins: [
    new HtmlWepackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
      inject: "head",
    }),
  ],
  performance: {
    hints: false,
  },
  /* 
  eval 每个module会封装到eval里包裹起来执行, 并且会在末尾追加注释//@sourceURL
  source-map 生成一个SourceMap文件
  hidden-source-map 和source-map一样, 但不会在bundle末尾追加注释
  inline-source-map 生成一个DataUrl形式的SourceMap文件
  eval-source-map 每个module会通过eval()来执行, 并且生成一个DataUrl形式的SourceMap
  cheap-source-map 生成一个没有列信息的SourceMaps文件, 不包含loader的sourcemap
  cheap-module-source-map 生成一个没有列信息的SourceMaps文件, 同时loader的sourcemap也被简化为只包含对应行
  */
  devtool: false,
  devServer: {
    static: path.resolve(__dirname, "dist"),
    // compress: false,
    // host: "0.0.0.0",
    // port: 3000,
    headers: {
      "X-Access-Token": "dao77777",
    },
    // proxy: {
    //   "api": "http://localhost:9000",
    // },
    // https: true,
    http2: true,
    historyApiFallback: true,
    // liveReload: false,
    hot: true,
  },
  mode: "development",
}