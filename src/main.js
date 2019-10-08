import Vue from 'vue'
import App from './App.vue'
import FastClick from 'fastclick'
import router from './router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueResource);
Vue.config.productionTip = false

Vue.http.options.root = "http://115.47.127.181:3000/"

new Vue({
    router,
    render: h => h(App),
    mounted() {
        FastClick.attach(document.body)
    }
}).$mount('#app')