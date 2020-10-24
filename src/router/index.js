import Vue from 'vue'
import VueRouter from 'vue-router'
import {Api} from "@/api/api.js";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'NotLoggedHome',
        component: () => import(/* webpackChunkName: "about" */ '../views/notLogged/Home.vue')
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
        path: '/notificaciones',
        name: 'Notificaciones',
        component: () => import(/* webpackChunkName: "about" */ '../views/loggedIn/NoImplementado.vue')
    },
    {
        path: '/mensajes',
        name: 'Mensajes',
        component: () => import(/* webpackChunkName: "about" */ '../views/loggedIn/NoImplementado.vue')
    },
    {
        path: '/ajustes',
        name: 'Ajustes',
        component: () => import(/* webpackChunkName: "about" */ '../views/loggedIn/NoImplementado.vue')
    },
    {
        path: '/generar_rutina',
        name: 'GenerarRutina',
        component: () => import(/* webpackChunkName: "about" */ '../views/loggedIn/GenerarRutina.vue')
    },
    {
        path: '/visualizar_rutina',
        name: 'VisualizarRutina',
        component: () => import(/* webpackChunkName: "about" */ '../views/loggedIn/VisualizarRutina.vue')
    },
    {
        path: '/generar_ejercicio',
        name: 'GenerarEjercicio',
        component: () => import(/* webpackChunkName: "about" */ '../views/loggedIn/GenerarEjercicio.vue')
    },
    {
        path: '/editar_ejercicio/:id/:type',
        name: 'EditarEjercicio',
        component: () => import(/* webpackChunkName: "about" */ '../views/loggedIn/EditarEjercicio.vue')
    },
    {
        path: '/perfil',
        name: 'Perfil',
        component: () => import(/* webpackChunkName: "about" */ '../views/loggedIn/Perfil.vue')
    },
    {
        path: '/verification',
        name:'Verification',
        component: () => import(/* webpackChunkName: "about" */ '../views/notLogged/VerifCorrecta.vue')
    },
    {
        path: '/builder',
        name: 'Builder',
        component: () => import(/* webpackChunkName: "about" */ '../views/Builder.vue')
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

router.beforeEach( (to, from, next) =>{
    if ((to.name !== 'NotLoggedHome' && to.name !== 'Ayuda' && to.name !== 'QuienesSomos' && to.name !== 'Verification')
        && Api.getToken() === null)
        next({name: 'NotLoggedHome'})
    else
        next()
})

export default router
