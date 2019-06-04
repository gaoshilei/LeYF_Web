import AppLayout from '@/layout/AppLayout'

export default [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
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
        path: '',
        component: () => import('@/app/article/article'),
        name: 'article',
      }
    ]
  },
  {
    path: '/archive',
    component: AppLayout,
    children: [
      {
        path: '',
        component: () => import('@/app/archive/archive'),
        name: 'archive',
      }
    ]
  },
  {
    path: '/category',
    component: AppLayout,
    children: [
      {
        path: '',
        component: () => import('@/app/category/category'),
        name: 'category',
      },
      {
        path: ':name',
        component: () => import('@/app/category/categoryDetail'),
        name: 'categoryDetail',
      }
    ]
  },
  {
    path: '/tag',
    component: AppLayout,
    children: [
      {
        path: '',
        component: () => import('@/app/tag/tag'),
        name: 'tag',
      },
      {
        path: ':name',
        component: () => import('@/app/tag/tagDetail'),
        name: 'tagDetail',
      }
    ]
  },
  {
    path: '/about',
    component: AppLayout,
    children: [
      {
        path: '',
        component: () => import('@/app/about/about'),
        name: 'about',
      },
    ]
  },
]

