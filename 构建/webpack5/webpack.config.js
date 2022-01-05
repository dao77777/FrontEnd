const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const yaml = require("yaml");
const toml = require("toml");
const json5 = require("json5");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (env) => {
    return {
        entry: path.resolve(__dirname, "src/index.js"),
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].[contenthash:10].js",
            assetModuleFilename: "assets/[contenthash:10][ext]",
            clean: true,
        },
        resolve: {
            alias: {
                "@": __dirname,
                "#": path.resolve(__dirname, "src"),
            },
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        module: {
            rules: [
                { test: /\.html$/, use: "html-loader" },
                { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                            plugins: ["@babel/plugin-transform-runtime"],
                        },
                    },
                },
                { test: /\.(ts|tsx)$/, exclude: /node_modules/, use: "ts-loader" },
                { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|otf)$/, type: "asset/resource" },
                { test: /\.(csv|tsv)$/, use: "csv-loader" },
                { test: /\.xml$/, use: "xml-loader" },
                { test: /\.yaml$/, type: "json", parser: { parse: yaml.parse } },
                { test: /\.toml$/, type: "json", parser: { parse: toml.parse } },
                { test: /\.json5$/, type: "json", parser: { parse: json5.parse } },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public/index.html"),
                minify: {
                    collapseWhitespace: true,
                    removeComments: true,
                },
            }),
            new MiniCssExtractPlugin({
                filename: "styles/[contenthash:10].css",
            }),
            env.visulize ? new BundleAnalyzerPlugin() : () => {},
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
            minimizer: [
                new CssMinimizerPlugin(),
            ],
        },
        devtool: env.development ? "source-map" : "eval-cheap-source-map",
        devServer: {
            static: path.resolve(__dirname, "dist"),
            hot: true,
        },
        mode: env.development ? "development" : "production",
    }
}