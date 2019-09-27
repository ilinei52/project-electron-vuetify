import VueRouter from "vue-router"

// Pages ---------------------------------------------------
import Main from './pages/Main.vue'

const routes = [
    {
        path: '/',
        component: Main,
        name: 'Home',
        meta: { },
    },
    {
        path: '/home',
        component: Main,
        name: 'Home2',
        meta: { },
    }
]

export default new VueRouter({
    routes
})