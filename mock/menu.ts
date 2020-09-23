export default {
    'GET /api/currentMenu': [
        {
            path: '/',
            redirect: '/welcome',
        },
        {
            path: '/welcome',
            name: 'welcome',
            icon: 'smile',
            component: './Welcome',
            routes: [
                {
                    path: '/welcome/welcome',
                    name: 'two',
                    exact: true,
                    component: './ListTableListTwo'
                },
            ],
        },
    ]
}