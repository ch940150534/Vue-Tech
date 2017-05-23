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

Validator.updateDictionary({//中文消息
    zh_CN: {
        messages
    }
});
const config = {  //设置locale为中文
    errorBagName: 'errors', // change if property conflicts.
    delay: 0,
    locale: 'zh_CN',
    messages: null,
    strict: true
};

Vue.use(VeeValidate,config);//应用中文设置

//自定义内置规则错误信息
const dictionary = {
    zh_CN: {
        messages: {
            required: () => '此项是必填项'
        }
    }
};
Validator.updateDictionary(dictionary);

//自定义规则
Validator.extend('account', {
    messages: {
      //en:field => '请输入以字母开头由英文字母和数字组成的4-16位用户名',
      zh_CN:field=> '请输入以字母开头由英文字母和数字组成的4-16位用户名'
    },
    validate: value => {
      return /^[a-zA-Z]\w{3,15}$/.test(value)
    }
});
Validator.extend('phone', {
    messages: {
      //en:field => '必须是11位手机号码',
      zh_CN:field => '必须是11位手机号码'
    },
    validate: value => {
      return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
});
Validator.extend('password', {
    messages: {
      //en:field => '密码格式不正确',
      zh_CN:field => '密码格式不正确'
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
