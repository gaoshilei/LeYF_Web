import AppLayout from '@/Layout/AppLayout/AppLayout'

export default [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/',
        component: () => import('@/app/index'),
        name: 'home',
      }
    ]
  },
  {
    path: '/article',
    component: AppLayout,
    children: [
      {
        path: '/',
        component: () => import('@/app/article/article'),
        name: 'article',
      }
    ]
  },
  {
    path: '/category',
    component: AppLayout,
    children: [
      {
        path: '/',
        component: () => import('@/app/category/category'),
        name: 'category',
      }
    ]
  },
]

