import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import fp from './components/pages/firstpage'
import hook from './components/terms/hooks'
import methods from './components/terms/methods'
import home from './components/pages/home'
import tags from './components/pages/tags'

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/tags',
        component: tags
    },




    {
        path: '/vue-route',
        component: fp
    },
    //hooks
    {
        path: '/hooks',
        component: hook
    },
    //methods
    {
        path: '/methods',
        component: methods
    },
]

export default new Router({
    mode: 'history',
    routes
})
