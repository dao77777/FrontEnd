const { resolve } = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

process.env.NODE_ENV = "development";

const commonCssLoader = [
  // 提取css
  MiniCssExtractPlugin.loader,
  // 加载css
  "css-loader",
  // 兼容css
  {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: [
          [
            "postcss-preset-env",
            {

            }
          ]
        ]
      },
    }
  }
]

module.exports = {
  // 入口文件
  entry: ["./src/index.js", "./public/index.html"],
  // 将node_modules单独打包成一个js文件
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  // 输出位置
  output: {
    // 输出文件名
    filename: "static/js/[name].[contenthash:10].js",
    // 输出路径
    path: resolve(__dirname, "build"),
    // 是否打包时先清空文件夹
    clean: true
  },
  // loader配置
  module: {
    rules: [
      {
        oneOf: [
          // // 语法检查
          // {
          //   test: /\.js$/,
          //   exclude: /node_modules/,
          //   loader: "eslint-loader",
          //   options: {}
          // },
          // 兼容js
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              // 多线程打包, 线程启动大概为600ms, 线程通信也有开销, 只有工作消耗时间比较长才需要多进程打包
              {
                loader: "thread-loader",
                options: {
                  workders: 2
                }
              },
              {
                loader: "babel-loader",
                options: {
                  // 预设: 指示babel怎么样做兼容性处理
                  presets: [
                    [
                      '@babel/preset-env',
                      {
                        // 按需加载
                        useBuiltIns: "usage",
                        // 指定core-js版本
                        corejs: {
                          version: 3
                        },
                        // 指定兼容性做到哪个版本浏览器
                        targets: {
                          chrome: "60",
                          firefox: "60",
                          ie: "9",
                          safari: "10",
                          edge: "17"
                        }
                      }
                    ]
                  ],
                  cacheDirectory: true
                }
              }
            ]
          },
          // 加载css
          {
            test: /\.css$/,
            use: [...commonCssLoader]
          },
          {
            test: /\.less$/,
            use: [...commonCssLoader, "less-loader"]
          },
          // 加载media
          {
            test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
          // 加载数据
          {
            test: /\.(csv|tsv)$/i,
            use: ['csv-loader'],
          },
          {
            test: /\.xml$/i,
            use: ['xml-loader'],
          },
          // 处理html中的img资源
          {
            test: /\.html$/,
            // 处理html文件的img图片(负责引入img)
            loader: "html-loader"
          },
          // // 图片资源处理
          // {
          //   test: /\.(jpg|png|gif)$/,
          //   loader: "url-loader",
          //   options: {
          //     limit: 8 * 1024,
          //     name: "[hash:10].[ext]",
          //     // 关闭es6模块化
          //     esModule: false,
          //     outputPath: "imgs"
          //   }
          // },

          // // 加载其他资源
          // {
          //   exclude: /\.(css|js|json|html|less|jpg|png|gif)$/,
          //   loader: "file-loader",
          //   options: {
          //     name: "[hash:10].[ext]",
          //     outputPath: "media"
          //   }
          // }
        ]
      }
    ]
  },
  // plugins配置
  plugins: [
    // 自动创建html文件并引入js
    new HTMLWebpackPlugin({
      // 模板指定
      template: "./public/index.html",
      // 压缩处理
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true
      }
    }),
    // 提取css
    new MiniCssExtractPlugin({
      filename: "static/css/[contenthash:10].css"
    }),
    // 压缩css
    new OptimizeCssAssetsWebpackPlugin(),
    // // 语法检查
    // new EslintWebpackPlugin({
    //   exclude: "node_modules",
    //   fix: true
    // })
  ],
  // 模式
  mode: "development",
  devServer: {
    // 服务器位置
    static: {
      directory: resolve(__dirname, "build")
    },
    // 是否压缩
    compress: true,
    // 端口
    port: 3000,
    // 是否自动打开页面
    open: true,
    // 开启HMR功能
    hot: true
  },
  devtool: "source-map",
  // 不将jQuery这个node_modules中的包打包进来, 自己在html文件中引入jQuery的cdn链接即可
  externals: {
    jquery: "jQuery"
  }
}