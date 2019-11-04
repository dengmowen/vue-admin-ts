import Vue from 'vue';
import Router from 'vue-router';

import demoRouterModule from './modules/demoRouterModule'; // 用户

Vue.use(Router);

const constantRouterMap = [
    ...demoRouterModule,
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue')
    },
    {
        path: '*',
        component: () => import('../views/404.vue')
    }
];

const router =  new Router({
    mode: 'history', // 线上用history模式
    base: '/',
    scrollBehavior: () => ({
        x: 0,
        y: 0
    }),
    routes: constantRouterMap
});

export default router;
