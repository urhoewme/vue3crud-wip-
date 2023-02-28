import { createApp } from "vue"
import App from './App'
import mybutton from '@/components/UI/mybutton'
import post from '@/components/post'
import postlist from '@/components/postlist'
import postform from '@/components/postform'
import myinput from '@/components/UI/myinput'
import mydialog from '@/components/UI/mydialog'
import myselect from '@/components/UI/myselect'
import router from "./router/index.js"
import mybar from "@/components/mybar"
import directives from "./directives"
import store from "./store"


const app = createApp(App)

app.component('myinput', myinput)
app.component('mybutton', mybutton);
app.component('postform', postform);
app.component('post', post);
app.component('postlist', postlist);
app.component('mydialog', mydialog);
app.component('myselect', myselect);
app.component('mybar', mybar);


directives.forEach(directive => {
    app.directive(directive.name, directive)
})

// app.directive('intersection', Vintersection)


app.use(router)
app.use(store)
app.mount('#app');
