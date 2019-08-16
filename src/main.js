import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false // 禁止在 Vue 启动时的生产提示

new Vue({
    render: h=> h(App),
}).$mount('#app')