import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('./views/Home' /* webpackChunkName: 'home' */)
const About = () => import('./views/About' /* webpackChunkName: 'about' */)
const Contact = () => import('./views/Contact' /* webpackChunkName: 'contact' */)
const User = () => import('./views/User' /* webpackChunkName: 'user' */)
const UserProfile = () => import('./views/UserProfile' /* webpackChunkName: 'user-profle' */)


Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component:Contact },
    {path : '/user',component: User},
    {path :'/user/:id',component:UserProfile},
    { path: '*', component: Home }
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

export default router