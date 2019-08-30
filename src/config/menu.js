// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '反馈',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
    id: 'Menu_hmj4o',
  },

  {
    name: '帮助',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
    id: 'Menu_xmo1g',
  },
];

const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'home2',
    children: [
      { name: '监控页', path: '/dashboard/monitor', id: 'Menu_efdml' },
    ],
    id: 'Menu_j0ovk',
  },
  {
    name: '图表页',
    path: '/chart',
    icon: 'chart',
    children: [
      { name: '基础图表', path: '/chart/basic', id: 'Menu_nynhi' },
      { name: '通用图表', path: '/chart/general', id: 'Menu_b0hsj' },
    ],
    id: 'Menu_hxt8d',
  },
  {
    name: '表格页',
    path: '/table',
    icon: 'cascades',
    children: [
      { name: '基础表格', path: '/table/basic', id: 'Menu_iilg0' },
      { name: '通用表格', path: '/table/general', id: 'Menu_u6ebc' },
      { name: '树型表格', path: '/table/tree', id: 'Menu_4v9d4' },
    ],
    id: 'Menu_gdfmd',
  },
  {
    name: '列表页',
    path: '/list',
    icon: 'menu',
    children: [
      { name: '基础列表', path: '/list/basic', id: 'Menu_santh' },
      { name: '通用列表', path: '/list/general', id: 'Menu_3ny47' },
    ],
    id: 'Menu_16xkl',
  },
  {
    name: '内容页',
    path: '/profile',
    icon: 'content',
    children: [
      { name: '基础详情页', path: '/profile/basic', id: 'Menu_q787l' },
      { name: '条款协议页', path: '/profile/general', id: 'Menu_npem3' },
    ],
    id: 'Menu_gdvy6',
  },
  {
    name: '结果页',
    path: '/result',
    icon: 'question',
    children: [
      { name: '成功', path: '/result/success', id: 'Menu_wpkox' },
      { name: '失败', path: '/result/fail', id: 'Menu_wugwk' },
    ],
    id: 'Menu_djtgx',
  },
  {
    name: '个人页',
    path: '/account',
    icon: 'yonghu',
    children: [{ name: '个人设置', path: '/account/setting', id: 'Menu_9ea3i' }],
    id: 'Menu_vswbp',
  },
  {
    name: '异常页',
    path: '/exception',
    icon: 'notice',
    children: [
      { name: '204', path: '/exception/204', id: 'Menu_iuxp9' },
      { name: '403', path: '/exception/403', id: 'Menu_ee256' },
      { name: '404', path: '/exception/404', id: 'Menu_1ykur' },
      { name: '500', path: '/exception/500', id: 'Menu_1lu7i' },
    ],
    id: 'Menu_gupcm',
  },
];

export { headerMenuConfig, asideMenuConfig };
