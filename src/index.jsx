import React from 'react';
import ReactDOM from 'react-dom';

import './global.scss';

// 引入基础配置文件
import router from './router';

const ICE_CONTAINER = document.getElementById('ice-container');

if (!ICE_CONTAINER) {
  throw new Error('当前页面不存在 <div id="ice-container"></div> 节点.');
}

ReactDOM.render(router(),ICE_CONTAINER);
