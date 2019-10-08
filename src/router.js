import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    base: __dirname,
    routes: [{
        path: "/",
        name: "Home",
        component: Home
    }, {
        path: "/about",
        name: "About",
        component: About
    }, {
        path: "/add",
        name: "add",
        component: () =>
            import ("./components/Add.vue")
    }, {
        path: "/userDetails/:id",
        name: "UserDetails",
        component: () =>
            import ("./components/UserDetails.vue")
    }, {
        path: "/edit/:id",
        name: "Edit",
        component: () =>
            import ("./components/Edit.vue")
    }]
})