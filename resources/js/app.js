/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('main-component', require('./components/Main.vue').default);
Vue.component('m-x', require('./components/Mix.vue').default);


const app = new Vue({
    el: '#app',
    router
});
