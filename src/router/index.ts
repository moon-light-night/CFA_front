import {createRouter, createWebHistory} from "vue-router";

import Home from "@views/Home.vue";
import Second from "@views/Second.vue";


const history = createWebHistory();
const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/",
        name: "second",
        component: Second,
    }
]

const router = createRouter({
    history,
    routes,
})

export default router;