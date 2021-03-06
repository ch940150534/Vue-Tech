// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import components from './components/' //加载公共组件
import '@/assets/css/common.scss'
import $ from 'jquery'
import 'bootstrap-loader'
import axios from 'axios'
Vue.prototype.$http = axios;
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

Vue.config.productionTip = false
Object.keys(components).forEach((key) => {
        var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
        Vue.component(`v${name}`, components[key])
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
