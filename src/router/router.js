import { createRouter, createWebHistory} from "vue-router";

export default createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/create', component: () => import("../components/TheCreate.vue"), alias:'/'}
    ]
})