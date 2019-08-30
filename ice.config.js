const path = require('path');

// 引入fusion自定义主题
//@alifd/theme-10251

module.exports = {
  // 1. 基础配置项
  entry: 'src/index.jsx',
  publicPath: './',
  // 2. 插件配置
  plugins: [
    ['ice-plugin-fusion', {
      themePackage: '@icedesign/theme'
      // [{
      //   name: '@icedesign/theme',
      //   default: true,
      //   themeConfig: {
      //     'custom-color': '#000',
      //   },
      // } ,{
      //   name: '@alifd/theme-ice-orange',
      //   themeConfig: {
      //     'custom-color': '#fff',
      //   },
      // }],
    }],
    ['ice-plugin-moment-locales', {
      locales: ['zh-cn'],
    }],
  ],
  alias: {
    '@': path.resolve(__dirname, './src/'),
  },
};
