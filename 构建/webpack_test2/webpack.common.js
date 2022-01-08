const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const yaml = require("yaml");
const toml = require("toml");
const json5 = require("json5");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[contenthash:10][ext]",
    clean: true,
  },
  resolve: {
    alias: {
      "@": __dirname,
      "#": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },
  module: {
    rules: [
      { test: /\.html$/, use: "html-loader" },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"] },
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: "babel-loader",
      },
      { test: /\.(ts|tsx)$/, exclude: /node_modules/, use: "ts-loader" },
      { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|otf|ttf)$/, type: "asset/resource" },
      { test: /\.(csv|tsv)$/, use: "csv-loader" },
      { test: /\.xml$/, use: "xml-loader" },
      { test: /\.yaml$/, type: "json", parser: { parse: yaml.parse } },
      { test: /\.toml$/, type: "json", parser: { parse: toml.parse } },
      { test: /\.json5$/, type: "json", parser: { parse: json5.parse } },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[contenthash:10].css",
    }),
  ],
  optimization: {
    moduleIds: "deterministic",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    runtimeChunk: "single",
  },
}