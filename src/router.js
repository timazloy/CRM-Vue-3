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
    ]
})


