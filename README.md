<p align="center">
  <a href="https://alibaba.github.io/ice">
    <img alt="ICE" src="https://gw.alicdn.com/tfs/TB1FEW2nfDH8KJjy1XcXXcpdXXa-487-132.svg" width="200">
  </a>
</p>
<p align="center">赋能企业中后台建设</p>
<p align="center">
  <a href="https://github.com/alibaba/ice/blob/master/LICENSE"><img src="https://img.shields.io/badge/lisense-MIT-brightgreen.svg"></a>
</p>

## 简介

基于海量高质量可复用区块，通过 GUI 工具快速搭建的一套中后台模板。

![ice-design-pro](https://img.alicdn.com/tfs/TB1_bulmpOWBuNjy0FiXXXFxVXa-1920-1080.png)

## 技术点

- icedesign
- react
- redux
- redux-thunk
- icestore
- react-router-dom v4
- axios
- bizcharts
- webpack v4
- mock.js
- ice-scripts
- etc...

## 使用

1. (推荐) GUI 工具使用: 下载 [iceworks](https://alibaba.github.io/ice/#/iceworks)
2. Cli 命令使用:

```bash
$ npm start      // 启动预览服务器
$ npm run build  // 构建 dist
```

## 相关文档

- [ICE Design Pro 使用文档](https://github.com/alibaba/ice/wiki#ice-design-pro-%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3)

## 目录结构
```ice-design-pro
├── build       // 打包资源
├── mock        // 模拟数据
├── public      // 静态资源
├── src
│   ├── api                 // 接口定义
│   ├── components          // 公共组件
│   ├── layouts             // 通用布局
│   ├── pages               // 页面
│   ├── store               // 全局 store
│   ├── utils               // 工具函数
│   ├── configureStore.js   // redux 入口配置
│   ├── reducers.js         // reducers 入口配置
│   ├── index.js            // 应用入口
│   ├── menuConfig          // 导航配置
│   ├── routerConfig        // 路由配置
│   └── router.jsx          // 路由配置
├── tests                   // 测试
├── .gitignore              // git 忽略目录配置
├── .editorconfig           // 代码风格配置
├── .eslintignore           // eslint 忽略目录配置
├── .eslintrc               // eslint 配置
├── package.json            // package.json
└── README.md               // 项目说明
```