<template>
    <div id="login">
        <htmlHeader :title="'中消在线'"></htmlHeader>
        <!--登录面板  begin-->
        <div id="" class="banner-bg">
            <div class="container">
                <div class="banner-page v-outter-table">
                    <div class="row v-table-cell">
                        <div class="col-sm-6 col-md-7 col-lg-8" id="login-img">
                            <img src="~assets/img/login-bg-text.png" alt="" class="img-responsive">
                        </div>
                        <!--登录面板  begin-->
                        <div class=" col-sm-6 col-md-5 col-lg-4" id="login-panel">
                            <div class="panel panel-default">
                                <p class="login-title"><strong>账号登录</strong></p>
                                <div class="panel-body login-body">
                                    <!--登录提示-->
                                    <div id="login-tip">
                                    </div>
                                    <!--登陆表单-->
                                    <form>
                                        <!--账号-->
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <i class="fa fa-user-o fa-fw i-input"></i>
                                                </div>
                                                <input class="form-control del-border-left" type="text" placeholder="账号" name="account">
                                            </div>
                                        </div>
                                        <!--密码-->
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-addon ">
                                                    <i class="fa fa-lock fa-fw i-font"></i>
                                                </div>
                                                <input class="form-control del-border-left" type="password" placeholder="密码" name="password">
                                            </div>
                                        </div>
                                        <!--验证码-->
                                        <div class="form-group">
                                            <div class="input-group">
                                                <input class="form-control" type="text" placeholder="输入验证码" name="imgCode">
                                                <div class="input-group-addon">
                                                    <img alt="验证码" class="img-verification" name="imgCode" @click="loadImgCode" :src="imgCode">
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
                                        <router-link to="/forget" class="title">忘记密码</router-link>&nbsp;|&nbsp;<a href="/account/forget" class="title">免费注册</a>
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
        this.initHeight();
        window.onresize = this.initHeight();
    },
    data() {
        return {
            path: '/tech',
            imgCode: '',
            loginMessage: '',
            showTips: false,
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
                    this.showTips = true;
                    this.loadImgCode();
                } else {
                    alert('login success')

                }
            });
        },
        loadImgCode: function() {
            this.imgCode = this.path + '/captcha?v=' + Math.random();
        },
        initHeight: function() {
            $('.banner-page').innerHeight($(window).height() - $('#back-header').innerHeight());
            $('#login-img img').height($('#login-panel').height());
        }
    },
}
</script>
<style lang="scss" scoped rel="stylesheet/scss">
@import '~assets/css/variables.scss';

/*login*/

#login {
    .banner-bg {
        margin-top: -20px;
        background-image: url('~assets/img/login-bg.jpg')
    }
    @media (max-width: 767px) {
        #login-img {
            display: none;
        }
    }
    .login-title {
        padding-left: 20px;
        border-bottom: 1px solid #e8e8e8;
        font-size: 18px;
    }
    .login-body {
        padding: 0 20px;
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
        .input-group {
            .del-border-left {
                border-left: 0 none;
            }
            .input-group-addon {
                background-color: #fff;
                &>i {
                    font-size: 1.4em;
                    color: #9c9c9c;
                }
            }
        }
        .login-box-footer {
            padding-bottom: 20px;
            a {
                color: #000;
            }
        }
    }
}
</style>
