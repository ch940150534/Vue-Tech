<template>
    <div id="register">
        <div class="container" id="vue">
            <div class="panel-basis">
               
                <div class="divide center-block"></div>
                <!--账号资料  begin-->
                <form class="form-horizontal" method="post" id="form-account">
                    <!--用户名-->
                    <div class="form-group">
                        <label class="control-label col-sm-3 ">用户名:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" v-model="form.account">
                        </div>
                        <div class="col-sm-5 col-md-4 tips" v-show="tips.account">{{tips.account}}</div>
                    </div>
                    <!--安全手机-->
                    <div class="form-group">
                        <label class="control-label col-sm-3 ">安全手机:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" v-model="form.phone">
                        </div>
                        <div class="col-sm-5 col-md-4 tips" v-show="tips.phone">{{tips.phone}}</div>
                    </div>
                    <!--手机验证码-->
                    <div class="form-group">
                        <label class="control-label col-sm-3 ">手机验证码:</label>
                        <div class="col-sm-4">
                            <div class="input-group">
                                <input class="form-control" type="text" v-model="form.code">
                                <div class="input-group-btn">
                                    <v-smsCode :phone="form.phone" :account="form.account"></v-smsCode>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-5 col-md-4 tips" v-show="tips.code">{{tips.code}}</div>
                    </div>
                    <!--密码-->
                    <div class="form-group">
                        <label class="control-label col-sm-3 ">密码:</label>
                        <div class="col-sm-4">
                            <input id="password" class="form-control" type="password" v-model="form.pwd1">
                        </div>
                        <div class="col-sm-5 col-md-4 tips" v-show="tips.pwd1">{{tips.pwd1}}</div>
                    </div>
                    <!--确认密码-->
                    <div class="form-group">
                        <label class="control-label col-sm-3 ">确认密码:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="password" v-model="form.pwd2">
                        </div>
                        <div class="col-sm-5 col-md-4 tips" v-show="tips.pwd2">{{tips.pwd2}}</div>
                    </div>
                    <!--获取渠道-->
                    <!--用户名-->
                    <div class="form-group">
                        <label class="control-label col-sm-3 ">获取渠道:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" v-model="form.user_src">
                        </div>
                        <div class="col-sm-5 col-md-4 tips" v-show="tips.user_src">{{tips.user_src}}</div>
                    </div>
                    <!--提交  begin-->
                    <div class="row">
                        <div class="col-sm-4 col-md-5  col-sm-offset-3">
                            <button class="btn  btn-zxzx center-block" type="submit" v-on:click.prevent="submit">保存，进入下一步
                            </button>
                        </div>
                    </div>
                    <!--提交  end-->
                </form>
                <!--账号资料  end-->
            </div>
        </div>
    </div>
</template>
<script>

export default {

    name: 'register',

    data() {
        return {
            path: '/tech',
            submitUrl: '/account/register',
            nextHref: '/project/manager',
            form: {
                account: '',
                phone: '',
                pwd1: '',
                pwd2: '',
                code: '',
                user_src: ''
            },
            tips: {
                class: '',
                account: '4-16位字符，由英文字母和数字组成的。设置完毕后用于登录，请牢记',
                phone: '可通过该手机号码快速找回密码',
                pwd1: '最少8个字符，需包含大小写字母及数字',
                pwd2: '请再次输入密码',
                code: '',
                user_src: '例如朋友介绍，网站介绍，微信推送等'
            }
        };
    },
    methods: {
        submit: function() {
            if (jrValidateForm('form-account')) {
                $.ajax({
                    url: this.path + this.submitUrl,
                    type: 'POST',
                    data: this.form,
                    dataType: 'json',
                    cache: false,
                    traditional: true,
                    success: function(data) {
                        if (data.code === 0) {
                            location.href = vue.path + vue.nextHref;
                        } else {
                            for (var name in vue.tips) {
                                vue.$data.tips[name] = ""
                            }
                            vue.tips[data.data.field] = data.message;
                            alert(data.message);
                        }
                    }
                })
            }
        }
    },
    
};
</script>
<style lang="scss" scoped>
.form-group {
    margin-bottom: 30px;
  }
  .panel-basis{
  	padding-top:50px;
  }
</style>
