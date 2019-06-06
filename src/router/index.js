import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import appModule from './appModule'
import adminModule from './adminModule'

const constantRouterMap = [
  ...appModule,
  ...adminModule
]

const createRouter = () => new Router({
  mode: 'history', // 需要后台支持
  routes: constantRouterMap,
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
