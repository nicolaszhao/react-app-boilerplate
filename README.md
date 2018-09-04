# React Redux Spa Boilerplate

A React Single-page application boilerplate, and with Redux

## 内置功能

* [x] ES6 ~ ES8, ES Stage-0 语法和特性
* [x] SASS
* [x] CSS Modules
* [x] px2rem + flexible.js 修复版（之后会用 vw 版） ，参考 [postcss-px2rem](https://www.npmjs.com/package/postcss-px2rem), [px2rem](https://www.npmjs.com/package/px2rem)
* [x] Autoprefixer
* [x] [react-hot-loader](https://www.npmjs.com/package/react-hot-loader)
* [x] webpack v4.0（已配置生产环境代码分离）
* [x] 代码提交 ESLint 自动审查

## 使用

### 启动开发环境

```shell
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

### 编译目标浏览器的代码

同时修改 `.babelrc` 和 `.browserslistrc`:

```js
"presets": [
  [
    "env",
    {
      "targets": {
        "browsers": [
        "> 1%",
        "last 5 versions",
        "ie 11"
       ]
      },
      "modules": false,
      "useBuiltIns": true
    }
  ]
]
```

```shell
# Browsers that we support

> 1%
last 5 versions
ie 11
```

可参考：[babel-preset-env](https://babeljs.io/docs/en/babel-preset-env), [browserslist](https://github.com/ai/browserslist)

### 修改 px2rem 的初始值

```js
const px2rem = require('postcss-px2rem');

module.exports = {
  plugins: [
    // ... other plugins
    px2rem({
      remUnit: 75
    })
  ]
};
```

可参考：[postcss-px2rem](https://www.npmjs.com/package/postcss-px2rem) 文档

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
