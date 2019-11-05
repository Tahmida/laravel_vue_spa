import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './views/App'
import Hello from './views/Hello'
import Home from './views/Home'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/lara_app_5.8/public/home',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});