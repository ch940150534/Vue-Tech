<template>
    <div id="login">
        <!--登录面板  begin-->
        <div id="" class="banner-bg">
            <div class="container">
                <div class="banner-page v-outter-table" :style="{height:bgHeight+'px'}">
                    <div class="row v-table-cell">
                        <div class="col-sm-6 col-md-7 col-lg-8 hidden-xs" id="login-img">
                            <img src="./login-bg-text.png" alt="" class="img-responsive">
                        </div>
                        <!--登录面板  begin-->
                        <div class=" col-sm-6 col-md-5 col-lg-4" id="login-panel">
                            <div class="panel panel-default">
                                <div class="login-title"><strong>账号登录</strong></div>
                                <div class="panel-body login-body">
                                    <!--登录提示-->
                                    <div class="login-tips" v-show="loginMessage">
                                        <div class="row">
                                            <div class="col-sm-1">
                                                <i class="glyphicon glyphicon-exclamation-sign"></i>
                                            </div>
                                            <div class="col-sm-11">{{loginMessage}}</div>
                                        </div>
                                    </div>
                                    <!--登陆表单-->
                                    <form @submit.prevent="login">
                                        <!--账号-->
                                        <div class="form-group has-feedfront">
                                            <span class="glyphicon glyphicon-user form-control-feedfront"></span>
                                            <input v-model="form.account" class="form-control" type="text" placeholder="账号" name="account" id="account">
                                        </div>
                                        <!--密码-->
                                        <div class="form-group has-feedfront">
                                            <span class="glyphicon glyphicon-lock form-control-feedfront"></span>
                                            <input v-model="form.password" class="form-control" type="password" placeholder="密码" name="password">
                                        </div>
                                        <!--验证码-->
                                        <div class="form-group">
                                            <div class="input-group">
                                                <input class="form-control" v-model="form.imgCode" type="text" placeholder="输入验证码" name="imgCode">
                                                <div class="input-group-addon">
                                                    <img alt="验证码" class="img-verification" name="imgCode" :src="imgCode" v-on:click="loadImgCode">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <button class="btn btn-zxzx btn-block" type="submit" role="button">
                                                登录
                                            </button>
                                        </div>
                                    </form>
                                    <div class="login-box-footer text-right">
                                        <a href="/account/register" class="title">忘记密码</a>&nbsp;|&nbsp;<a href="/account/forget" class="title">免费注册</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--登录面板  end-->
                    </div>
                </div>
            </div>
        </div>
        <!--登录面板  end-->
    </div>
</template>
<script>
export default {
    name: 'login',
    mounted() {
        this.loadImgCode();
        window.onresize = () =>{
            this.bgHeight = window.innerHeight - 90;
        };
    },
    data() {
        return {
            path: '/tech',
            imgCode: '',
            loginMessage: '',
            bgHeight: window.innerHeight - 90,
            form: {
                account: '',
                password: '',
                imgCode: ''
            }
        }
    },
    methods: {
        login: function() {
            this.$http({
                method: 'POST',
                url: this.path + '/account/login',
                data: require('querystring').stringify(this.form),
                dataType: 'json',
                mimeType: 'multipart/form-data',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }).then(response => {
                if (response.data.code !== 0) {
                    this.loginMessage = response.data.message;
                    this.loadImgCode();
                } else {
                    this.$http.get(this.path + '/project/view').then(response => {
                        console.log(response.data)
                    })
                }
            });
        },
        loadImgCode: function() {
            this.imgCode = this.path + '/captcha?v=' + Math.random();
        },

    },

}
</script>
<style lang="scss" scoped rel="stylesheet/scss">
@import '~assets/css/variables.scss';

/*login*/

#login {
    .banner-bg {
        margin-top: -20px;
        background-image: url('./login-bg.jpg')
    }
    #login-img {
        line-height: 327px;
        img {
            display: inline-block;
        }
    }
    #login-panel {
        .panel {
            margin-bottom: 0px;
        }
        .login-title {
            padding: 0 20px;
            line-height: 50px;
            border-bottom: 1px solid #e8e8e8;
            font-size: 18px;
        }
        .login-body {
            padding: 30px 20px;
            .login-tips {
                padding: 5px 10px;
                border: 0.5px solid rgba(0, 4, 87, 0.3);
                border-radius: 5px;
                font-size: 1.1em;
                &:before {
                    content: none;
                }
                i {
                    color: $hot-dark;
                }
                a {
                    color: $hot-dark;
                    &:hover {
                        color: $hot-light;
                    }
                }
            }
            .login-box-footer {
                a {
                    color: #000;
                }
            }
        }
    }
}
</style>
