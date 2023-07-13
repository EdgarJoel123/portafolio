import { createRouter, createWebHistory } from "vue-router";

import Principal from './../pages/principal.vue'

const routes= [
    {
        path:'/',
        name:'Home',
        component: Principal
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router