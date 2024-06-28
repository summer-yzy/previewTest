import {createRouter,createWebHashHistory} from 'vue-router'
import Index from "../views/index/index.vue";

const routes = [
    { path: '/', component: Index },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router