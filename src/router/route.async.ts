// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router'

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'home',
      icon: '',
    },
    component: () => import('@/layout/index.vue'),
  },
]

export default asyncRoutes
