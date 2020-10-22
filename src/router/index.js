import Vue from 'vue'
import VueRouter from 'vue-router'
import notLoggedHome from '../views/notLogged/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'notLoggedHome',
        component: notLoggedHome
    },
    {
        path: '/ayuda',
        name: 'Ayuda',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/notLogged/Ayuda.vue')
    },
    {
        path: '/quienes_somos',
        name: 'QuienesSomos',
        component: () => import(/* webpackChunkName: "about" */ '../views/notLogged/QuienesSomos.vue')
    },
    {
        path: '/loggedhome',
        name: 'LoggedHome',
        component: () => import(/* webpackChunkName: "about" */ '../views/loggedIn/Home.vue')
    },
    {
        path: '/ejercicios',
        name: 'Ejercicios',
        component: () => import(/* webpackChunkName: "about" */ '../views/loggedIn/Ejercicios.vue')
    },
    {
        path: '/rutinas',
        name: 'Rutinas',
        component: () => import(/* webpackChunkName: "about" */ '../views/loggedIn/Rutinas.vue')
    },
    {
        path: '/clientes',
        name: 'Clientes',
        component: () => import(/* webpackChunkName: "about" */ '../views/loggedIn/Clientes.vue')
    },
    {
        path: '/calendario',
        name: 'Calendario',
        component: () => import(/* webpackChunkName: "about" */ '../views/loggedIn/Calendario.vue')
    },
    {
        path: '/ajustes',
        name: 'Ajustes',
        component: () => import(/* webpackChunkName: "about" */ '../views/loggedIn/Ajustes.vue')
    },
    {
        path: '/generar_rutina',
        name: 'Generar rutina',
        component: () => import(/* webpackChunkName: "about" */ '../views/loggedIn/GenerarRutina.vue')
    }, {
        path: '/generar_ejercicio',
        name: 'Generar ejercicio',
        component: () => import(/* webpackChunkName: "about" */ '../views/loggedIn/GenerarEjercicio.vue')
    },
    {
        path: '/perfil',
        name: 'Perfil',
        component: () => import(/* webpackChunkName: "about" */ '../views/loggedIn/Perfil.vue')
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
