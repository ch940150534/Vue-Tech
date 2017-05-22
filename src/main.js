// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate, { Validator } from 'vee-validate';
import messages from './assets/js/zh_CN';
import $ from 'jquery'
import 'bootstrap-loader'
import '@/assets/css/common.scss'
import Header from '@/components/header'
import axios from 'axios'
Vue.prototype.$http = axios;


Vue.use(VeeValidate);
Validator.extend('account', {
    messages: {
      en:field => field + '用户名格式不正确',
    },
    validate: value => {
      return /^[A-Z][a-zA-Z0-9]{7,15}$/.test(value)
    }
});
Validator.extend('phone', {
    messages: {
      en:field => field + '必须是11位手机号码',
    },
    validate: value => {
      return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
});
Validator.extend('password', {
    messages: {
      en:field => field + '密码格式不正确',
    },
    validate: value => {
      return /^[A-Z][a-zA-Z0-9]{7,15}$/.test(value)
    }
});

Vue.component('htmlHeader', Header)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
