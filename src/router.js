const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '',
        },
        component: (resolve) => require(['./views/login.vue'], resolve)
    },
    {
        path: '/student-view',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/student-list.vue'], resolve)
    }
];
export default routers;