export default [
  {
    path: '/',
    name: 'BaseTemplate',
    component: () => import('../components/templates/BaseTemplate'),
    children: [
      {
        path: '/',
        name: 'Name',
        component: () => import('../components/pages/Home'),
      },
      {
        path: '/top',
        name: 'Top',
        component: () => import('../components/templates/MainTemplate'),
        children: [
          {
            path: '/register',
            name: 'Register',
            component: () => import('../components/pages/Register'),
          },
          {
            path: '/main',
            name: 'Main',
            component: () => import('../components/pages/Main'),
          },
        ],
      },
    ],
  },
]
