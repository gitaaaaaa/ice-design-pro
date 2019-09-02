import React from 'react';

import UserLayout from '@/layouts/UserLayout';
import BasicLayout from '@/layouts/BasicLayout';

const UserLogin = React.lazy(() => import('@/pages/UserLogin')); // 登录
const UserRegister = React.lazy(() => import('@/pages/UserRegister')); // 注册

const Dashboard = React.lazy(() => import('@/pages/Dashboard'));
const Charts = React.lazy(() => import('@/pages/Charts'));
const BasicCharts = React.lazy(() => import('@/pages/BasicCharts'));
const Terms = React.lazy(() => import('@/pages/Terms'));
const Result = React.lazy(() => import('@/pages/Result'));
const BasicList = React.lazy(() => import('@/pages/BasicList'));
const ProjectList = React.lazy(() => import('@/pages/ProjectList'));
const BasicTable = React.lazy(() => import('@/pages/BasicTable'));
const GeneralTable = React.lazy(() => import('@/pages/GeneralTable'));
const TreeTable = React.lazy(() => import('@/pages/TreeTable'));
const Profile = React.lazy(() => import('@/pages/Profile'));
const Setting = React.lazy(() => import('@/pages/Setting'));
const Fail = React.lazy(() => import('@/pages/Fail'));
const Empty = React.lazy(() => import('@/pages/Empty'));
const Forbidden = React.lazy(() => import('@/pages/Forbidden'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));
const ServerError = React.lazy(() => import('@/pages/ServerError'));
// 路由配置
const routerConfig = [
  {
    path: '/user',
    // 路由组的 component 必须是布局组件
    component: UserLayout,
    children: [
      // 路由的 component 必须是页面组件
      { path: '/login', component: UserLogin },
      { path: '/register', component: UserRegister },
      // Redirect 重定向
      { path: '/', redirect: '/user/login' },
      { component: NotFound },
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      { path: '/dashboard/monitor', component: Dashboard },
      { path: '/chart/general', component: Charts },
      { path: '/chart/basic', component: BasicCharts },
      { path: '/list/basic', component: BasicList },
      { path: '/list/general', component: ProjectList },
      { path: '/result/success', component: Result },
      { path: '/result/fail', component: Fail },
      { path: '/table/basic', component: BasicTable },
      { path: '/profile/basic', component: Profile },
      { path: '/profile/general', component: Terms },
      { path: '/table/general', component: GeneralTable },
      { path: '/account/setting', component: Setting },
      { path: '/exception/500', component: ServerError },
      { path: '/exception/403', component: Forbidden },
      { path: '/exception/204', component: Empty },
      { path: '/exception/404', component: NotFound },
      { path: '/table/tree', component: TreeTable },
      { path: '/', redirect: '/dashboard/monitor' },
      // 404 没有匹配到的路由
      { component: NotFound },
    ],
  },
];

export default routerConfig;
