// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: 'feedback',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
    id: 'Menu_hmj4o',
  },

  {
    name: 'help',
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
      { name: 'monitor', path: '/dashboard/monitor', id: 'Menu_efdml' },
    ],
    id: 'Menu_j0ovk',
  },
  {
    name: 'chart',
    path: '/chart',
    icon: 'chart',
    children: [
      { name: 'basic', path: '/chart/basic', id: 'Menu_nynhi' },
      { name: 'general', path: '/chart/general', id: 'Menu_b0hsj' },
    ],
    id: 'Menu_hxt8d',
  },
  {
    name: '表格页',
    path: '/table',
    icon: 'cascades',
    children: [
      { name: 'basic', path: '/table/basic', id: 'Menu_iilg0' },
      { name: 'general', path: '/table/general', id: 'Menu_u6ebc' },
      { name: 'tree', path: '/table/tree', id: 'Menu_4v9d4' },
    ],
    id: 'Menu_gdfmd',
  },
  {
    name: '列表页',
    path: '/list',
    icon: 'menu',
    children: [
      { name: 'basic', path: '/list/basic', id: 'Menu_santh' },
      { name: 'general', path: '/list/general', id: 'Menu_3ny47' },
    ],
    id: 'Menu_16xkl',
  },
  {
    name: 'profile',
    path: '/profile',
    icon: 'content',
    children: [
      { name: 'basic', path: '/profile/basic', id: 'Menu_q787l' },
      { name: 'terms', path: '/profile/general', id: 'Menu_npem3' },
    ],
    id: 'Menu_gdvy6',
  },
  {
    name: 'result',
    path: '/result',
    icon: 'question',
    children: [
      { name: 'success', path: '/result/success', id: 'Menu_wpkox' },
      { name: 'fail', path: '/result/fail', id: 'Menu_wugwk' },
    ],
    id: 'Menu_djtgx',
  },
  {
    name: 'account',
    path: '/account',
    icon: 'yonghu',
    children: [{ name: 'setting', path: '/account/setting', id: 'Menu_9ea3i' }],
    id: 'Menu_vswbp',
  },
  {
    name: 'exception',
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
