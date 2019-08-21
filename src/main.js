import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mockServer'
import 'lib-flexible/flexible'


Vue.config.productionTip = false // 禁止在 Vue 启动时的生产提示

new Vue({
    render: h=> h(App),
    router,
    store
}).$mount('#app')