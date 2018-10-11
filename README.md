# {{title}}

{{{description}}}

## 内置功能

* [x] 支持 ES6 ~ ES8, 以及部分 ES Stage-3 语法和特性
* [x] [sanitize.css](https://github.com/csstools/sanitize.css) - 面向移动开发的默认样式重置
* [x] SASS + [CSS Modules](https://github.com/css-modules/css-modules)
* [x] Redux + [Redux-Actions](https://redux-actions.js.org/) + [Redus-Saga](https://redux-saga-in-chinese.js.org/) - 应用数据管理
* [x] React-Router v4+
* [x] [axios](https://github.com/axios/axios) - 最流行的 Ajax 数据处理（内部使用 [tote-box](https://github.com/nicolaszhao/tote-box) 封装成 `axiosRequest`）
* [x] [mockjs](http://mockjs.com/) - 开发环境智能 mock API 数据
* [x] px2rem + flexible.js 修复版（需单独启用，[见底下的说明](#启用-px2rem--flexiblejs)） ，参考 [postcss-px2rem](https://www.npmjs.com/package/postcss-px2rem), [px2rem](https://www.npmjs.com/package/px2rem)
* [x] Autoprefixer
* [x] [react-hot-loader](https://www.npmjs.com/package/react-hot-loader)
* [x] webpack v4.0+（已用 [webpack-config-zero](https://www.npmjs.com/package/webpack-config-zero) 封装成配置器）
* [x] 代码提交 ESLint 自动审查

### 其他已包含的主要模块

* tote-box
* react-tote-box
* react-transition-group
* react-loadable
* [classnames](https://www.npmjs.com/package/classnames)
* [mobile-detect](https://www.npmjs.com/package/mobile-detect)
* [urijs](https://www.npmjs.com/package/urijs)
* lodash

## 快速上手

### 启动开发环境

```shell
# http://localhost:3003/
npm start
```

### 生产环境构建

```shell
npm run build
```

## 目录结构

```shell
.
├── dist
│   └── // 资源构建输出
├── lib
│   └── // 非模块文件
├── src
│   ├── api
│   │   └── // 后端接口
│   ├── components
│   │   └── // 共享组件
│   ├── config
│   │   └── // 运行时配置
│   ├── constants
│   │   └── // 共享常量
│   ├── containers
│   │   └── // 容器组建
│   ├── modules
│   │   └── // 业务模块
│   ├── styles
│   │   └── // global 样式（开启 CSS Modules 时，该目录下 css 不需要声明 global:）
│   └── utils
│       └── // 工具模块，不参杂任何业务（可日后抽离到业务库的）
└── webpack.config.js
```

## 修改默认配置

### 编译转换目标浏览器的代码

修改 `.browserslistrc`:

```shell
# Browsers that we support

> 1%
last 5 versions
ie 11
```

可参考：[browserslist](https://github.com/ai/browserslist)

### 启用 `px2rem` + `flexible.js`

**除非项目元素复杂度和像素精准化要求较高，否则不建议开启该功能，根据以下原则可能更灵活：**

* font-size 定义为 rem，相对 :root 做缩放
* 边框等定义为 px，如有缩放要求请参照第 3 条原则
* 其他属性定义为 em，相对于当前元素的 font-size

修改 `postcss.config.js`:

```diff
+ const px2rem = require('postcss-px2rem');

  module.exports = {
    plugins: [
-     require('autoprefixer')
+     require('autoprefixer'),
+     px2rem({
+       remUnit: 75 // remUnit 根据设计稿情况设置
+     })
    ]
  };
```

修改 `src/containers/[PageName]/index.html`：

```diff
  <!DOCTYPE html>
  <html lang="zh-Hans">

  <head>
    <meta charset="UTF-8">
-   <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover">
    <title>...</title>
+  	<script src="lib/flexible.min.js"></script>
  </head>

  ...

  </html>

```

删除  `src/styles/base.scss` 中 `:root`  的基准字号：

```diff
- :root {
-   font-size: 0.875em;
- }
```

使用 px2rem 如何在 css 中定义元素尺寸请参考：[postcss-px2rem](https://www.npmjs.com/package/postcss-px2rem) 

### 修改 webpack.config.js 配置

```js
const zeroConfig = require('webpack-config-zero');

module.exports = zeroConfig({
  /* your options */
});
```

或者：

```js
const zeroConfig = require('webpack-config-zero');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(
  zeroConfig( /* options */ ), 
  { /* webpack config options */ }
);
```

参考：[webpack-config-zero](https://www.npmjs.com/package/webpack-config-zero)
