import Home from  '../pages/Home/Home.vue'
import Classify from  '../pages/Classify/Classify.vue'
import Kind from  '../pages/Kind/Kind.vue'
import Shopping from  '../pages/Shopping/Shopping.vue'
import User from  '../pages/User/User.vue'


export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/classify',
        component: Classify
    },
    {
        path: '/kind',
        component: Kind
    },
    {
        path: '/shopping',
        component: Shopping
    },
    {
        path: '/user',
        component: User
    }
]