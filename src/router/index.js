import { createRouter, createWebHashHistory } from 'vue-router';
import PostPage from "@/views/PostPage.vue"
import Main from "@/views/Main.vue"
import About from "@/views/About.vue"
import postpage from "@/components/postpage.vue"
import StorePostPage from "@/views/StorePostPage.vue"
import CompositionAPIPage from "@/views/CompositionAPIPage.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/posts', component: PostPage
        },
        {
            path: '/', component: Main, alias: '/'
        },
        {
            path: '/about', component: About
        },
        {
            path: '/posts/:id', component: postpage
        },
        {
            path: '/store', component: StorePostPage
        },
        {
            path: '/compapi', component: CompositionAPIPage
        },
    ]
})