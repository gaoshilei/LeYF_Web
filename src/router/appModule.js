import AppLayout from '@/Layout/AppLayout/AppLayout'

export default [
  {
    path: '/',
    component: AppLayout,
    name: 'home',
    children: [
      {
        path: '/',
        component: () => import('@/app/index'),
        name: 'index',
      }
    ]
  },
  {
    path: '/article',
    component: AppLayout,
    name: 'article',
    children: [
      {
        path: '/',
        component: () => import('@/app/article/article'),
        name: 'index',
      }
    ]
  },
]

