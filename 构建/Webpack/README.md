> **创建日期:** 2021/11/11
> 
> **更新日期:** 2021/11/11
> 
> **作者:** 道五七


- 通过js的import 把各个资源形成一张依赖图, 再将这张图的所有资源进行编译, 然后将编译的结果进行一个打包形成bundle

# 五个核心概念
- Entry: 打包的js文件入口
- Output: 打包后的bundle的输出位置
- Loader: 让Webpack能够处理非js或json文件
- Plugins: 插件
- Mode
  - development
    - 将process.env.NODE_ENV值设为development
    - 启用
      - NamedChunksPlugin
      - NamedModulesPlugin
    - 方便代码本地调试
  - production
    - 将process.env.NODE_ENV值设为production
    - 启用
      - FlagDependencyUsagePlugin
      - FlagIncludedChunksPlugin
      - ModuleConcatenationPlugin
      - NoEmitOnErrorsPlugin
      - OccurrenceOrderPlugin
      - SideEffectsFlagPlugin
      - UglifyJsPlugin
    - 优化打包后的代码, 方便线上运行
# CLI
- 无配置文件打包: `webpack <src> -o <dst> --mode=[development|production]`
- 有配置文件打包: `webpack [--config <配置文件>]`
- 开发服务器: `webpack serve`
# 配置
- 配置文件: webpack.config.js
# 安装
- `npm i webpack webpack-cli webpack-dev-server -D`
- `npm i less less-loader css-loader mini-css-extract-plugin postcss-loader postcss-preset-env optimize-css-assets-webpack-plugin -D`
- `npm i html-loader -D`
- `npm i csv-loader xml-loader -D`
- `npm i html-webpack-plugin -D`
- `npm i eslint-webpack-plugin eslint eslint-config-airbnb-base eslint-plugin-import -D`
- `npm i babel-loader @babel/core @bebel/preset-env core-js -D`
- `npm i thread-loader -D`

- 打包入口
- 打包出口
- 代码分割
- 资源处理
  - js
    - 语法检查
    - 兼容
    - 压缩
    - 打包出口, 打包名称(hash, chunkhash, contenthash)
  - css
    - 编译: less, stylus, scss
    - 兼容: 各个浏览器的兼容
    - 压缩: 压缩优化
    - 打包出口, 打包名称
  - media
    - 图像: png, svg, jpg, jpeg, gif
    - 字体: woff, woff2, eot, ttf, otf
    - 打包出口, 打包名称
  - data
    - json, toml, yaml, json5, csv, xml
  - html
    - 模板指定
    - 压缩

.browserslistrc: 浏览器兼容设置
.eslintrc.js: 语法检查设置
babel.config.js
webpack.config.js

- 开发环境
  - 构建速度: HMR, babel缓存, oneOf, thread-loader
  - 调试信息: SourceMap, eval-source-map或eval-cheap-module-source-map
  - 语法检查: vscode自带语法检查, eslint构建时语法检查
- 生产环境
  - http连接次数
  - 资源大小: 压缩, tree shaking
  - 资源兼容性: css兼容性browserslist, js兼容性babel
  - 调试信息: SourceMap, source-map或cheap-module-source-map
  - 缓存
    - 缓存策略
      - 强缓存, 协商缓存
    - 缓存位置
      - disk cache
      - memory cache
      - service workder cache
      - push cache
  - 按需加载
    - js按需加载: code split(通过ES11按需导入语法import)
  - CDN: 用external排除掉某些第三方库, 在html中添加cdn即可

# webpack性能优化
- 开发环境性能优化
  - 优化打包构建速度: HMR热模块替换
    - css可HMR
    - js需要判断module.hot再module.hot.accept回调来支持HMR
    - html不可HMR
  - 优化代码调试: Source Map, 提供源代码到构建代码映射的技术
    - 普通: 错误信息, 源码
    - hidden: 错误信息, 隐藏源码
    - nosources: 隐藏错误信息, 隐藏源码
    - cheap: 错误信息只精确到行, 源码
    - module: 会将loader的SourceMap加进来
    - inline: 内联, 错误信息, 源码, 单SourceMap
    - eval: 内联, 错误信息, 源码, 多SourceMap
    - 速度快(eval>inline>cheap>...)
      - eval-cheap-source-map
      - eval-source-map
    - 调试更友好
      - source-map
      - cheap-module-source-map
      - cheap-source-map
- 生产环境性能优化
  - 优化打包构建速度
  - 优化代码运行的性能

- Nginx做服务器
- index.html协商缓存
- 其他静态资源强缓存
- 生产环境上线解决强缓存问题: 静态资源的名称含hash值即可
- 静态资源部署到CDN, 通过Nginx反向代理


- 浏览器主进程
- 第三方插件进程
- 服务进程: Network Service, Storage Service, Audio Service
- GPU进程
- 渲染进程
  - GUI渲染线程: DOM树, RENDER树, 布局, 绘制, 合成
  - JS引擎线程: 与GUI线程互斥, 只有一个JS线程, 可用WebWoker开启子线程, 此线程受主线程控制, 不能操作DOM, 通过postMessageAPI与JS线程通信
  - 异步线程: 事件触发线程, 定时触发器线程, 异步http请求线程

WebWoker多线程
SharedWorker

- 工程化: grunt, gulp, rollup, webpack, vite
- 构建
  - 入口, 出口
  - 解析: 别名, 后缀省略
  - loader: js/ts, html, css/sass/less, 可url引入文件->url/dataURL, data
    - css兼容性问题用postCss, 内嵌css, 外置css, css-extract-plugin
    - js兼容性问题, babel, core-js
  - plugin: html-webpack-plugin
  - 优化
    - 开发优化: 热模块替换
    - 代码压缩
    - 按需加载: webpack代码分割 + 动态import语法
    - 缓存
    - 自身: 算法, 资源大小(压缩混淆), 合并http短连接, script标签的async和defer属性, preload & prefetch, dns-prefetch, 重绘 & 重流
    - 并发: 大数据并发, cdn网络请求并发
    - 缓存: 强缓存, 协商缓存(文件需content-hash命名)
    - 按需: 路由懒加载, 图片懒加载, 数据懒加载
  - source-map
  - 模式
  - 服务器配置
- 语法检查: eslint