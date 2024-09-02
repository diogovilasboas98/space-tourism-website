import { createWebHistory, createRouter} from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '../pages/home/home.vue'
import Crew from '../pages/crew/crew.vue'
import Technology from '../pages/technology/technology.vue'
import Destination from '../pages/destination/destination.vue'

const routes:readonly RouteRecordRaw[] = [
    {
        path: '/', 
        component: Home
    },
    {
        path: '/crew',
        component: Crew
    },
    {
        path: '/technology',
        component: Technology
    },
    {
        path: '/destination',
        component: Destination
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router