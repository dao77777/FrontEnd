- [编译器](#编译器)
  - [组成](#组成)
    - [ECMAScript](#ecmascript)
    - [DOM](#dom)
    - [BOM](#bom)
  - [引入浏览器](#引入浏览器)
  - [垃圾回收机制](#垃圾回收机制)
- [语句](#语句)
  - [严格模式](#严格模式)
  - [注释](#注释)
  - [声明](#声明)
  - [模块](#模块)
  - [赋值](#赋值)
  - [流程控制](#流程控制)
  - [解构](#解构)
  - [异步](#异步)
- [表达式](#表达式)
- [数据类型](#数据类型)
- [全局](#全局)
  - [属性](#属性)
    - [BOM](#bom-1)
  - [函数](#函数)
  - [类](#类)
    - [Boolean](#boolean)
    - [Number](#number)
    - [BigInt](#bigint)
    - [String](#string)
    - [Symbol](#symbol)
    - [Object](#object)
    - [Proxy](#proxy)
    - [Reflect](#reflect)
    - [Iterable接口](#iterable接口)
    - [Iterator接口](#iterator接口)
    - [Generator](#generator)
    - [Set](#set)
    - [Map](#map)
    - [Array](#array)
    - [定型数组](#定型数组)
      - [ArrayBuffer](#arraybuffer)
      - [DataView](#dataview)
      - [元素类型Array](#元素类型array)
    - [Promise](#promise)
    - [Date](#date)
    - [RegExp](#regexp)
    - [Math](#math)
    - [字符编解码](#字符编解码)
      - [TextEncoder](#textencoder)
      - [TextEncoderStream](#textencoderstream)
      - [TextDecodeer](#textdecodeer)
      - [TextDecoderStream](#textdecoderstream)
    - [文件编解码](#文件编解码)
      - [File](#file)
      - [FileReader](#filereader)
      - [FileReaderSync](#filereadersync)
      - [Blob](#blob)
    - [序列化与反序列化](#序列化与反序列化)
      - [JSON](#json)
      - [FormData](#formdata)
      - [URL](#url)
      - [URLSearchParams](#urlsearchparams)
    - [网络](#网络)
      - [XMLHttpRequest](#xmlhttprequest)
      - [FetchAPI](#fetchapi)
      - [Headers](#headers)
      - [Request](#request)
      - [Response](#response)
      - [WebSocket](#websocket)
    - [本地](#本地)
      - [Cookie](#cookie)
      - [Storage](#storage)
    - [DOM](#dom-1)
      - [EventTarget](#eventtarget)
      - [Node](#node)
      - [NodeList](#nodelist)
      - [HTMLCollection](#htmlcollection)
      - [Document](#document)
      - [DocumentFragment](#documentfragment)
      - [Element](#element)
      - [<form>](#form)
      - [表单](#表单)
      - [多媒体](#多媒体)
      - [Text](#text)
      - [Comment](#comment)
      - [CDATASection](#cdatasection)
      - [DocumentType](#documenttype)
      - [Attr](#attr)
      - [MutationObserver](#mutationobserver)
      - [IntersectionObserver](#intersectionobserver)
      - [CanvasRenderingContext2D](#canvasrenderingcontext2d)
- [NodeJs](#nodejs)
  - [脚本](#脚本)
  - [package.json](#packagejson)
  - [属性](#属性-1)
  - [类](#类-1)
    - [EventEmitter](#eventemitter)
    - [Buffer](#buffer)
  - [模块](#模块-1)
    - [http](#http)
    - [fs](#fs)
    - [path](#path)
- [库](#库)
  - [axios](#axios)
  - [koa](#koa)
  - [react](#react)
- [环境](#环境)
  - [babel](#babel)
  - [webpack](#webpack)
- [抽象](#抽象)
  - [UI](#ui)
    - [](#)

# 编译器
## 组成
### ECMAScript

- 语言标准
   - 语法
   - 类型
   - 语句
   - 关键字
   - 保留字
   - 操作符
   - 全局对象
- 版本
   - ES1
   - ES2
   - ES3: 第 3 版第一次真正对这个标准进行更新，更新了字符串处理、错误定义和数值输出。此外还增加了对正则表达式、新的控制语句、try/catch 异常处理的支持，以及为了更好地让标准国际化所做的少量修改。对很多人来说，这标志着 ECMAScript 作为一门真正的编程语言的时代终于到来了
   - ES4: 第 4 版包括强类型变量、新语句和数据结构、真正的类和经典的继承，以及操作数据的新手段
   - ES5: 新功能包括原生的解析和序列化 JSON 数据的 JSON 对象、方便继承和高级属性定义的方法，以及新的增强 ECMAScript 引擎解释和执行代码能力的严格模式
   - ES6: 这一版包 含了大概这个规范有史以来最重要的一批增强特性。ES6 正式支持了类、模块、迭代器、生成器、箭头 函数、期约、反射、代理和众多新的数据类型
   - ES7: 这次修订只包含少量语法层面的 增强，如 Array.prototype.includes 和指数操作符
   - ES8: 这一版主要增加了异步函数（async/ await）、SharedArrayBuffer 及 Atomics API，以及 Object.values()/Object.entries()/Object. getOwnPropertyDescriptors()和字符串填充方法，另外明确支持对象字面量最后的逗号
   - ES9: 这次修订包括异步迭代、剩余和 扩展属性、一组新的正则表达式特性、Promise finally()，以及模板字面量修订
   - ES10: 这次修订增加了 Array.prototype. flat()/flatMap()、String.prototype.trimStart()/trimEnd()、Object.fromEntries()方 法，以及 Symbol.prototype.description 属性，明确定义了 Function.prototype.toString() 的返回值并固定了 Array.prototype.sort()的顺序。另外，这次修订解决了与 JSON 字符串兼容的 问题，并定义了 catch 子句的可选绑定
### DOM

- 操控浏览器显示页面的一组API, 也即操控HTML与CSS
   - 删除、添加、替换、修改节点
   - DOM 视图: 描述追踪文档不同视图的接口
   - DOM 事件: 描述事件及事件处理的接口
   - DOM 样式: 描述处理元素 CSS 样式的接口
   - DOM 遍历和范围: 描述遍历和操作 DOM 树的接口
   - DOM 验证
   - Mutation Events和Mutation Observers
- HTML中的DOM: DOM core和DOM HTML, 前身是DHTML
- XML
   - HTML
   - SVG: 可伸缩矢量图
   - MathML: 数学标记语言
   - SMIL: 同步多媒体集成语言
### BOM

- 操控浏览器显示页面之外的一组API
   - 弹出新浏览器窗口的能力
   - 移动、缩放和关闭浏览器窗口的能力
   - navigator对象, 提供关于浏览器的详尽信息
   - location对象, 提供浏览器加载页面的详尽信息
   - screen对象, 提供关于用户屏幕分辨率的详尽信息
   - performance对象, 提供浏览器内存占用、导航行为和时间统计的详尽信息
   - 对cookie的支持
   - 其他自定义对象, 如XMLHttpRequest和IE的ActiveXObject
## 引入浏览器

- <script>元素引入
   - 属性
      - src(常): 外部文件引入
      - type(常): application/javascript或module, 脚本的内容类型, 前者表示普通js脚本, 后者表示支持模块, 脚本中可使用import, export关键字
      - async: 异步执行脚本文件, 只适用于外部脚本, 异步脚本不应该在加载期间修改DOM
      - defer: 脚本的执行延迟到文档被完全解析和显示后执行, 只对外部脚本有效
      - charset: src属性指定的代码字符集
      - crossorigin: anonymous和use-credentials俩值, 前者表示请求不必设置凭据标识, 后者表示出站请求会包含凭据
      - integrity: 允许比对接收到的资源和指定的加密签名以验证资源完整性
   - 方式
      - 行内脚本: <script></script>中书写代码
      - 外部脚本: 提供src属性, 加载外部脚本
      - 动态加载脚本: ![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428072823-0b2ead3c-44bc-4fcb-ba1e-f836d0c798ad.png#clientId=udf2dd84a-6d0f-4&from=paste&height=468&id=ue3919d65&margin=%5Bobject%20Object%5D&originHeight=468&originWidth=805&originalType=url&ratio=1&status=done&style=none&taskId=uee4f4bcc-71b0-4bec-b456-6c63016fe15&width=805)
   - 放置: 最佳放置不在head头而在body元素中的尾部
- <noscript>元素在浏览器不支持脚本或对脚本的支持关闭情况下显示器内容
## 垃圾回收机制

- 垃圾回收: 标记清理和引用计数
   - 解除引用: 变量名 = null
# 语句

- 分隔
   - 手动以分号结尾或由解释器自动判断
   - 最佳实践: 手动分号结尾
- 关键字
   - break do in typeof case else instanceof var catch export new void class extends return while const finally super with continue for switch yield debugger function this default if throw delete import try  
## 严格模式

- 脚本或函数首行添加"use strict";
## 注释

- 单行: //
- 多行: /* ... ... */
## 声明

- 标识符
   - 第一个字符必须是一个字母、下划线（_）或美元符号（$）
   - 剩下的其他字符可以是字母、下划线、美元符号或数字
   - 区分大小写
   - 不能是关键字
   - 最佳实践: 驼峰命名法
- 变量声明
   - 声明
      - 变量名 = 变量值: 全局作用域
      - var 变量名 = 变量值
         - 函数作用域
         - 声明提升
         - 重复声明
         - 全局声明变成window的属性
      - let 变量名 = 变量值
         - 块级作用域
         - 暂时性死区
         - 无重复声明
         - 全局声明不会变成window的属性
      - const 变量名 = 变量值
         - 块级作用域
         - 暂时性死区
         - 无重复声明
         - 全局声明不会变成window的属性
         - 只读
      - 最佳实践: 不使用var, const优先, let次之
- 函数声明
   - 声明
      - 普通函数: function 函数名(参数...) {... ...}
      - 表达式声明: function (参数...) {... ...}
      - 匿名函数: (参数...) => {... ...}, 参数 => {... ...}, 参数 => 单语句或表达式
      - 构造函数: new Function (参数..., 函数体)
   - 参数
      - 所有参数都是传值
      - 匿名参数: 函数体内部用arguments类数组对象接收
      - 命名参数
      - 默认值参数
      - 剩余参数
   - 函数体
      - arguments
      - this
      - new.target: 用于检测函数是否使用new关键字调用, 若不是值为undefined, 若是值为将被调用的构造函数
   - 调用
      - 普通调用: 函数名()
      - 标签函数: 函数名`... ...`![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428072558-0fa884c1-2de9-4201-b7a8-1edeb8137f94.png#clientId=udf2dd84a-6d0f-4&from=paste&height=342&id=ud2b7bdf8&margin=%5Bobject%20Object%5D&originHeight=342&originWidth=629&originalType=url&ratio=1&status=done&style=none&taskId=u4933a8ca-3766-4f73-9a00-1c8e7cc8c72&width=629)
   - 尾调用优化
      - 代码在严格模式下执行
      - 外部函数的返回值是对尾调用函数的调用
      - 尾调用函数返回后不需要执行额外的逻辑
      - 尾调用函数不是引用外部函数作用域中自由变量的闭包
   - 实例
      - name: 返回函数名, 匿名函数返回空字符串, 构造函数返回anonymous, 绑定了对象名字会有bound前缀, 获取函数, 设置函数会有get, set前缀
      - length: 函数定义的命名参数个数
      - prototype: 函数的原型对象
      - bind(绑定对象): 绑定函数到指定对象, 并返回一个新的函数实例
      - apply(调用对象, 参数数组), call(调用对象, 参数...): 以指定对象和参数调用该函数
      - valueOf(), toString(), toLocaleString(): 前者返回函数自身, 后两者返回函数体
   - 最佳实践: 是函数要么返回值，要么不返回值。只在某个条件下返回值的函数会带来麻烦，尤其是调试时
- 类声明
   - 声明
      - 普通声明: class 类名 {... ...}
      - 表达式声明: 类名 = class {... ...}
   - 构成
      - 构造函数
      - 原型方法
      - 获取函数, 设置函数
      - 静态方法
## 模块

- 浏览器规范: AMD(Require.js) CMD(Sea.js)
- 服务器端规范: common.js
   - common.js
      - 引入: require(模块名 | js文件 | 文件夹(含index.js件或指定了main字段的package.json文件))
      - 暴露: module.exports=模块对象
- es6规范: module规范
   - module规范
      - 引入
         - 按需引入: import {变量} from 模块 | js文件 | 文件夹
         - 直接导入: import 自定义模块名 from 模块 | js文件 | 文件夹
         - 混合引入: import 自定义模块名, {变量}  from 模块 | js文件 | 文件夹
         - 执行引入: import 模块 | js文件 | 文件夹
      - 暴露
         - 按需导出: export {变量} | export 声明
         - 直接导出: export default 模块对象
- 按需引入: `import(<路径>)`
## 赋值

- 赋值符号: =, +=, -=, *=, /=, %=, <<=, >>=, >>>=
- 赋值方式
   - 单变量赋值: 变量名 = 变量值
   - 多变量赋值 ![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428072562-e4ef400c-b1ed-4e09-80eb-ac9d31f6dd6b.png#clientId=udf2dd84a-6d0f-4&from=paste&height=66&id=udcb6db14&margin=%5Bobject%20Object%5D&originHeight=66&originWidth=188&originalType=url&ratio=1&status=done&style=none&taskId=u434882c2-8417-4826-a714-b69b93ae347&width=188)
## 流程控制

- 条件分支
   - if (布尔值) {... ...}
   - switch (值) { case 值: ... ... break;... default: ... ... }
- 循环
   - do {... ...} white (布尔值)
   - while (布尔值)
   - for (初始化语句; 条件判断表达式; 自增自减表达式) {.. ...}
   - for (const 变量名 in 对象) {... ...}: 迭代对象的可枚举属性的键
   - for (const 变量名 of 可迭代对象): 迭代可迭代对象
   - 标签语句: ![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428072816-901064a2-be7d-4d9d-8666-d5e345311303.png#clientId=udf2dd84a-6d0f-4&from=paste&height=225&id=ucbeab51c&margin=%5Bobject%20Object%5D&originHeight=225&originWidth=729&originalType=url&ratio=1&status=done&style=none&taskId=uaf553cf7-b531-44ab-8891-6b9c5538776&width=729)![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428072538-ce1519a5-479e-43a5-a5a5-366792904761.png#clientId=udf2dd84a-6d0f-4&from=paste&height=216&id=ue7eac2c4&margin=%5Bobject%20Object%5D&originHeight=216&originWidth=355&originalType=url&ratio=1&status=done&style=none&taskId=u02ace32c-12b5-48a7-a60f-7d2b4f15add&width=355)
   - break
   - continue
## 解构

- 解构赋值
   - [变量...] = 可迭代对象
   - {键...} = {键值对...}
   - 函数的参数里解构赋值: 函数名(...可迭代对象)
- 解构
   - [...可迭代对象]
   - {...对象}
## 异步

- async
- await
# 表达式

- typeof 变量名: 判断变量类型
- 对象 instanceof 类: 判断对象是否是类的实例
- 条件表达式: ... ? ... : ...
- 四则运算: ++, --, +, -, *, /, %, **
- 位运算: ~, &, |, ^, <<, >>, >>>
- 布尔运算: !, &&, ||
- 关系运算: >, <, >=, <=, ==, ===, !==, !===![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428074808-b4b11339-9355-4e4a-9390-c4ce699e9a28.png#clientId=udf2dd84a-6d0f-4&from=paste&height=331&id=u40c04a8f&margin=%5Bobject%20Object%5D&originHeight=331&originWidth=695&originalType=url&ratio=1&status=done&style=none&taskId=u0b193919-92c5-44ff-a292-2c8269d1014&width=695)
# 数据类型

- 数据类型
   - undefined: 未声明的变量
   - boolean: 布尔
   - number: 数值
   - string: 字符串
   - function: 函数
   - symbol
   - object: 对象
      - null: 空对象
   - 最佳实践: 声明变量时一定要初始化一个非undefined值, 这样就能将未声明和声明的变量区分开
- 类型转换
   - 转boolean: 调用Boolean(var)方法
      - undefined->false
      - number
         - 0, NaN->false
         - 其他->true
      - string
         - 非空字符串->true
         - ""->false
      - function->true
      - object
         - null->false
         - 其他->true
   - 转number: 调用Number(var)方法
      - undefined->NaN
      - boolean
         - true->1
         - false->0
      - string
         - "", "  ", "    "->0
         - 字符串本身代表数值字面量->本身
         - 含其他字符->NaN
      - function->NaN
      - object
         - null->0
         - 其他->调用自身valueOf()方法, 如果转换结果不是数值，则调用 toString()方法，再按照转换字符串的规则转换
   - 转string: 调用String(var)
      - undefined->"undefined"
      - boolean
         - true->"true"
         - false->"false"
      - number->"number"
      - function->"代码"
      - object
         - null->"null"
         - 其他->调用自身toString()方法
# 全局
## 属性
### BOM

- window
   - top, parent, self, opener, closed: 顶层窗口, 父窗口, 本身窗口, 打开自己的窗口, 窗口是否关闭
   - screenTop, screenLeft: 相对屏幕位置
   - innerWidth, innerHeight, outerWidth, outerHeight: 浏览器视口大小和自身大小
   - scrollX, scrolly: 浏览器滚动位置
   - devicePixelRation: 物理像素与逻辑像素之间的缩放系数
   - open(URL, 目标窗口名[, 特性字符串]), close(): 打开或关闭窗口![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428074729-1c55446e-8f0f-436b-ab5a-ccdb531feecf.png#clientId=udf2dd84a-6d0f-4&from=paste&height=714&id=u2f5ac6da&margin=%5Bobject%20Object%5D&originHeight=714&originWidth=991&originalType=url&ratio=1&status=done&style=none&taskId=u84f54617-b0e2-47ec-bcd3-763bd7bad76&width=991)![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428074800-0021c529-5cbe-4d70-961b-b2073a36641a.png#clientId=udf2dd84a-6d0f-4&from=paste&height=760&id=u5fcc11be&margin=%5Bobject%20Object%5D&originHeight=760&originWidth=890&originalType=url&ratio=1&status=done&style=none&taskId=u6c52ae8d-bdb9-4934-924d-961d46b976b&width=890)
   - moveTo(x坐标, y坐标), moveBy(x位移, y位移): 设置浏览器位置
   - resizeTo(宽, 高), resizeBy(宽增量, 高增量): 设置浏览器宽高
   - scrollTo(x滚动位置, y滚动位置), scrollBy(x滚动距离, y滚动巨鹿): 设置浏览器滚动位置![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428078036-772748c6-a500-4086-81f4-355acdb75261.png#clientId=udf2dd84a-6d0f-4&from=paste&height=733&id=u703b94be&margin=%5Bobject%20Object%5D&originHeight=733&originWidth=892&originalType=url&ratio=1&status=done&style=none&taskId=uf8b1fe4a-b7c5-4553-8e63-40bac8920fc&width=892)
   - alert(), confirm(), prompt(), find(), print(): 系统对话框
   - addEventListener(事件名, 回调函数)
      - popstate: 历史记录后退时触发该事件
   - document
   - location![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428076660-446c019d-2fa0-4c4f-8adb-a954839326da.png#clientId=udf2dd84a-6d0f-4&from=paste&height=496&id=u5b500b28&margin=%5Bobject%20Object%5D&originHeight=496&originWidth=899&originalType=url&ratio=1&status=done&style=none&taskId=u77ceb790-75f4-4367-987b-ae3b685e9fd&width=899)
      - href: 完整URL
      - origin: URL源地址
      - protocol: 协议
      - username: 用户名
      - password: 密码
      - host: 服务器名及端口号
      - hostname: 服务器名
      - port: 端口号
      - pathname: 路径名
      - search: 查询字符串
      - hash: 锚点
      - assign(URL): 修改location的URL, 并导航到新的URL, 并添加历史记录
      - replace(URL): assign(URL), 但不添加历史记录
      - reload([true]): 重新加载页面, 若添加true则不重缓存加载, 从服务器加载
   - navigator![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428077381-afb1f30c-b6e8-4bab-a448-29eee195fd2a.png#clientId=udf2dd84a-6d0f-4&from=paste&height=715&id=u75f0a8cc&margin=%5Bobject%20Object%5D&originHeight=715&originWidth=925&originalType=url&ratio=1&status=done&style=none&taskId=uff80c75f-bdd0-4f95-900c-b5ecebbe3eb&width=925)![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428077546-7119c3d6-9718-4ca0-a77f-932bb1748882.png#clientId=udf2dd84a-6d0f-4&from=paste&height=764&id=u7ac07393&margin=%5Bobject%20Object%5D&originHeight=764&originWidth=908&originalType=url&ratio=1&status=done&style=none&taskId=u7705c850-2ba7-4e55-98af-c177d68b5a6&width=908)
   - screen![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428077401-64ec9047-7609-4649-a5c2-acaae6fff039.png#clientId=udf2dd84a-6d0f-4&from=paste&height=363&id=uefeee933&margin=%5Bobject%20Object%5D&originHeight=363&originWidth=892&originalType=url&ratio=1&status=done&style=none&taskId=u5c88ff48-7d64-444c-a897-583aa8b6df5&width=892)
   - history
      - length: 历史记录条目数
      - state: 当前的状态对象
      - go(前进或后退步数), back(), forward: 前进或后退
      - pushState(状态对象, 标题, 相对路径): 更新URL并添加历史记录与状态对象
      - replaceState(状态对象, 标题): 更新当前的状态对象
## 函数

- 数字
   - isFinite(number): 是否Infinity
   - isNaN(number): 是否NaN
   - parseInt(string[, 数值格式]): 灵活地转换成整数
   - parseFloat(string): 灵活地转换成浮点数
- 字符串
   - encodeURI(待编码字符串), encodeURIComponent(待编码字符串), decodeURI(待解码字符串), decodeURIComponent(待解码字符串): 以URI方式编码指定字符串![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428078078-2c2e97a5-6447-4789-9d7c-0539245ec2c6.png#clientId=udf2dd84a-6d0f-4&from=paste&height=323&id=ud3494465&margin=%5Bobject%20Object%5D&originHeight=323&originWidth=737&originalType=url&ratio=1&status=done&style=none&taskId=u6b07b104-301c-4bdf-85a4-588ef7c8fb6&width=737)
   - atob(字符串), btoa(字符串): base64编解码, 只支持ascii码
- 异步
   - setTimeout(执行函数, 延迟时间)
   - clearTimeout(定时器)
   - setInterval()
   - clearInterval()
- 输出
   - console.log(变量)
   - console.dir(变量)
- eval(): 相当于一个解释器
## 类
### Boolean

- 构造
   - 字面量: true, false
   - 函数: Boolean(var)
   - 构造函数: new Boolean(var)
### Number

- 构造
   - 字面量
      - 十进制: 55
      - 八进制: 070
      - 十六进制: 0xA
      - 科学计数法: 3.125e7
      - 无穷大: Infinity
      - 非数: NaN
   - 函数: Number(var)
   - 构造函数: new Number(var)
- 静态
   - MIN_SAFE_INTEGER: 可表示的最小整数(-2 ** 53 + 1)
   - MAX_SAFE_INTEGER: 可表示的最大整数(2 ** 53 - 1)
   - isInteger(数字): 判断指定数字是否在Number.MIN_SAFE_INTEGER（-2 ** 53 + 1）到 Number.MAX_SAFE_INTEGER（2 ** 53 - 1）安全范围内
- 原型
   - toString(进制): 按进制格式化
   - toFixed(小数位数): 按小数位数格式化
   - toExponential(小数位数): 按科学计数法小数位数格式化
   - toPercision(位数): 按位数自动格式化
### BigInt

- 构造
   - 字面量: 1321n
   - 函数: BigInt(变量)
   - 构造函数: new BigInt(变量)
### String

- 构造
   - 字面量
      - 方式
         - 普通: "... ...", '... ...'
         - 模板字符串: `... ...`
      - 转义
         - 转义字符: \
         - \n换行, \t制表, \b退格, \r回车, \f换页, \\反斜杠, \'单引号, \"双引号, \`反引号, \xnn十六进制编码表示的字符, \unnnn十六进制编码表示的Unicode字符
   - 函数: String()
   - 构造函数: new String()
- 静态
   - raw标签函数: 返回未经转义的字符串
   - fromCodePointAt(32位编码...): 返回编码对应的字符, 类似方法fromCharCode(16位编码...)
- 实例
   - length
- 原型
   - 查
      - 按索引查
         - [索引]: 最常用
         - charAt(索引): 按索引查字符, 不服规则返回""
         - codePointAt(索引): 按索引查字符并转换为32位编码, 类似方法charCodeAt(索引)
         - slice(起始索引[, 终止索引]): 字符串剪切, 其他类似方法substr(), substring()
      - 按字符串查
         - search(字符串|正则): 按字符串或正则查索引, 若无返回-1, 类似方法indexOf(字符串), lastIndexOf(字符串), startsWith(字符串), endsWith(字符串), includes(字符串), 不如直接用正则的exec()方法
         - match(字符串片段|正则)
            - 字符串片段: 查找到字符串内第一个满足字符串片段的内容返回, 返回格式和正则的exec()方法一样
            - 正则: 无g标记时与正则的exec()方法一样, 有g标记时返回一个含所有匹配成功字符串的数组
   - 比较
      - localeCompare()
         - 如果按照字母表顺序，字符串应该排在字符串参数前头，则返回负值。（通常是-1，具体还要看 与实际值相关的实现。）
         - 如果字符串与字符串参数相等，则返回 0。
         - 如果按照字母表顺序，字符串应该排在字符串参数后头，则返回正值。（通常是 1，具体还要看 与实际值相关的实现。）
   - 转换
      - split(字符串|正则[, 数组最大长度]): 分割字符串位数组
      - valueOf(), toString(), toLocalString(): 返回原始字符串值
   - 映射
      - replace(字符串|正则, 要替换的内容)
         - 字符串片段: 只能替换第一个查找到的内容, 返回替换好的字符串
         - 正则: 没有标记g时只能替换第一个查找的内容, 有g的时候替换所有匹配的内容, 返回替换好的字符串
      - concat(字符串...): 字符串拼接
      - trim(), trimLeft(), trimRight(): 删除前后空格
      - repeat(重复次数): 重复字符串
      - padStart(长度[, 填充字符串]), padEnd(长度[, 填充字符串]): 填充字符串到指定长
      - toLowerCase(), toLocaleLowerCase(), toUpperCase(), toLocaleUpperCase()
### Symbol
### Object

- 构造
   - 字面量: { key: value... }
   - 构造函数: new Object()
- 静态
   - 属性描述
      - *defineProperty(对象, 属性名, 数据属性配置对象|访问器属性配置对象)
         - 数据属性配置对象
            - configurable: 属性是否可删除, 是否可配置, 是否可改为访问器属性默认true
            - enumerable: 属性是否可枚举, 默认true
            - writable: 属性是否可写, 默认true
            - value: 属性实际值, 默认undefined
         - 访问器属性配置对象: 访问器属性内部要加下划线![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428078653-22fe6b2d-0dd1-498b-84f3-88df75b5b883.png#clientId=udf2dd84a-6d0f-4&from=paste&height=643&id=ub141b711&margin=%5Bobject%20Object%5D&originHeight=643&originWidth=865&originalType=url&ratio=1&status=done&style=none&taskId=u108c3459-054d-485f-a516-74899b0d851&width=865)
            - configurable: 属性是否可删除, 是否可配置, 是否可改为数据属性默认true
            - enumerable: 属性是否可枚举, 默认true
            - get: 获取函数, 在读取属性时调用, 默认值为undefined
            - set: 设置函数, 写入属性时调用, 默认值为undefined
      - *defineProperties(对象, 属性配置对象): ![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428078570-6270705b-d322-46a1-ac3b-f1b921ef284a.png#clientId=udf2dd84a-6d0f-4&from=paste&height=725&id=u49bd0b2b&margin=%5Bobject%20Object%5D&originHeight=725&originWidth=625&originalType=url&ratio=1&status=done&style=none&taskId=u53c96d10-48cb-42ad-a673-3357bd97969&width=625)
      - getOwnPropertyDescriptor(对象, 属性): 获取属性描述对象
      - getOwnPropertyDescriptors(对象): 获取所有属性描述对象
   - 原型操作
      - getPrototypeOf(对象): 获取指定对象的原型
      - *setPrototypeOf(对象, 原型对象): 设置指定对象的原型对象
      - create(原型对象): 以指定原型对象构建一个新的对象
   - 增删改查
      - getOwnPropertyNames(对象): 获取对象的所有属性名(Symbol除外)
      - getOwnPropertySymbols(对象): 获取对象的所有Symbol属性名
      - *assign(目的对象, 源对象...): 将源对象的可枚举属性混入到目的对象, 会覆盖重复属性
      - is(值, 值): 判断两个值是否相等
   - 映射
      - keys()
      - values()
      - entries()
- 原型
   - 查
      - 变量.属性
      - hasOwnProperty(属性名): 判断指定属性是否存在于自身
      - 属性 in 变量: 判断指定属性是否存在
   - 增删改
      - *delete 变量.属性: 删除对象属性, 成功返回true, 失败返回false
      - *变量.属性 = 值
   - 原型操作
      - isPrototypeOf(对象): 判断当前对象是否指定对象的原型
      - propertyIsEnumerable(属性名): 判断指定属性是否可枚举
   - 转换
      - toString(), toLocaleString(): 返回对象字符串表示
      - valueOf(): 返回对象的数值表示
### Proxy

- 概念
   - 处理对象
      - 捕获器
         - get(目标对象, 属性名, 代理对象) {... ...}
- 构造
   - 构造函数: new Proxy(目标对象, 处理对象)
   - 函数: {proxy, revoke} = Proxy.revocable(目标对象, 处理对象), 调用revoke()会切断代理目标对象和代理对象之间的联系
### Reflect

- 静态
   - 属性描述
      - defineProperty(目标对象, 属性名, 属性描述对象): 替代Object.defineProperty()
      - getWonPropertyDescriptor(目标对象, 属性名): 替代Object.getWonPropertyDescriptor()
      - isExtensible(目标对象): 替代Object.isExtensible()
      - preventExtensions(目标对象): 替代Object.preventExtensions()
   - 原型操作
      - getPrototypeOf(目标对象): 替代Object.getPrototypeOf()
      - setPrototypeOf(目标对象, 原型对象): 替代Object.SetPrototypeOf()
   - 构造
      - construct(目标对象, 参数列表, 构造函数): 替代new操作符
   - 增删改查
      - get(目标对象, 属性名, 代理对象): 替代[]对象属性访问操作符
      - set(目标对象, 属性名, 值, 代理对象): 替代=赋值操作符
      - has(目标对象, 属性名): 替代in操作符
      - deleteProperty(目标对象, 属性名): 替代delete操作符
      - ownKeys(目标对象): 替代Object.keys()
   - 函数
      - apply(目标对象, this对象, 参数列表): 替代Function.prototype.apply()|call()
### Iterable接口

- 已经实现的全局类: String, Array, Set, Map, arguments对象, NodeList等DOM集合类型
- 实现方法
   - Symbol.iterator(): 此方法返回一个迭代器对象
### Iterator接口

- 实现方法
   - next(): 此方法每次返回迭代的值与done![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428078629-e86477c0-d099-4197-8781-69617f976d58.png#clientId=udf2dd84a-6d0f-4&from=paste&height=29&id=ub8e842ed&margin=%5Bobject%20Object%5D&originHeight=29&originWidth=228&originalType=url&ratio=1&status=done&style=none&taskId=ud3aaf636-da4e-47c0-8ce1-a6a53a1808e&width=228)
   - return(): 可选方法, 当迭代提前结束时触发
   - throw(): 可选方法, 当迭代发生错误时触发, 若处理则跳过这个值继续迭代后面的值
### Generator

- 构造
   - 声明: function* 变量名(args...) {... ...}
   - 字面量: function* (args...) {}
- 调用: 变量名(args...), 返回一个iterable对象, 迭代的值为每次执行yield返回的值
- 返回: yield 值, yield* 可迭代对象![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428079476-9d82d034-e417-42bf-84e5-e23b094c589a.png#clientId=udf2dd84a-6d0f-4&from=paste&height=594&id=uf70787cc&margin=%5Bobject%20Object%5D&originHeight=594&originWidth=919&originalType=url&ratio=1&status=done&style=none&taskId=u203f643d-78ad-4834-9e42-346cfec2afb&width=919)![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428079644-0e2a8da6-699e-4363-9c47-ff4f709d5d68.png#clientId=udf2dd84a-6d0f-4&from=paste&height=494&id=u3c0e05fc&margin=%5Bobject%20Object%5D&originHeight=494&originWidth=889&originalType=url&ratio=1&status=done&style=none&taskId=uba0645c0-4804-45ef-b3d2-fa5ee22dea3&width=889)
### Set

- 构造
   - new Set(可迭代对象)
- 实例
   - size
- 原型
   - 查
      - has(值)
   - 增删改
      - *add(值): 添加值, 返回自身
      - *delete(值)
      - *clear()
   - 遍历
      - forEach(回调函数, 回调函数的this)
   - 映射
      - keys()
      - values()
      - entries()
### Map

- 构造
   - 构造函数: new Map(可迭代对象)
- 实例
   - size: 容量
- 原型
   - 查
      - 按键查
         - has(键): 按值查键是否存在
         - get(键): 按值查键的值
      - 按值查
   - 增删改
      - *set(键, 值): 设置键值对, 返回自身
      - *delete(键): 删除键值对, 返回布尔值
      - *clear(): 清除所有键值对
   - 遍历
      - *forEach(回调函数, 回调函数的this)
   - 映射
      - keys()
      - values()
      - entries()
### Array

- 构造
   - 字面量: []
   - 函数
      - Array.from(可迭代对象[, 映射函数[, 映射函数中this的值]])
      - Array.of(参数...)
   - 构造函数: Array([长度])
- 静态
   - from(可迭代对象[, 映射函数[, 映射函数中this的值]]): 将可迭代对象转换为数组
   - of(参数...): 将一组参数转换为数组, 可用[]代替
   - isArray(): 判断是否是数组![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428080065-25388881-7a6b-4444-8121-505a2e3e49d0.png#clientId=udf2dd84a-6d0f-4&from=paste&height=201&id=ua686f2ca&margin=%5Bobject%20Object%5D&originHeight=201&originWidth=728&originalType=url&ratio=1&status=done&style=none&taskId=u024ac048-5558-4eae-bde9-1ae1ad1a66a&width=728)
- 实例
   - length
- 原型
   - 查
      - 按索引查
         - [索引]: 查找指定索引的元素
         - slice([起始索引[, 终止索引]]): 裁剪数组
      - 按值查
         - indexOf(要查的元素...), lastIndexOf(要查的元素...), includes(要查的元素...): indexOf()和 lastIndexOf()都返回要查找的元素在数组中的位置，如果没找到则返回-1。 includes()返回布尔值，表示是否至少找到一个与指定元素匹配的项
         - find(断言函数), findeIndex(断言函数): find()和 findIndex()方法使用了断言函数。这两个方法都从数组的最小索引开始。find()返回 第一个匹配的元素，findIndex()返回第一个匹配元素的索引。这两个方法也都接收第二个可选的参数， 用于指定断言函数内部 this 的值
         - every(断言函数), some(断言函数)
         - filter(断言函数)
   - 增删改
      - 数组 + 数组, concat(数组): 数组拼接
      - *[索引] = 元素
      - *fill(值[, 起始索引[, 终止索引]]): 以指定值填充数组, 若索引不合规范则略过此次操作
      - *copyWithin(填充起始索引[, 填充物起始索引[, 填充物终止索引]]): 填充指定位置开始的一系列值![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428079633-2c3eea5d-7c94-417f-b53c-91b2bb3f9cfb.png#clientId=udf2dd84a-6d0f-4&from=paste&height=663&id=u7f1f4c4b&margin=%5Bobject%20Object%5D&originHeight=663&originWidth=667&originalType=url&ratio=1&status=done&style=none&taskId=ubd8562cc-5c99-4dc5-9649-57fbb0955d1&width=667)
      - *push(), pop(), shift(), unshift(): 栈与队列方法
      - *splice(索引位置, 要删除的元素数量[, 要插入的元素...]): 插删, 返回被删除的元素的数组
   - 遍历
      - *forEach(副作用函数): 本质上等同于 for (const 元素 of 可迭代对象)
   - 排序
      - *reverse(), sort(比较函数): 比较函数接收两个参数，如果第一个参数应该排在第二个参数前面，就返回负值；如果两个参数相 等，就返回 0；如果第一个参数应该排在第二个参数后面，就返回正值
   - 映射
      - map(映射函数): 映射
      - keys(): 返回数组索引的可迭代对象
      - values(): 返回数组元素的可迭代对象
      - entries(): 返回索引与值对的可迭代对象
      - flat(拉平层数): 拉平数组
      - flatMap(映射函数): 先映射, 后拉平
   - 归并
      - reduce(归并函数), reduceRight(归并函数): 归并
   - 转换
      - join(连接字符串): 将数组元素以指定字符串连接
      - valueOf(), toString(), toLocaleString(): ![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428079943-2811ccd9-0cd2-4ffe-b844-8a04b6af99f1.png#clientId=udf2dd84a-6d0f-4&from=paste&height=208&id=ud6c0cfb5&margin=%5Bobject%20Object%5D&originHeight=208&originWidth=756&originalType=url&ratio=1&status=done&style=none&taskId=u26da3426-62f0-46da-8ab2-931e3930201&width=756)
### 定型数组

- 元素类型: Int8, Uint8, Int16, Uint16, Int32, Uint32, Float32, Float64![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428081198-7b6da4b5-15fd-48fa-b02c-dc4bf90d7110.png#clientId=udf2dd84a-6d0f-4&from=paste&height=183&id=ud1f72b95&margin=%5Bobject%20Object%5D&originHeight=183&originWidth=859&originalType=url&ratio=1&status=done&style=none&taskId=u3cd7c8ff-7d49-4ae1-845d-ecf29b5710c&width=859)
#### ArrayBuffer
![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428081300-ebb7ada7-217e-4100-be2e-d6d082164c67.png#clientId=udf2dd84a-6d0f-4&from=paste&height=245&id=u38de40c3&margin=%5Bobject%20Object%5D&originHeight=245&originWidth=749&originalType=url&ratio=1&status=done&style=none&taskId=u458238c3-fea1-42c6-aaa8-bc84e16fe93&width=749)

- 构造
   - 构造函数: new ArrayBuffer(分配字节数)
- 实例
   - byteLength: 字节长度
#### DataView

- 构造
   - 构造函数: new DataView(ArrayBuffer对象[, 字节偏移量[, 字节长度]])
- 实例
   - byteOffset: 字节偏移量
   - byteLength: 字节长度
   - buffer: 所代理的ArrayBuffer对象
- 原型
   - 查
      - get元素类型(字节索引[, 是否开启小端序])
   - 增删改
      - *set元素类型(字节索引, 值[, 是否开启小端序])
#### 元素类型Array

- 构造
   - 构造函数: new 元素类型Array(分配元素数|ArrayBuffer对象|纯数字元素的数组)
- 静态
   - from(), of()
- 实例
   - length: 长度
   - byteLength: 字节长度
   - buffer: 所代理的ArrayBuffer对象
   - BYTES_PER_ELEMENT: 每个元素所占字节数
- 原型
   - 查
      - 按索引查
         - [索引]
         - slice([起始索引[,终止索引]]), subarray
      - 按值查
         - filter(映射函数)
         - find(断言函数), findIndex(断言函数)
         - indexOf(), lastIndexOf()
         - every(断言函数), some(断言函数)
   - 增删改
      - *[索引] = 值
      - *fill(值[, 起始索引[, 终止索引]])
      - *copyWithin(覆盖起始索引[, 复制起始索引[, 复制终止索引]])
      - *set(元素类型Array对象|纯数字元素的数组[, 起始索引])
   - 遍历
      - *forEach()
   - 排序
      - *reverse(), sort(排序函数)
   - 映射
      - map(映射函数)
      - entries()
      - keys()
      - values()
   - 归并
      - reduce(归并函数), reduceRight(归并函数)
   - 转换
      - join(连接字符串)
      - toString(), toLocaleString()
### Promise

- 概念
   - 期约状态机
      - 待定(pending)
      - 解决(resolved)
      - 拒绝(rejected)
   - 期约函数
      - (resolve, reject) {}: 调用resolve()将会把promise对象状态从pending变为resolved, 调用rejcet()将会把promise对象状态从pending变为rejected
- 构造
   - new Promise(期约函数)
- 静态
   - resolve(): 实例化一个解决状态的期约
   - reject(): 实例化一个拒绝状态的期约
   - all(期约数组): 期约数组所有期约状态为resolved, 返回的合成期约状态才为resolved
   - race(期约数组): 期约数组中的期约最先状态改变的那个期约为返回的合成期约的状态
- 原型
   - then([解决处理函数[, 拒绝处理函数]])
   - catch(拒绝处理函数)
   - finally()
### Date

- 构造
   - 构造函数: new Date([毫秒数])
- 静态
   - parse(表示日期的字符串): 返回转换后的毫秒数![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428081273-7f4f1ea4-fc6c-4703-8005-c8ac09815ebf.png#clientId=udf2dd84a-6d0f-4&from=paste&height=213&id=u484cb280&margin=%5Bobject%20Object%5D&originHeight=213&originWidth=730&originalType=url&ratio=1&status=done&style=none&taskId=u044c2795-d49a-4898-97af-ed9bd916699&width=730)
   - UTC(年[, 月[, 日[, 时[, 分[, 秒]]]]): 返回转换后的毫秒数![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428081230-494fc096-a1b8-450a-884d-c8931d7cd0d5.png#clientId=udf2dd84a-6d0f-4&from=paste&height=98&id=u618fb8a0&margin=%5Bobject%20Object%5D&originHeight=98&originWidth=506&originalType=url&ratio=1&status=done&style=none&taskId=u5deab729-e8e0-49ab-8e9f-e3be34acb1d&width=506)
   - now(): 返回当前毫秒数
- 原型
   - 日期格式化
      - toLocaleString()
      - toString()
      - toDateString()
      - toTimeString()
      - toLocaleDateString()
      - toUTCString()
   - 日期特定部分
      - getTime(): 返回日期的毫秒表示
      - getFullYear(): 返回4位数年分
      - getMonth(): 返回月份(0表示1月, 11表示12月)
      - getDate(): 返回日期中的日(1~31)
      - getDay(): 返回周几(0表示周日, 6表示周六)
      - getHours(): 返回时(0~23)
      - getMinutes(): 返回分(0~59)
      - getSeconds(): 返回秒(0~59)
      - getMilliseconds(): 返回毫秒(0~999)
      - getTimezoneOffset(): 返回以分钟记的本地时区与UTC的偏移量
      - *setTime(毫秒): 以指定毫秒设置日期
      - *setFullYear(4位数年分): 设置年分
      - *setMonth(月份): 设置月份
      - *setDate(日): 设置日期中的日(1~31)
      - *setDay(周几): 设置周几(0表示周日, 6表示周六)
      - *setHours(时): 设置时(0~23)
      - *setMinutes(分): 设置分(0~59)
      - *setSeconds(秒): 设置秒(0~59)
      - *setMilliseconds(毫秒): 设置毫秒(0~999)
### RegExp

- 概念
   - 常用正则
      - 字母：/^[a-zA-Z]+$/验证长度为3的字符：/^.{3}$/
      - 由26个英文字母组成的字符串：/^[A-Za-z]+$/
      - 日期YYYY-MM-DD：/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/
      - 邮编：/^\d{6}$/
      - 日期格式YYYY-MM-DD hh:mm:ss：/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/
      - 整数：/^[-+]?\d*$/
      - 小数：/^[-\+]?\d+(\.\d+)?$/
      - 中文：/^[\u0391-\uFFE5]+$/
      - 邮箱：/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      - 手机号：/^1[3456789]\d{9}$/
      - 身份证：/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/
      - 网址: /[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/
   - 元字符: ( [ { \ ^ $ | ) ] } ? * + .
      - 基础元字符
         - \t: 制表符
         - \s: 表示一个空格
         - \r: 回车
         - \n: 换行
         - \S: 表示一个非空格, 可用[^\s]表示
         - \d: 表示一个数字, 可用[0-9]表示
         - \D: 表示一个非数字, 可用[^0-9]表示
         - \w: 表示一个数字 或 字母 下划线, 可用[0-9a-zA-Z_]表示
         - \W: 表示一个非\w, 可用[^0-9a-zA-Z_]表示
         - .: 非换行和回车的任意字符, 可用[^\r\n]表示, 当其出现在[]里时只表示点这个字符
      - 边界元字符
         - ^: 表示字符串需以此开头
         - $: 表示字符串需以此结束
      - 限定元字符
         - 贪婪模式: 尽可能捕获更多的内容
            - *: 字符出现0~无穷次
            - +: 字符出现1~无穷次
            - ?: 字符出现0或1次
            - {n}: 字符出现n次
            - {n,}: 字符出现n~无穷次
            - {n,m}: 字符出现n~m次
         - 非贪婪模式: 尽可能捕获更少的内容
            - 贪婪模式后加?
      - 特殊字符
         - ()
            - 作用1: 表示一个整体
            - 作用2: 单独捕获
         - (?:): 只表示一个整体, 不捕获
         - (?=): 正向肯定预查![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428081165-5f534d2d-22f8-4838-b325-d4ff474f9cc8.png#clientId=udf2dd84a-6d0f-4&from=paste&height=93&id=u0c197e5a&margin=%5Bobject%20Object%5D&originHeight=93&originWidth=371&originalType=url&ratio=1&status=done&style=none&taskId=uff099eb2-3805-4c9a-802f-f3e92aea21d&width=371)
         - (?!): 正向否定预查![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428082760-f2748d68-55cd-43cf-9168-261ebd164120.png#clientId=udf2dd84a-6d0f-4&from=paste&height=124&id=u54b4f3c8&margin=%5Bobject%20Object%5D&originHeight=124&originWidth=426&originalType=url&ratio=1&status=done&style=none&taskId=ue70b24e2-3489-448d-a293-8d54a954853&width=426)
         - (?<=): 负向肯定预查![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428082823-88f07117-ac00-47c0-960d-ece2785e9021.png#clientId=udf2dd84a-6d0f-4&from=paste&height=126&id=ud2f86024&margin=%5Bobject%20Object%5D&originHeight=126&originWidth=389&originalType=url&ratio=1&status=done&style=none&taskId=u9fd33010-c673-49ea-b1ab-10ea68427a7&width=389)
         - (?<!): 负向否定预查![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428083108-3590d335-b4e4-44f4-9066-7857026001dd.png#clientId=udf2dd84a-6d0f-4&from=paste&height=127&id=ub56be07b&margin=%5Bobject%20Object%5D&originHeight=127&originWidth=399&originalType=url&ratio=1&status=done&style=none&taskId=ub74e1e2c-94e0-489f-995e-182465a77f1&width=399)
         - \n: 第n个可被捕获括号匹配的字符串![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428083331-de4c7dcd-7384-457f-9b74-47ccd24925de.png#clientId=udf2dd84a-6d0f-4&from=paste&height=108&id=u62678c3c&margin=%5Bobject%20Object%5D&originHeight=108&originWidth=603&originalType=url&ratio=1&status=done&style=none&taskId=udf3d6654-02cd-447a-983d-75bca53b934&width=603)
         - |: 占位或, 表示左边右边都行, 分开的时左边和右边整个![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428083607-5f2a9608-3c3e-4120-8b11-6614587ec532.png#clientId=udf2dd84a-6d0f-4&from=paste&height=88&id=ue89f5448&margin=%5Bobject%20Object%5D&originHeight=88&originWidth=414&originalType=url&ratio=1&status=done&style=none&taskId=ub2a9784c-6ae9-4ab7-8db1-d41ae0665e9&width=414)
         - []: 含其中任意一个都行![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428083942-2d38d550-486c-4c23-90e8-d8d0977d1285.png#clientId=udf2dd84a-6d0f-4&from=paste&height=61&id=uad439985&margin=%5Bobject%20Object%5D&originHeight=61&originWidth=436&originalType=url&ratio=1&status=done&style=none&taskId=uaa5617d6-59fe-4e32-95dc-6e4d84596be&width=436)
         - [^]: 非其中任意一个都行
         - [字符-字符]: 表示从哪一个字符到哪一个字符的意思,前提是他们的ASCII码时连着的
   - 标记
      - g：全局模式，表示查找字符串的全部内容![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428084315-fbbf61de-6f5d-4254-9cd1-10823f635d92.png#clientId=udf2dd84a-6d0f-4&from=paste&height=288&id=u8932779f&margin=%5Bobject%20Object%5D&originHeight=288&originWidth=679&originalType=url&ratio=1&status=done&style=none&taskId=u797dd359-e713-4133-b79c-a10f731ae4c&width=679)
      - i：不区分大小写，表示在查找匹配时忽略 pattern 和字符串的大小写
      - y：粘附模式，表示只查找从 lastIndex 开始及之后的字符串![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428084403-e6f95048-f758-4c26-a5b9-d3489e15a283.png#clientId=udf2dd84a-6d0f-4&from=paste&height=288&id=uff6fd4df&margin=%5Bobject%20Object%5D&originHeight=288&originWidth=610&originalType=url&ratio=1&status=done&style=none&taskId=u4a8576a6-947c-4bf9-9f8f-da5c8c2bdb6&width=610)
      - m：多行模式，表示查找到一行文本末尾时会继续查找
      - u：Unicode 模式，启用 Unicode 匹配
      - s：dotAll 模式，表示元字符.匹配任何字符（包括\n 或\r）
   - 局限
      - \A 和\Z 锚（分别匹配字符串的开始和末尾）
      - 联合及交叉类
      - 原子组
      - x（忽略空格）匹配模式
      - 条件式匹配
      - 正则表达式注释 虽然还有这些局限，但 ECMAScript 的正则表达式已经非常强大，可以用于大多数模式匹配任务。
- 构造
   - 字面量: /匹配模式/标记
   - 构造函数: new RegExp(匹配模式, 标记)
- 实例
   - global：布尔值，表示是否设置了 g 标记
   - ignoreCase：布尔值，表示是否设置了 i 标记
   - unicode：布尔值，表示是否设置了 u 标记
   - sticky：布尔值，表示是否设置了 y 标记
   - lastIndex：整数，表示在源字符串中下一次搜索的开始位置，始终从 0 开始
   - multiline：布尔值，表示是否设置了 m 标记
   - dotAll：布尔值，表示是否设置了 s 标记
   - source：正则表达式的字面量字符串（不是传给构造函数的模式字符串）
   - flags：正则表达式的标记字符串（不是传给构造函数的模式字符串）
- 原型
   - *exec(要进行捕获的字符串)
      - 匹配成功: 返回一个数组, 数组含捕获的字符串, 以及index(首次匹配成功索引), input(进行捕获的字符串), groups属性
      - 匹配不成功: 返回null
   - *test(要进行匹配的字符串): 匹配成功返回true, 反之返回false
   - valueOf(): 返回正则表达式自身
   - toString(), toLocalString: 返回正则表达式字面量形式
### Math

- 静态
   - E: 自然对数的基数 e 的值 
   - LN10: 10 为底的自然对数 
   - LN2: 2 为底的自然对数
   - LOG2E: 以 2 为底 e 的对数
   - LOG10E: 以 10 为底 e 的对数 
   - PI: π 的值
   - SQRT1_2: 1/2 的平方根
   - SQRT2: 2 的平方根
- 原型
   - min(数值...), max(数值...)
   - ceil(浮点数), floor(浮点数), round(浮点数), fround(浮点数)![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428084443-5df497d8-3506-458e-b090-4a2626c2f67a.png#clientId=udf2dd84a-6d0f-4&from=paste&height=344&id=u73280fa6&margin=%5Bobject%20Object%5D&originHeight=344&originWidth=546&originalType=url&ratio=1&status=done&style=none&taskId=uc71878d5-4c06-4052-851e-f0e2d780ab4&width=546)
   - random(): 返回0~1之间的随机数, 包含0不包含1
   - ![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428085194-520b2097-f2fe-40a4-ba63-3b993dee663f.png#clientId=udf2dd84a-6d0f-4&from=paste&height=532&id=u81e79b93&margin=%5Bobject%20Object%5D&originHeight=532&originWidth=545&originalType=url&ratio=1&status=done&style=none&taskId=u3f33affd-55ce-4b50-b2b4-70d748cfb1b&width=545)
### 字符编解码
#### TextEncoder

- 构造
   - new TextEncoder()
- 原型
   - encode(字符串): 将指定字符串编码位UTF-8, 以Unit8Array格式返回
   - encodeInto(字符串, Unit8Array数组)
#### TextEncoderStream
#### TextDecodeer

- 构造
   - new TextDecoder(编码格式)
- 原型
   - decode()
#### TextDecoderStream
### 文件编解码
#### File

- 实例
   - name
   - size
   - type
   - lastModifiedDate
- 原型
   - slice()
#### FileReader

- 实例
   - result: 获取的结果存储在这里
   - error
   - 事件
      - onprogress
         - 事件参数
            - loaded
            - total
            - lengthcomputable
      - onerror
      - onload
      - onabort
- 原型
   - readAsText(文件, encoding)
   - readAsDataURL(文件)
   - readAsBinaryString(文件)
   - readAsArrayBuffer(文件)
   - abort(): 停止文件读取
#### FileReaderSync
#### Blob

- 构造
   - new Blob(包含字符串的数组 | 定型数组, { type: MIME类型 })
- 实例
   - size
   - type
- 原型
   - slice()
### 序列化与反序列化
#### JSON

- 静态
   - stringify(被序列化对象[, 过滤函数[, 缩进空格个数]]): 若含toJSON()方法则序列化其返回值, 若无则序列化原始对象
   - parse(JSON串[, 过滤函数])
#### FormData

- 构造
   - new FormData([表单元素])
- 原型
   - append(键, 值)
#### URL

- 构造
   - new URL(url地址)
- 静态
   - createObjectURL(File对象 | Blob对象)
   - revokeObjectURL(url): 释放指定url
- 实例
   - href: 完整URL
   - origin: URL源地址
   - protocol: 协议
   - username: 用户名
   - password: 密码
   - host: 服务器名及端口号
   - hostname: 服务器名
   - port: 端口号
   - pathname: 路径名
   - search: 查询字符串
   - searchParams: URLSearchParams对象
   - hash: 锚点
#### URLSearchParams

- 特性
   - 可迭代对象: [键, 值]
- 构造
   - new URLSearchParams(查询字符串)
- 原型
   - 查
      - has(键)
      - get(键)
   - 增删改
      - set(键, 值)
      - delete(键)
   - 转换
      - toString()
### 网络
#### XMLHttpRequest

- 概念
   - 跨域
      - 简单请求
         - 只含默认请求头
         - 请求体是text/plain
      - 预检请求
      - 凭据请求
         - withCredentials头为true
   - 替代性跨域
      - 图片探测
      - JSONP
- 构造
   - new XMLHttpRequest()
- 实例
   - responseText, responseXML
   - status, 2xx表示成功, 304表示从缓存取
   - statusText
   - timeout
   - readyState: 0未初始化, 1已初始化, 2已发送, 3接受中, 4完成
- 原型
   - open(请求方式, 请求url, 布尔): 初始化
      - 请求方式
         - get
            - 数据传输格式为URLParams
         - post
            - 数据传输格式
               - application/json
               - application/x-www-formurlencoded
               - application/multiple-formdata
   - setResponseHeader(头部字段名, 头部字段值): 设置请求头
      - 默认请求头
         - Accept：浏览器可以处理的内容类型
         - Accept-Charset：浏览器可以显示的字符集
         - Accept-Encoding：浏览器可以处理的压缩编码类型
         - Accept-Language：浏览器使用的语言
         - Connection：浏览器与服务器的连接类型
         - Cookie：页面中设置的 Cookie
         - Host：发送请求的页面所在的域
         - Referer：发送请求的页面的 URI。
         - User-Agent：浏览器的用户代理字符串
      - 常用请求头
         - Content-Type
         - Content-Length
   - getResponseHeader(头部字段名)
   - getAllResponseHeaders()
   - overrideMimeType(MIME类型)
   - send(null | 请求体): 发送请求
   - abort(): 取消请求
- 事件
   - onreadystatechange
   - 进度事件
      - loadstart：在接收到响应的第一个字节时触发
      - progress：在接收响应期间反复触发
         - 事件参数
            - lengthComputable: 进度信息是否可用
            - position: 接收到的字节数
            - totalSize: Content-Length定义的总字节数
      - error：在请求出错时触发
      - abort：在调用 abort()终止连接时触发
      - load：在成功接收完响应时触发
      - loadend：在通信完成时，且在 error、abort 或 load 之后触发
#### FetchAPI

- fetch(URL[, 初始化对象] | Request对象): 对URL发起请求, 返回值为Response对象的promise
#### Headers
#### Request

- 构造
   - new Request(URL[, 初始化对象])
- 实例
   - body
   - bodyUsed
   - cache
   - credentials
   - destination
   - integrity
   - keepalive
   - method
   - mode
   - redirect
   - referrer
   - referrerPolicy
   - signal
   - url
- 原型
   - clone()
   - text()
   - blob()
   - json()
   - formData()
   - arrayBuffer()
#### Response

- 构造
   - new Response()
- 静态
   - redirect()
   - error()
- 实例
   - body
   - bodyUsed
   - headers
   - ok
   - redirected
   - status
   - statusText
   - url
- 原型
   - clone()
   - text(): 返回值为纯文本格式响应体的promise
   - blob(): 返回值为Blob格式响应体的promise
   - json()
   - formData()
   - arrayBuffer()
#### WebSocket

- 构造
   - new WebSocket(URL)
- 静态
   - OPENING: 0, 连接正在建立
   - OPEN: 1, 连接已经建立
   - CLOSING: 2, 连接正在关闭
   - CLOSE: 3, 连接已经关闭
- 原型
   - send(数据)
   - close()
- 事件
   - onmessage
      - 事件参数
         - data
   - onopen
   - onerror
   - onclose
      - 事件参数
         - wasClean: 是一个布尔值，表示连接是否干净地关闭
         - code: 是一 个来自服务器的数值状态码
         - reason: 是一个字符串，包含服务器发来的消息
### 本地
#### Cookie

- 概念
   - 每个cookie的构成![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428085076-6887067f-6bc0-46cd-b575-171ad2965dda.png#clientId=udf2dd84a-6d0f-4&from=paste&height=248&id=u909fb7a4&margin=%5Bobject%20Object%5D&originHeight=248&originWidth=984&originalType=url&ratio=1&status=done&style=none&taskId=u2a8b1c2e-bd6a-43e9-ba16-c61f05add93&width=984)
      - Name
      - Value
      - Domain
      - Path
      - Expire/Max-Age
      - Size
      - HttpOnly
      - Secure
      - SameSite
      - Priority
- 构造
   - document.cookie
- 获取cookie: document.cookie, 获取后需要decodeURIComponent()进行解码, 获取的字符串格式为"name1=value1;name2=value2;name3=value3"
- 设置cookie: document.cookie = "键=值", 设置后需要encodeURIComponent()进行编码
#### Storage

- 构造
   - sessionStorage: 本次会话的本地存储
   - localStorage: 永久存储
- 实例
   - length: 保存的数据项个数
- 原型
   - setItem(): 存储或修改数据
   - getItem(): 取出数据
   - removeItem(): 删除数据
   - clear(): 清除所有数据
   - key(): 根据索引取出键
### DOM
#### EventTarget
#### Node

- 概念
   - 一个文档中同一个节点不能出现在多个地方
- 静态
   - ELEMENT_NODE: 1
   - ATTRIBUTE_NODE: 2
   - TEXT_NODE: 3
   - CDATA_SECTION_NODE: 4
   - ENTITY_REFERENCE_NODE: 5
   - ENTITY_NODE: 6
   - PROCESSING_INSTRUCTION_NODE: 7
   - COMMENT_NODE: 8
   - DOCUMENT_NODE: 9
   - DOCUMENT_TYPE_NODE: 10
   - DOCUMENT_FRAGMENT_NODE: 11
   - NOTATION_NODE: 12
- 实例
   - 索引
      - ownerDocument, parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling: 文档节点, 父子节点, 首末子节点, 前后兄弟节点
   - 属性
      - nodeType, nodeName, nodeValue: 节点类型, 节点名, 节点值
- 原型
   - 查
      - hasChildNodes(): 是否有子节点
      - matches(css查询器): 元素节点是否匹配css查询器
   - 增删改
      - *insertBefore(新节点, 参照节点): 子节点的参照节点前插入新的子节点, 返回新节点
      - *appendChild(新节点): 子节点末尾添加新的子节点, 返回新节点
      - *replaceChild(新节点, 被替换节点): 将新的子节点替换指定子节点, 返回被替换节点
      - *removeChild(移除节点): 移除指定节点并返回之
   - cloneNode(布尔值): 复制本节点并返回, 若为true则深复制, 否则只复制本节点
   - normalize()
#### NodeList

- 实例
   - length
- 原型
   - 查
      - [索引], item(索引)
#### HTMLCollection

- 实例
   - length
- 原型
   - 查
      - [索引], item(索引)
      - namedItem(name属性)
#### Document

- 构造
   - document
- 实例
   - 索引
      - doctype, documentElement, head, body: 指向!doctype元素, html元素, head元素, body元素, r
      - anchors, forms, images, links: 所有带 name 属性的a元素, 所有form元素, 所有img元素, 所有带href的a元素, r
      - activeElement: 获取焦点的元素
   - 属性
      - title, URL, domain, referrer: 标题, rw, 完整URL, r, 域名, rw, 链接到当前页面的那个页面的URL, r
      - readyState: 文档加载状态
      - compatMode: 渲染模式
      - characterSet: 文档字符集
- 原型
   - createTextNode(文本), createElement(元素名), createElementNS(命名空间, 元素名), createDocumentFragment()
   - write(), writeln()
   - hasFocus()
   - defaultView.getComputedStyle(元素, 伪元素)
   - createEvent(事件名), dispatchEvent(事件名)
   - 遍历
   - 范围
#### DocumentFragment

- 构造
   - document.createDocumentFragment()
#### Element

- 构造
   - document.createElement(元素名)
- 实例
   - 索引
      - childElementCount, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling: 子元素结点个数, 子元素结点, 首末子元素结点, 前后兄弟元素结点
   - 标签属性
      - id, className, title, lang, dir, data-, draggable
      - dataset
      - attributes
         - 原型
            - [节点名], getNamedItem(节点名), item(节点名)
            - removeNamedItem(节点名)
            - setNamedItem(节点): 添加新的节点
   - 样式
      - classList
         - 原型
            - add(value): 向类名列表添加
            - contains(value): 查询指定类名是否存在类名列表
            - remove(value): 类名列表删除指定类名
            - toggle(value): 类名列表存在指定类名则删除, 否则添加
      - style
         - cssText
         - length
         - parentRule
         - getPropertyPriority(属性名)
         - getPropertyValue(属性名)
         - item(索引)
         - removeProperty(属性名)
         - setProperty(属性名, 值, 是否!important)
   - 属性
      - innerHTML, outerHTML, innerText, outerText
      - offsetParent, offsetHeight, offsetWidth, offsetTop, offLeft, clientWidth, clientHeight, scrollTop, scrollLeft, scrollHeight, scrollWidth
- 原型
   - getElementById(), getElementsByTagName(), querySelector(), querySelectorAll(), getElementByclassName()
   - getAttribute(), setAttribute(), removeAttribute()
   - insertAdjacentHTML(模式, 内容), insertAdjacentText(模式, 文本)
      - 模式
         - beforebegin
         - afterbegin
         - beforeend
         - afterend
   - scrollIntoView(alignToTop | scrollIntoViewOptions)
      -  alignToTop 是一个布尔值
         - true：窗口滚动后元素的顶部与视口顶部对齐
         - false：窗口滚动后元素的底部与视口底部对齐
      - scrollIntoViewOptions 是一个选项对象
         - behavior：定义过渡动画，可取的值为"smooth"和"auto"，默认为"auto"
         - block：定义垂直方向的对齐，可取的值为"start"、"center"、"end"和"nearest"，默 认为 "start"
         - inline：定义水平方向的对齐，可取的值为"start"、"center"、"end"和"nearest"，默 认为 "nearest"。
   - getBoundingClientRect()
      - left
      - top
      - right
      - bottom
   - addEventListener(事件名, 回调[, 是否在捕获阶段触发]), removeEventListener(事件名, 回调[, 是否在捕获阶段触发])
   - contains(元素)
- 事件
   - 用户界面事件
      - DOMActivate
      - load
      - DOMContentLoaded
      - unload
      - abort
      - error
      - select
      - resize
      - scroll
      - contextmenu: 常用作禁止鼠标右键
         - 事件参数
            - clientX, clientY
      - selectstart: 常用作禁止文本选取
      - beforeunload
         - 事件参数
            - returnValue
      - readystatechange
      - pageshow, pagehide
      - haschange
   - 设备事件
      - orientationchange
      - deviceorientation
      - devicemotion
   - 触摸及手势事件
      - touchstart, touchend
      - touchmove
      - touchcancel
      - gesturestart, gestureend
      - gesturechange
      - 事件参数
         - clientX, clientY
         - pageX, pageY
         - screenX, screenY
         - shiftKey, ctrlKey, altKey, metaKey
         - touches, targetTouches, changeTouches
            - clientX, clientY
            - pageX, pageY
            - screenX, screenY
            - target：触摸事件的事件目标
            - identifier：触点 ID
   - 焦点事件
      - blur(无冒泡)
      - focus, focusin, focusout(无冒泡)
   - 键盘与输入事件
      - keydown, keyup: 不区分大小写
      - keypress: 不触发功能键, 区分大小写
      - textInput
      - 事件参数
         - keyCode: 按下键的ascii值
   - 鼠标和滚轮事件
      - click, dbclick
      - mousedown, mouseup
      - mouseenter, mouseleave(无冒泡)
      - mouseout, mouseover
      - mousemove
      - mousewheel
      - 事件参数
         - clientX, clientY: 相对于可视区的距离
         - pageX, pageY: 相对于文档整个页面的距离
         - screenX, screenY: 相对于屏幕距离
         - shiftKey, ctrlKey, altKey, metaKey
         - button
            - 0，表示没有按下任何键
            - 1，表示按下鼠标主键
            - 2，表示按下鼠标副键
            - 3，表示同时按下鼠标主键、副键
            - 4，表示按下鼠标中键
            - 5，表示同时按下鼠标主键和中键
            - 6，表示同时按下鼠标副键和中键
            - 7，表示同时按下 3 个键
   - 拖放事件
      - dragstart
      - drag
      - dragend
      - dragenter
      - dragover
      - dragleave
      - drop
- 事件参数
   - 事件委托
      - currentTarget: 指向绑定事件对象
      - target: 触发事件的元素, this指向绑定事件对象
   - 阻止事件默认回调
      - preventDefault(): 调用后阻止当前元素指定事件的默认回调触发
      - defaultPrevented: true 表示已经调用 preventDefault()方法
   - 阻止事件冒泡
      - stopPropagation(): 用于取消所有后续事件捕获或事件冒泡
      - stopImmediatePropagation(): 用于取消所有后续事件捕获或事件冒泡，并阻止调用任 何后续事件处理程序
      - cancelable 布尔值 只读 表示是否可以取消事件的默认行为 
      - bubbles: 事件是否冒泡
   - 其他
      - detail 整数 只读 
      - eventPhase 整数 只读 表示调用事件处理程序的阶段：1 代表捕获阶段，2 代表 到达目标，3 代表冒泡阶段 
      - preventDefault() 函数 只读 用于取消事件的默认行为。只有 cancelable 为 true 才 可以调用这个方法
      - trusted 布尔值 只读 true 表示事件是由浏览器生成的。false 表示事件是开 发者通过 JavaScript 创建的（DOM3 Events 中新增） 
      - type 字符串 只读 被触发的事件类型 
      - View AbstractView 只读 与事件相关的抽象视图。等于事件所发生的 window 对象
#### <form>

- 实例
   - action：请求的 URL，等价于 HTML 的 action 属性
   - enctype：请求的编码类型，等价于 HTML 的 enctype 属性
   - method：HTTP 请求的方法类型，等价于 HTML 的 method 属性
   - name：表单的名字，等价于 HTML 的 name 属性
   - acceptCharset：服务器可以接收的字符集，等价于 HTML 的 accept-charset 属性
   - target：用于发送请求和接收响应的窗口的名字，等价于 HTML 的 target 属性
   - length：表单中控件的数量
   - elements：表单中所有控件的 HTMLCollection
- 原型
   - [索引]: 返回form表单中的元素
   - reset()：把表单字段重置为各自的默认值
   - submit()：提交表单
- 事件
   - submit
   - reset
#### 表单

- 实例
   - name
   - value
   - form
   - tabIndex
   - readOnly
   - disabled
   - placeholder
   - src
   - files
   - type
      - submit
      - reset
      - image
      - text
      - button
      - radio
      - select-one
      - select-multiple
- 原型
   - focus()
   - blur()
- 事件
   - change
   - blur
   - focus
   - input
#### 多媒体

- 实例
   - 基本
      - videoHeight: 视频高
      - videoWidth: 视频宽
      - src: 音频文件地址
      - controls: 是否显示控制器
      - autoplay: 是否自动播放
      - volume: 音量
      - muted: 是否静音
      - paused: 是否暂停
      - loop: 是否循环
      - defaultPlaybackRate: 默认播放速率
      - start: 媒体开始位置
   - 加载
      - networkState: 当前网络连接状态, 0表示空, 1表示加载中, 2表示加载元素据, 3表示加载了第一帧, 4表示加载完成
      - readyState: 媒体当前准备情况, 0表示不可用, 1表示可显示当前帧, 2表示可以开始播放, 3表示可以从头到尾播放
      - buffered: 已下载缓冲的时间范围
      - bufferedByte: 已下载的缓冲字节方位
      - bufferingRate: 每秒下载的位数
      - bufferingThrottled: 缓冲是否被浏览器截流
   - 播放
      - totalBytes: 资源总字节数
      - duration: 媒体总秒数
      - currentLoop: 当前媒体循环次数
      - currentSrc: 当前媒体URL
      - currentTime: 当前秒数
      - ended: 媒体是否播放完成
      - played: 以播放的时间范围
      - playbackRate: 当前播放速率
      - seekable: 可跳转时间范围
      - seeking: 是否正移动到媒体新位置
- 原型
   - play()
   - pause()
   - canPlayType()
- 事件
   - timeupdate: 随着播放不断触发
   - abort: 下载被中断
   - canplay: 回放可以开始, readyState为2
   - canplaythrough: 回放可以继续, readyState为3
   - canshowcurrentframe: 可以显示当前帧, readyState为1
   - dataunavailable: 不能回放, 因为没有数据, readyState为0
   - durationchange: duration属性的值发生变化
   - emptied: 网络连接关闭了
   - empty: 发生了错误, 阻止媒体下载
   - ended: 媒体已经播放完一遍, 且停止了
   - error: 下载期间发生了网络错误
   - loadedmetadata: 媒体的元数据已经下载
   - loadstart: 西在已经开始
   - pause: 回放已经暂停
   - play: 媒体收到开始播放的请求
   - playing: 媒体已经开始播放
   - progress: 下载中
   - ratechange: 媒体播放速率发生变化
   - seeked: 跳转已结束
   - seeking: 回放已移动到新位置
   - stalled: 浏览器尝试下载, 但尚未收到数据
   - timeupdate: currentTime被非常规或意外地更改了
   - volumechange: volume或muted属性值发生了变化
   - waiting: 回放暂停, 以下载更多数据
#### Text

- 构造
   - document.createTextNode(文本)
- 实例
   - length
- 原型
   - appendData(文本)
   - deleteData(offset, count)
   - insertData(offset, text)
   - replaceData(offset, count, text)
   - splitText(offset)
   - substringData(offset, count)
#### Comment
#### CDATASection
#### DocumentType

- 实例
   - name
#### Attr

- 推荐使用element.getAttribute(), removeAttribute(), setAttribute()方法替代属性结点操作
#### MutationObserver

- 构造
   - new MutationObserver(回调函数![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428085815-87cdf1ef-2a4e-4aaa-8d94-f40b85cc0b2a.png#clientId=udf2dd84a-6d0f-4&from=paste&height=513&id=uf7e7b0bb&margin=%5Bobject%20Object%5D&originHeight=513&originWidth=388&originalType=url&ratio=1&status=done&style=none&taskId=ua18aa8b4-bf63-4507-99ab-04f08185270&width=388))
      - 回调函数接收MutationRecord实例
         - target
         - type
         - oldValue
         - attributeName
         - attributeNamespace
         - addedNodes
         - removeNodes
         - previousSibling
         - nextSibling
- 原型
   - observe(结点, MutationObserverInit对象)
      - MutationObserveInit对象
         - subtree: 观察目标结点子树, 布尔值
         - attributes: 观察目标结点属性, 布尔值
         - attributeFilter: 观察目标结点指定属性， 字符串数组
         - attributeOldValue: 
         - characterData
         - characterDataOldValue
         - childList
   - disconnect(): 取消结点绑定
   - takeRecords(): 清空任务队列
#### IntersectionObserver
![image.png](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619586987091-75ddf486-82bf-47ee-834b-f7895b657833.png#clientId=u7a2178b3-a196-4&from=paste&height=637&id=u6e76a352&margin=%5Bobject%20Object%5D&name=image.png&originHeight=637&originWidth=1262&originalType=binary&ratio=1&size=371806&status=done&style=none&taskId=uda69202a-6612-4781-a902-b049215e598&width=1262)
#### CanvasRenderingContext2D

- 构造: canvas标签对象.getContext("2d")
- 实例
   - 路径
      - 路径
         - beginPath(): 下笔
         - closePath(): 停笔, 并封闭路径
         - moveTo(x坐标, y坐标): 移笔
         - lineTo(x坐标, y坐标): 画直线
      - 样式
         - fill(): 路径内部着色
         - stroke(): 路径着色
         - fillStyle: 路径内部着色样式
         - strokeStyle: 路径着色样式
         - lineWidth: 线条宽
         - lineCap: 线条末端样式
            - 可选值: butt(矩形, 默认值), round(圆形), square(突出的矩形)
         - lineJoin: 线条交点样式
            - 可选值: miter(菱形), round(扇形), bevel(三角形底边)
         - getLineDash(): 返回数组, 表示虚线里面线段和间距的长度
         - setLineDash([线段长, 间距长])
# NodeJs
## 脚本

- node
   - node js文件
- npm
   - npm init [脚本]
   - npm install 包 [-g]
   - npm uninstall 包
   - npx 脚本
   - npm run 自定义脚本
## package.json

- name: 模块名
- main: 模块入口文件
- scripts: 自定义脚本
- dependencies: 运行时依赖
- devDependencies: 开发时依赖
## 属性

-  __dirname: 返回执行js文件的绝对路径
## 类
### EventEmitter

- 构造
   - new require("events")
- 原型
   - on(事件, 回调函数)
   - once(事件，回调函数)
   - off(事件, 回调函数)
   - emit(事件)
### Buffer

- 构造
   - new Buffer()
- 静态
   - alloc(), allocUnsafe(), from()
- 原型
   - toString()
## 模块
### http

- 属性
   - METHODS: 支持的所有HTTP方法
   - STATUS_CODES: 所有HTTP状态码及其描述
   - globalAgent: Agent对象, 全局实例
- 函数
   - createServer(回调函数): 返回Server对象, 回调函数接收IncomingMessage对象和ServerResponse对象
   - request(options, 回调函数): 返回ClientRequest对象, 回调函数参数为IncomingMessage对象
      - options
         - hostname
         - port
         - path
         - method
         - headers
- 类
   - ClientRequest
      - 原型
         - on(事件, 回调函数)
         - write(Buffer对象 | 字符串)
         - end(): 发送请求
      - 事件
         - error
            - 事件参数: Error对象
   - Agent
   - Server
      - 原型
         - close()
         - listen(端口号, 回调函数)
   - ServerResponse
      - 实例
         - statusCode， statusMessage
      - 原型
         - getHeaderNames() 获取已设置的 HTTP 消息头名称的列表。
         - getHeaders() 获取已设置的 HTTP 消息头的副本。
         - setHeader('headername', value) 设置 HTTP 消息头的值。
         - getHeader('headername') 获取已设置的 HTTP 消息头。
         - removeHeader('headername') 删除已设置的 HTTP 消息头。
         - hasHeader('headername') 如果响应已设置该消息头，则返回 true。
         - headersSent() 如果消息头已被发送给客户端，则返回 true。
         - writeHead(状态码, 状态消息[, 请求头])
         - end(): 结束响应
         - on(事件, 回调函数)
         - write(Buffer对象 | 字符串): 写入数据
      - 事件
         - finish: 写入完成时触发
   - IncomingMessage
      - 实例
         - headers, rawHeaders
         - statusCode(, statusMessage()
         - method
         - url
         - httpVersion()
         - socket()
         - on(事件, 回调函数)
         - pipe(WriteStream对象): 创建由ReadStream对象到WriteStream对象的管道流
      - 事件
         - data: 接收到数据时触发
            - 事件参数: Buffer对象
         - end: 数据接收完成时触发
         - error: 出错时触发
            - 事件参数: Error对象
### fs

- 函数
   - 文件操作
      - stat(路径, 回调函数): 检测是文件还是目录, 回调函数参数为Error对象和Stat对象
      - mkdir(路径, 回调函数): 创建目录, 回调函数参数为Error对象
      - writeFile(路径, 数据[, 选项], 回调函数): 创建并写入文件, 回调函数参数为Error对象
         - 选项
            - encoding: 默认"utf-8"
            - mode: 读写权限, 默认438
            - flag: 默认"w"
      - appendFile(路径, 数据, 回调函数): 追加文件, 回调函数参数为Error对象
      - readFile(路径[, 编码], 回调函数): 读取文件, 回调函数参数为Error对象和Buffer对象
      - readdir(路径, 回调函数): 读取目录, 回调函数参数为Error对象和Array对象
      - rename(源路径, 目的路径, 回调函数): 重命名或移动文件, 回调函数参数为Error对象
      - rmdir(路径, 回调函数): 删除目录, 回调函数参数为Error对象
      - unlink(路径, 回调函数): 删除文件
   - 流
      - createReadStream(路径): 创建ReadStream对象
      - createWriteStream(路径): 创建WriteStream对象
- 类
   - Stat
      - 原型
         - isFile(): 判断是否是文件
         - isDirectory(): 判断是否是目录
   - ReadStream
      - 构造
         - fs.createReadStream(路径)
      - 原型
         - on(事件, 回调函数)
         - pipe(WriteStream对象): 创建由ReadStream对象到WriteStream对象的管道流
      - 事件
         - data: 接收到数据时触发
            - 事件参数: Buffer对象
         - end: 数据接收完成时触发
         - error: 出错时触发
            - 事件参数: Error对象
   - WriteStream
      - 构造
         - fs.createWriteStream(路径)
      - 原型
         - on(事件, 回调函数)
         - write(Buffer对象 | 字符串): 写入数据
      - 事件
         - finish: 写入完成时触发
### path

- 函数
   - basename(路径): 返回路径最后一部分
   - dirname(路径): 返回路径目录部分
   - extname(路径): 返回路径扩展名部分
   - isAbsolute(路径): 是否绝对路径
   - join(路径, ...): 连接多个路径
   - normalize(路径): 计算实际路径
   - parse(路径): 解析路径为Path对象
   - relative(路径1, 路径2): 返回路径2对于路径1的相对路径
   - resolve([路径, ...]): 返回绝对路径
- 类
   - Path
      - 实例
         - root: 根路径
         - dir: 从根路径开始的文件夹路径
         - base: 文件名+扩展名
         - name: 文件名
         - ext: 扩展名
# 库
## axios

- 自身
   - async axios(URL[, Config对象]): 返回Res对象
   - async axios(Config对象): 返回Res对象fd
- 属性
   - defaults: 全局Config对象默认值
   - interceptors: Interceptor对象
      - Interceptor对象
         - request
            - async use(回调函数): 回调函数参数是Config对象
            - eject(use函数返回的Promise对象)
         - response
            - async use(回调函数): 回调函数参数是Res对象
            - eject(use函数返回的Promise对象)
- 函数
   - 方法别名
      - async request(Config对象): 返回Res对象
      - async get(URL[, Config对象]): 返回Res对象
      - async post(URL[, Config对象]): 返回Res对象
      - async delete(URL[, Config对象]): 返回Res对象
      - async put(URL[, Config对象]): 返回Res对象
   - 并发
      - async all(迭代对象): 返回Res对象
      - async spread(回调函数)
   - 实例
      - create(Config对象): 返回自定义配置的axios实例
- 类
   - Config
      - method: 请求方法
      - baseURL: 请求基地址
      - url: 请求地址
      - headers: 请求头
      - withCredentials: 跨域请求是否使用凭证
      - auth: 设置Authorization头
      - proxy: 设置Proxy-Authorization头
      - params: 查询参数, 数据类型为plain object | URLSearchParams对象
      - data: 请求体
         - 常见的请求体格式对应数据类型
            - json
               - application/json->plain object
            - 表单
               - application/x-www-form-urlencoded->plain object | URLSearchParams对象
               - multipart/form-data->FormData
            - 文本
               - text/plain->string
               - text/html->string
               - text/xml->string
               - text/markdown->string
            - 图片
               - image/gif: gif格式->ArrayBuffer对象 | ArrayBufferView对象 | File对象 | Blob对象
               - image/jpeg: jpg格式->ArrayBuffer对象 | ArrayBufferView对象 | File对象 | Blob对象
               - image/png: png格式->ArrayBuffer对象 | ArrayBufferView对象 | File对象 | Blob对象
            - 多媒体
               - audio/mpeg: mp3格式->ArrayBuffer对象 | ArrayBufferView对象 | File对象 | Blob对象
               - audio/x-wav: wav格式->ArrayBuffer对象 | ArrayBufferView对象 | File对象 | Blob对象
               - audio/x-ms-wma: w格式->ArrayBuffer对象 | ArrayBufferView对象 | File对象 | Blob对象
               - video/mp4: mp4格式->ArrayBuffer对象 | ArrayBufferView对象 | File对象 | Blob对象
               - video/avi: avi格式->ArrayBuffer对象 | ArrayBufferView对象 | File对象 | Blob对象
               - video/x-ms-wmv: wmv格式->ArrayBuffer对象 | ArrayBufferView对象 | File对象 | Blob对象
            - 二进制流
               - application/octet-stream->ArrayBuffer对象 | ArrayBufferView对象 | File对象 | Blob对象
      - responseType: 响应体类型
         - 响应体类型: arraybuffer, blob, document, json
      - responseEncoding: 响应体编码
      - onUploadProgress
      - onDownloadProgress
      - timeout: 请求超时时间
   - Res
      - data: 响应体
      - status: 状态码
      - statusText: 状态文本
      - headers: 响应头
      - config: 请求的配置
      - request: 请求
## koa

- 安装
   - npm i koa 
- 类
   - Application
      - 构造
         - new require("koa")
      - 实例
         - env: 环境
         - keys: 签名的cookie密钥数组
         - proxy: 是否启用代理
         - proxyIpHeader: 代理ip消息头, 默认为X-Forwarded-For
         - subdomainOffset: 偏移量, 默认为2
         - maxIpsCount: 从代理ip消息头读取的最大ips, 默认为0(代表无限)
      - 原型
         - use(异步回调函数): 回调函数参数为Context对象和next函数, 返回this
            - next函数: 调用next函数达成洋葱圈模型await next()
         - listen(端口号): http.createServer(app.callback()).listen(端口号)的语法糖
         - callback(): 返回一个回调函数, 供http.createServer(回调函数)或https.createServer(回调函数)使用
         - on(事件, 回调函数)
      - 事件
         - error
            - 事件参数: Error对象和Context对象
   - Context
      - 实例
         - state: 用于通过中间件传递信息的属性
         - app: 对app的引用
         - cookies
            - get(name[, options])
            - set(name, value[, options])
         - req: 返回Request对象
         - res: 返回Response对象
      - 原型
         - throw(状态码[, 状态消息]): 用于发送400或500的错误响应
         - set(响应头的键, 响应头的值)
   - Request
      - 实例
         - URL: 获取URL对象
         - method: 请求方法
         - headers: 请求头
         - length: 请求头的Content-Length字段
         - type: 请求头的Content-Type字段, 不含charset参数
         - charset: 请求的Content-Type字段的charset参数
         - fresh: 用于 If-None-Match / ETag, 和 If-Modified-Since 和 Last-Modified 之间的缓存协商 
         - body
         - socket
         - ip: 请求的远程地址, 当app.proxy是true时支持X-Forwarded-Proto
         - ips
         - subdomains
      - 原型
         - acceptsEncodings()
         - acceptsCharsets()
         - acceptsLanguages()
         - accepts()
         - get(请求头的键)
         - has(响应头的键)
   - Response
      - 实例
         - status
         - message
         - headers
         - headerSent: 检查响应头是否发送
         - lastModified
         - etag
         - length
         - type
         - body: 可为string | Buffer对象 | Stream对象 | 可序列化为Json的plain object或Array对象 | null
         - socket
      - 原型
         - redirect()
         - attachment()
         - get(响应头的键)
         - set(响应头的键, 响应头的值 | 以一个对象表示的多个响应头)
         - remove(响应头的键)
         - has(响应头的键)
         - append([文件名[, 部分参数]])
         - remove()
## react

- 复用
- 目录结构
   - public
      - favicon.ico: 网页图标
      - index.html
   - src
      - tool: 存放工具js文件的文件夹
      - remoteApi: 存放服务端api的文件夹
      - localApi: 存放本地api的文件夹
      - component: 存放通用组件
      - page: 存放各种组件文件夹, 组件文件夹由index.jsx, index.scss, asset文件夹构成, asset文件夹存放视频, 图片, 文本等
      - index.js: 项目启动后运行的入口函数, 用ReactDOM.render()函数进行根React元素的DOM挂载, 根组件通常用BrowserRouter组件包裹用以提供路由相关的全局状态和副作用函数![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428085786-f8a17ba5-1822-47f6-924a-4684eda89db1.png#clientId=udf2dd84a-6d0f-4&from=paste&height=353&id=u438b5343&margin=%5Bobject%20Object%5D&originHeight=353&originWidth=450&originalType=url&ratio=1&status=done&style=none&taskId=uf46a275a-52a0-4b1a-b10e-704d13566b6&width=450)
      - index.scss: 全局css![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428086222-9387d1ee-6227-4768-8970-50aa5d24b062.png#clientId=udf2dd84a-6d0f-4&from=paste&height=256&id=ue4b1f57c&margin=%5Bobject%20Object%5D&originHeight=256&originWidth=548&originalType=url&ratio=1&status=done&style=none&taskId=ue013470f-7337-45ed-9081-1f8e1babb28&width=548)
      - App.jsx: 根组件
      - App.scss: 根组件的css
- 模块
   - react
      - 类
         - *React
            - 静态
               - createElement(类型[, 属性[, 子组件...]]): 创建React元素, 可用jsx语法简写![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428086427-61d23c4b-e793-49ba-89c4-de695ec76cf7.png#clientId=udf2dd84a-6d0f-4&from=paste&height=489&id=u7cb8e6c4&margin=%5Bobject%20Object%5D&originHeight=489&originWidth=695&originalType=url&ratio=1&status=done&style=none&taskId=u7beb7ae9-4937-4434-be25-2ef1b7846df&width=695)
                  - jsx语法
                     - 标签中混入JS表达式要用{}
                     - 样式的类名指定不要用class, 要用className
                     - 内联样式style接收对象
                     - 属性用驼峰命名法
                     - 虚拟DOM只能有一个根标签
                     - 标签必须闭合
                     - 首字母大写的标签<=>React组件
                     - 标签的属性可以用展开对象语法...
               - createContext(初始值): 返回一个Context对象
               - Fragment组件: 减少不必要的嵌套
         - Context
            - 构造
               - React.createContext(初始值)![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428086437-3c0a33d5-79c4-4449-b4de-2953bbeeec37.png#clientId=udf2dd84a-6d0f-4&from=paste&height=284&id=u758237a2&margin=%5Bobject%20Object%5D&originHeight=284&originWidth=517&originalType=url&ratio=1&status=done&style=none&taskId=uf67fb9b4-2b1a-4bd8-8840-c997c6b4a88&width=517)
            - 原型
               - Provider组件: 为后代组件提供全局状态和副作用函数, 参数value提供全局状态和副作用函数, 参数children为子组件![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428086708-b1cf6e7a-29b0-4816-b1dc-ff8a692c49a4.png#clientId=udf2dd84a-6d0f-4&from=paste&height=269&id=u0e8f23d4&margin=%5Bobject%20Object%5D&originHeight=269&originWidth=475&originalType=url&ratio=1&status=done&style=none&taskId=ud447f8c0-5fd0-4cfe-804f-12862bbf88f&width=475)
      - 函数
         - -useState(初始化参数): 返回一个数组, 数组第一个元素为状态值, 第二元素为改变状态值的方法![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428086914-e14c16a5-238a-44f9-8250-f2b5b278e2a4.png#clientId=udf2dd84a-6d0f-4&from=paste&height=64&id=u494d4170&margin=%5Bobject%20Object%5D&originHeight=64&originWidth=366&originalType=url&ratio=1&status=done&style=none&taskId=u32ce80e9-e603-402c-aeca-9a67f13319d&width=366), 改变状态的方法接收参数为值或一个回调函数, 这个回调函数的参数为现在的状态值, 返回值为要赋的值![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428087337-62240d26-2fc9-498b-86d9-74de8c1cee60.png#clientId=udf2dd84a-6d0f-4&from=paste&height=255&id=u3cb0b0ee&margin=%5Bobject%20Object%5D&originHeight=255&originWidth=762&originalType=url&ratio=1&status=done&style=none&taskId=u82626dad-9994-4f1d-afeb-b0ba59da45d&width=762)
         - -useReducer(reducer, 默认值): 返回一个数组, 数组第一个元素为状态值, 第二个元素为改变状态值的dispatch, 可替代useState
         - -useContext(Context对象): 返回Context对象的先代Provider组件提供的全局状态和副作用函数
         - useRef(初始值): 返回ref
         - -useEffect(回调函数[, 监听状态数组]): 每次组件渲染后触发, 返回值为组件卸载时触发的函数![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428088060-9f6e41f1-c6f3-418d-9719-91b391bf39f6.png#clientId=udf2dd84a-6d0f-4&from=paste&height=103&id=ua395d475&margin=%5Bobject%20Object%5D&originHeight=103&originWidth=444&originalType=url&ratio=1&status=done&style=none&taskId=ucad394e4-47c2-44e0-8073-c5350576cfc&width=444), 监听状态数组把触发时机改为指定状态改变后触发, 若为空数组[]则只在第一次渲染和卸载时触发
         - -useLayoutEffect(回调函数[, 监听状态数组]): 同useEffect, 但调用时机不同, useEffect在浏览器渲染完成后调用, useLayoutEffect在浏览器渲染完成前调用
   - react-dom
      - 类
         - *ReactDOM
            - 静态
               - render(React元素, DOM元素): 渲染React元素到DOM元素上
               - unmountComponentAtNode(DOM元素)
   - react-router-dom(需额外安装)
      - 函数
         - -BrowserRouter组件: 包裹在根组件外提供路由相关的全局状态与副作用函数![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428088163-365bb9a3-cdff-4757-ad96-05d0b69fca47.png#clientId=udf2dd84a-6d0f-4&from=paste&height=221&id=u8848b4ce&margin=%5Bobject%20Object%5D&originHeight=221&originWidth=299&originalType=url&ratio=1&status=done&style=none&taskId=uf868ba19-2b7a-44fe-9f1e-496333185b1&width=299)
         - -HashRouter组件: 与BrowserRouter组件不同在于HashRouter组件利用的时锚点
         - -Switch组件: 唯一路由匹配组件, 包裹在Route组件和Redirect组件外
         - -Route组件: 参数path为匹配路径, 参数component为匹配组件, 会给component指定组件传递三个路由参数
            - history
               - go(数值): 
               - goBack(): 路由后退一步
               - goForward(): 路由前进一步
               - push(路由[, 传参]): 跳转到指定路由, 可进行传参
               - replace()
            - location
               - pathname
               - search
               - state
            - match
               - params
               - path
               - url
         - -Redirect组件: 参数to为重定向路径
         - -withRouter(组件): 将指定组件赋予三个路由参数
# 环境
## babel

- 安装
   - npm i @babel/core @babel/cli @babel/node @babel/preset-env -D
   - npm i @babel/polyfill
- 配置
   - 根目录下创建的babel.config.js

const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
      corejs: "3.6.4",
    },
  ],
];

module.exports = { presets };

- 脚本
   - babel-node js文件
## webpack

- 安装
   - npm i webpack webpack-cli -D
- 配置
   - 根目录下创建webpack.config.js, 暴露一个presets对象
      - presets
         - mode: 打包模式, "development"表示开发模式, 开发效率高, "production"表示生产模式, 执行速度快
         - entry
            - main: 被打包文件的绝对路径, 默认./index.js
         - output
            - path: 打包文件输出目录的绝对路径, 默认./dist
            - filename: 打包文件的文件名, 默认main.js
         - module
            - rules: 规则数组
               - 规则
                  - test: 正则表达式, 表示匹配的文件
                  - exclude: 正则表达式, 表示排除掉的文件
                  - use: loader名字数组, 加载顺序从右往左
                     - loader
                        - 处理css: style-loader css-loader
                        - 处理样式兼容性css: 处理css postcss-loader, 还需安装autoprefixer, 需在根目录下创建postcss.config.js配置文件

const autoprefixer = require("autoprefixer")
module.exports = {
  plugins: [autoprefixer]
}

                        - 处理less: 处理样式兼容性css less-locaer, 还需安装less模块
                        - 处理sass: 处理样式兼容性css sass-loader, 还需安装sass模块
                        - 处理图片: file-loader
                        - 处理base64图片: url-loader, 还需安装file-loader![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428088185-1e351ae2-ec56-4c0c-9f10-8ddd2e905f97.png#clientId=udf2dd84a-6d0f-4&from=paste&height=250&id=ud969ba2d&margin=%5Bobject%20Object%5D&originHeight=250&originWidth=570&originalType=url&ratio=1&status=done&style=none&taskId=u38a1b36c-9de9-4244-9d93-0265cac6057&width=570)
                        - 处理字体: 同图片
                        - 处理base64字体: 同图片![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428088253-bb7bfa6f-05bc-45c9-b9f1-33475eb856b0.png#clientId=udf2dd84a-6d0f-4&from=paste&height=83&id=u6cb30628&margin=%5Bobject%20Object%5D&originHeight=83&originWidth=776&originalType=url&ratio=1&status=done&style=none&taskId=u754357fd-8fa2-442d-8bae-6261577ffeb&width=776)
                        - 处理js高级语法: babel-loader, 还需安装 @babel/core, @babel/runtime, @babel/preset-env, @babel/plugin-transform-runtime, @babel/plugin-proposal-class-properties, 还需在根目录下创建babel.config.js配置文件![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428088362-eef80a85-9ec1-4019-8722-e20b5a3b04ea.png#clientId=udf2dd84a-6d0f-4&from=paste&height=58&id=u8aae2a45&margin=%5Bobject%20Object%5D&originHeight=58&originWidth=483&originalType=url&ratio=1&status=done&style=none&taskId=uf9060ac6-7a5e-4274-90c9-4d5aed5dc5a&width=483)

const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
      corejs: "3.6.4",
    },
  ],
];
const plugins = [
  "@babel/plugin-transform-runtime",
  "@babel/plugin-proposal-class-properties"
]
module.exports = { presets, plugins };

                        - 处理vue单文件组件: 看vue官网
         - plugins: 内置插件数组
            - 内置插件
               - html-webpack-plugin: html文件打包
                  - 安装
                     - npm i html-webpack-plugin -D
                  - 插件生成
                     - const HtmlWebpackPlugin = require("html-webpack-plugin")
                     - const htmlPlugin = new HtmlWebpackPlugin({ template: 源html, filename: 打包后的html文件名 })
- 脚本
   - webpack: 打包
- 脚本插件
   - webpack-dev-server: 热加载插件
      - 安装
         - npm i webpack-dev-server -D
      - 脚本
         - webpack serve: 开启一个热加载服务器
            - 可选项
               - --open: 自动打开浏览器
               - --host 主机: 指定主机
               - --port 端口号: 指定端口号
# 抽象
## UI

- 系统
   - 构成
      - 常量
      - 状态
      - 副作用
      - 函数
      - 域外
   - 组成
      - 接口
      - 生命周期
   - 例子
      - UI
         - 构成
            - 常量
               - html
               - css
               - 自定义常量
            - 状态
               - 非被控状态
               - 被监听状态
               - 属性状态
               - 路由状态
               - 全局状态
            - 副作用
               - 自定义函数
            - 函数
               - 渲染函数
                  - 模板语法
                     - 插值
                     - 条件渲染
                     - 列表渲染
               - 自定义函数
            - 域外
               - 子组件属性状态控制接口(默认)
               - 父组件接口
               - 全局接口
               - 路由接口
               - 网络接口
         - 组成
            - 接口
               - 父组件(默认属性状态的控制接口交给父组件)
               - 子组件
               - DOM
            - 生命周期
               - 状态更新(默认被监听状态的更新触发监听属性的更新)
               - 组件创建
               - 组件销毁



- 标识
   - 可靠的标识
   - 不可靠的标识
      - https: 客户端, 服务端标识
      - 鉴权: 用户标识
         - 例子
            - session
            - jwt
               - 构成: 三段信息构成, 每段都是json对象采用base64进行加密, 最后将三段用.连接起来![](https://cdn.nlark.com/yuque/0/2021/png/2353258/1619428089333-70174626-57c0-42c2-844c-7957b3e14eac.png#clientId=udf2dd84a-6d0f-4&from=paste&height=136&id=u48a6586b&margin=%5Bobject%20Object%5D&originHeight=136&originWidth=728&originalType=url&ratio=1&status=done&style=none&taskId=uc4e8dd0a-1065-4fc9-85d4-f8657880463&width=728)
                  - 头部
                     - typ: 声明类型
                     - alg: 加密算法
                  - 载荷
                     - 标准中注册的声明
                        - iss: jwt签发者
                        - sub: jwt所面向的用户
                        - aud: 接收jwt的一方
                        - exp: jwt的过期时间, number类型, 单位为秒
                        - nbf: 定义在什么时间之前, 该jwt都是不可用的
                        - iat: jwt的签发时间
                        - jti: jwt的唯一身份标识，主要用来作为一次性token,从而回避重放攻击
                     - 公共的声明
                     - 私有的声明
                  - 签名
                     - 头部指定的加密算法(base64后的头部和载荷用.进行连接的字符串, 密钥作为盐)
               - 用法
                  - 在请求头中加入Autho
            - oauth
      - 验证码: 人机标识
      - 密码学
         - 对称加密
         - 非对称加密
         - 不可逆加密



- 权限管理
   - 用户
   - 角色
   - 权限



- 版本管理
   - 实时数据
      - 生命周期最短的数据记录点
      - 生命周期在每次设置数据之间
      - 数据记录点的范围为 本实时数据
      - 实时的数据
   - 暂存数据
      - 生命周期较短的数据记录点
      - 生命周期在两个版本数据提交之间
      - 数据记录点的范围为 最新提交到暂存数据的实时数据 和 本版本数据
      - 用于实时数据到版本数据的中间站,暂存数据可从实时数据提交, 也可提交到版本数据 记录着暂存数据与实时数据和提交数据的差异
   - 版本数据
      - 生命周期最长的数据记录点
      - 生命周期在该数据的创建到销毁全过程
      - 数据记录点的范围为 所有从暂存数据提交的版本数据
      - 每从暂存数据提交一次生成一个数据版本, 可将版本指针跳转到任意版本, 可从任意版本生成一个新的分支, 可将两个分支版本指针指向的版本进行合并
- IO
   - 阻塞式IO
   - 非阻塞式IO
   - 多路复用IO
      - select
      - poll
      - epoll
   - 信号驱动式IO
   - 异步IO



- 代数学
   - 研究方向: 代数运算
   - 学科
      - 线性代数
      - 抽象代数(近世代数)
      - 数论
         - 代数数论
         - 解析数论
      - 代数几何
   - 概念
      - 群
         - 正四面体的旋转
         - 模(线性代数一般化理论)
      - 环
         - 加和乘
      - 域
         - 四则运算
            - 伽瓦罗理论
- 几何学
   - 研究方向: 图形
   - 学科
      - 流形
      - 集合与拓扑
      - 拓扑学
         - 欧拉公式
      - 微分几何
         - 曲率
         - 图形分类(黎曼几何)
   - 概念
      - 流形
- 分析学
   - 研究方向: 函数运算
   - 学科
      - 微积分: 对函数的运算
      - 向量分析, 向量积分(水流的表示, 场论)
      - 复分析
         - 欧拉公式
      - 微分方程: 求解对象为函数
      - 偏微分方程
      - 勒贝格积分
      - 泛函分析: 全体函数组成的空间
      - 傅里叶分析
         - 傅里叶变换
- 应用数学
   - 普通
      - 概率论
      - 数理统计
      - 随机过程
   - 计算数学
   - 图论
   - 数值分析
- 基础数学
   - 集合论
   - 逻辑学
   - 范畴论
- 离散数学
   - 集合论与图论
   - 数理逻辑
   - 近世代数
   - 形式语言与自动机
- 抽象表示
   - 计算机的数学模型: 图灵机
### 
