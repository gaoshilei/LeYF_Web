import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import appModule from './appModule'
import adminModule from './adminModule'

const constantRouterMap = [
  ...appModule,
  ...adminModule,
];

export default new Router({
  mode: 'history', // 需要后台支持
  routes: constantRouterMap
})
