import Home from  '../pages/Home/Home.vue'
import Classify from  '../pages/Classify/Classify.vue'
import Kind from  '../pages/Kind/Kind.vue'
import Shopping from  '../pages/Shopping/Shopping.vue'
import User from  '../pages/User/User.vue'
import Search from '../pages/Search/Search.vue'

export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/classify',
        component: Classify,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/kind',
        component: Kind,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/shopping',
        component: Shopping,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/user',
        component: User
    },
    {
        path: '/search',
        component: Search
    }
]