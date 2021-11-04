# HTML
## 构成
```html
<!DOCTYPE>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```
## 元数据
- `<title></title>`: 网页标题
- `<base></base>`: 基准URL
- `<meta>`: 元信息
  - `<meta charset="urf-8">`: 字符集
  - `<meta name="key" content="value">`: 添加name键值对
    - author
    - description
    - viewport
    - twitter:title
  - `<meta property="key" content="value">`: 添加property键值对
    - og:image
    - og:description
    - og:title
  - `<meta http-equiv="key" content="value">`: 添加http-equiv键值对
- `<link rel="icon" href="http://www.baidu.com/1.png">`: 一些链接
  - rel: icon, shortcut icon, stylesheet
- `style`: css代码
- `script`
  - src: js代码引入
## 文字
- `h1-h6`, `p`: 标题, 段落
- `address`: 作者、联系方式等信息
- `blockquote`: 块级引用
- `ul`, `ol`, `li`: 无序列表, 有序列表, 列表项
- `dl`, `dt`, `dd`: 描述列表, 描述项, 描述内容
- `em`, `strong`, `q`, `abbr`, `sub`, `sup`: 斜体强调, 粗体强调, 行内引用, 缩略简写, 上标, 下标
- `pre`, `code`: 原格式, 代码段
- `a`: 链接
  - href: 链接地址, 锚点地址#<锚点>, 邮件地址mailto:[<邮件地址>]
  - download: 若链接时下载一个文件, 则此属性可提供文件名
- `br`: 换行
- `hr`: 分割线
## 嵌入
- `figure`, `figcaption`: 为内容提供补充说明
- `img`: 图片嵌入
  - src: URL路径
  - alt: 文字替代描述
  - srcset: `<url> <size>, ...`, 多种分辨率大小图片的源
  - sizes: `<media> <size>`, 媒体查询匹配图片大小
  - width, height: 宽高, 建议css替换之
- `picture`: 图片嵌入, 内部可包含多个source
  - 内嵌`source`标签
    - media: 媒体查询
    - srcset: URL路径
  - 内嵌`img`标签: 不支持时的兜底
- `audio`, `video`: 音视频嵌入及源指定, 文件中包含三条轨道音频, 视频, 文本轨道
  - src: URL路径
  - poster: 封面的URL路径
  - preload: 是否缓冲, none不缓冲, auto页面加载后缓冲媒体文件, metadata仅缓冲文件元数据
  - controls: 是否添加默认控制器
  - autoplay: 是否自动播放
  - loop: 是否循环播放
  - muted: 是否静音
- `source`: 在`audio`, `video`中指定源
  - src: URL路径
  - type: 类型
- `track`: 在`audio`, `video`中指定文字轨道
  - src: URL路径, vtt格式文件
  - srclang: 源的语系
  - label: 轨道的标签
  - kind: subtitles表示字幕, captions表示翻译, timed descriptions表示文字转音频
- `svg`: 嵌入矢量图, svg文件也可作为图片引入(img中的src, background-image中的url)
- `iframe`: 网页嵌入
  - src: URL路径
  - allowfullscreen: 全屏模式
  - width, height: 宽高, 建议css替换之
- `embed`, `object`: 通用嵌入, 逐渐过时
- `canvas`
## 表格
- `table`: 表格
- `tr`: 行
- `th`: 表头元素
- `td`: 表格元素
## 表单
- form, label, input, button, select, option, datalist, textarea, progress
## 结构
- `header`: 页眉
- `nav`: 导航栏
- `main`, `article`, `aside`, `section`: 主内容, 文章, 侧边栏, 分块
- <footer></fotter>: 页脚
## 无语义
- `div`: 块级元素
- `span`: 内联元素
## 通用属性
- id: 锚点
- class: 分类
- lang="zh-CN": 设定标签语言, 若在html中设置则表示整个文档的主语言
- title: 鼠标悬停时显示的内容