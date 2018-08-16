import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'
import Settings from './components/Settings.vue'
import Landing from './components/Landing.vue'
import Home from './components/Home.vue'
import ShowCar from './components/ShowCar.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
       {
           path: '*',
           redirect: '/home'
       } ,
       {
           path: '/login',
           name: 'Login',
           component: Login
       },
       {
            path: '/landing',
            name: 'Landing',
            component: Landing   
       },{
            path: '/home',
            name: 'Home',
            component: Home  
       },{
           path: '/showCar',
           name: 'ShowCar',
           component: ShowCar
       },
       {
           path: '/dashboard',
           name: 'Dashboard',
           component: Dashboard,
           meta: {
               requiresAuth: true
           }
       },
       {
           path: '/settings',
           name: 'Settings',
           component: Settings,
           meta: {
               requiresAuth: true
           }
       }


    ]
})

export default router