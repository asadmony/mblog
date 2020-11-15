import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import fp from './components/pages/firstpage'
import hook from './components/hooks/hooks'
const routes = [
    {
        path: '/vue-route',
        component: fp
    },
    //hooks
    {
        path: '/hooks',
        component: hook
    }
]

export default new Router({
    mode: 'history',
    routes
})
