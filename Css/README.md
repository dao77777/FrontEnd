# CSS
## 引入
- 内部: `<style>css代码</style>`
- 外部: `<link rel="stylesheet" href="styles/styles.css">`
- 内联: `<div style="color: blue; backgound-color: yellow"></div>
## 层叠与继承
- 冲突规则
  - 优先级: !important>内联>ID选择器>类选择器, 属性选择器, 伪类>元素, 伪元素选择器
  - 层叠: 同优先级则卸载后面的生效
  - 继承
## 选择器
- 通配: *
- 元素: div
- id: #id
- class: .class
- 属性
  - `[type]`: 含有该属性即可
  - `[type="xxx"]`: 精确匹配
  - `[type^="xxx"]`: 前缀匹配
  - `[type$="xxx"]`: 后缀匹配
  - `[type*="xxx"]`: 任意匹配
- 伪类
  - :active: 被激活的元素的样式
  - :focus: 拥有键盘输入焦点的元素的样式
  - :hover: 指针浮于元素上方时的样式
  - :first-child
  - :last-child
  - :nth-child(<第几个>)
  - :nth-last-child(<第几个>)
  - :only-child
  - :not()
  - :invalid: 未通过验证的表单元素, 仅在`input`或其他`form`标签中生效
  - :link, :visited: 仅在`a`标签中生效
- 伪元素
  - ::before, ::after: 和content属性一起使用
  - ::first-letter
  - ::first-line
  - ::selection
  - ::placeholder: 仅在`<input type="text|textarea">`中生效
  - ::-webkit-slider-thumb: 仅在`<input type="range">`中生效
- 并集: .red, #container, span
- 交集
  - div.red: 交集
  - div .red: 后代交集
  - div > .red: 子代交集
  - div ~ span: 兄弟交集
  - div + span: 相邻交集
## 盒模型
- 显示类型
  - display
    - block, inline, inline-block, flex, inline-flex, grid
  - 外部显示类型: block, inline
  - 内部显示类型: 文档流, flex, grid
- 盒模型
  - box-sizing
    - border-box, content-box(默认)
  - border <width> <style> <color>
  - border-radius
  - padding
  - margin
  - 外边距折叠
## 布局
- position
## 文字
- writing-mode
## 溢出
- overflow
## 背景
- background-color
- background-image
- background-repeat
- background-size
- background-position
- background-attachment
## 属性
- width
- height
- transform
- color
- text-decoration
- opacity
- object-fit
- all: unset: 全部值默认
- 速记属性
  - font
  - background
  - margin
  - padding
  - border
## 值
- 普通
  - 关键字
    - inherit: 继承父元素样式
    - initial: 浏览器默认样式
    - unset: 默认样式
  - 数值
- 函数： calc(), rotate(0.8turn), url()
- 数字
  - 整数
  - 小数
  - 带单位数字
    - 长度
      - 绝对长度: cm, mm, Q, in, pc, pt, px
      - 相对长度: em, ex, ch, rem, lh, vw, vh, vmin, vmax
  - 百分比
- 字符串
- 颜色
  - 十六进制
  - rgb, rgba
  - hsl, hsla
## @规则
- @import '<css文件>': 导入css样式
- @media (<查询条件>): 媒体查询, 查询条件如 min-width: 30em