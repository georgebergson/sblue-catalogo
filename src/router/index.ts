import { createRouter, createWebHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../views/Layout/Layout.vue'),
        children: [
            {
                path: 'nome',
                component: () => import('../views/Home/Home.vue')
            },
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router