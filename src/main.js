// import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import buefy from 'buefy'
import 'buefy/dist/buefy.css'
import 'bulma-helpers/css/bulma-helpers.min.css'
import LazyTube from "vue-lazytube";

Vue.use(LazyTube);
Vue.use(buefy)
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

