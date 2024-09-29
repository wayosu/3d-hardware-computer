import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./views/Home.vue'),
    },
    {
        path: '/kompetensi-dasar',
        name: 'kompetensi-dasar',
        component: () => import('./views/KompetensiDasar.vue'),
    },
    {
        path: '/materi-belajar',
        name: 'materi-belajar',
        component: () => import('./views/MateriBelajar.vue'),
    },
    {
        path: '/materi-belajar/:slug',
        name: 'materi-belajar-detail',
        component: () => import('./views/DetailMateri.vue'),
        props: true,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
