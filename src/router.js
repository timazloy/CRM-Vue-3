import Home from './views/Home.vue'
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

export default  createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
            name: 'vHome'
        },
        {
            path: '/login',
            name: 'vLogin',
            meta: {layout: 'empty'},
            component: () => import('./views/Login.vue')
        },
        {
            path: '/categories',
            name: 'vCategories',
            meta: {layout: 'main'},
            component: () => import('./views/Categories.vue')
        },
        {
            path: '/register',
            name: 'vRegister',
            meta: {layout: 'empty'},
            component: () => import('./views/Register.vue')
        },
        {
            path: '/record',
            name: 'vRecord',
            meta: {layout: 'main'},
            component: () => import('./views/Record.vue')
        },
        {
            path: '/planning',
            name: 'vPlanning',
            meta: {layout: 'main'},
            component: () => import('./views/Planning.vue')
        },
        {
            path: '/profile',
            name: 'vProfile',
            meta: {layout: 'main'},
            component: () => import('./views/Profile.vue')
        },
        {
            path: '/history',
            name: 'vHistory',
            meta: {layout: 'main'},
            component: () => import('./views/History.vue')
        },
        {
            path: '/detail-record',
            name: 'vDetailRecord',
            meta: {layout: 'main'},
            component: () => import('./views/DetailRecord.vue')
        },
    ]
})


