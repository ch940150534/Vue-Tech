<template>
    <button class="btn btn-zxzx" v-on:click.prevent="getCode()" :disabled="disabled">{{btnText}}</button>
</template>
<script>
export default {

    name: 'smsCode',

    data: function() {
        return {
            path: '/tech',
            smsUrl: '/account/sendsms',
            btnText: '获取短信验证码',
            coolDown: 90,
            disabled: false,
            phoneRule: /^1[34578]\d{9}$/,
            accountRule: /^[a-zA-Z]\w{3,15}$/,
            form: {
                'phone': '',
                'account': '',
            }
        }
    },
    props: ['phone', 'account'],
    methods: {
        getCode: function() {
            var self = this;
            if (this.phone.match(this.phoneRule)) {
                if (this.account.match(this.accountRule)) {
                    this.form.phone = this.phone;
                    this.form.account = this.account;
                    this.settime();
                    this.$http({
                        method: 'POST',
                        url: this.path + this.smsUrl,
                        data: require('querystring').stringify(this.form),
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        }
                    }).then(response=>{
                        if(response.data.code!=0){
                            alert(response.data.message)
                        }
                    	console.log(response.data);
                    })
                } else {
                    alert('请填写正确的用户名')
                }
            } else {
                alert('请填写正确的安全手机');
            }
        },
        settime: function() {
            var self = this;
            if (self.coolDown == 0) {
                self.disabled = false;
                self.btnText = "获取短信验证码";
                self.coolDown = 90;
                return;
            } else {
                self.disabled = true;
                self.btnText = "重新发送(" + this.coolDown + ")"
                self.coolDown--;
            }
            setTimeout(function() {
                self.settime()
            }, 1000)
        }
    }
};
</script>
<style lang="css" scoped>
</style>
