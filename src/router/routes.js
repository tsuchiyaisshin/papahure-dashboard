export default [
    {
        path: '/',
        name: 'BaseTemplate',
        component: () => import('../components/templates/BaseTemplate'),
        children: [
            {
                path: '/',
                name: 'Name',
                component: () => import('../components/pages/Home')
            },
            {
                path: '/register',
                name: 'Register',
                component: () => import('../components/pages/Register'),
            }
        ]
    },
]
