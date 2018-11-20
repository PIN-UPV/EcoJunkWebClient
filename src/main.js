import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import { store } from '@/store/index.js'

Vue.config.productionTip = false

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueObserve from 'vue-observe-visibility'

Vue.use(VueMaterial)
Vue.use(VueObserve)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')