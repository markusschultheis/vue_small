import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'skills',
            component: HelloWorld
        },
        {
            path: '/about:name',
            name: 'about',
            component: About
        }
    ]
})