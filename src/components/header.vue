<template>
    <nav id="back-header" class="navbar" role="navigation">
        <div class="container">
            <div class="row">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#"> </a>
                </div>
                <div class="col-auto header-title hidden-xs">
                    <div>前沿科技</div>
                </div>
                <div class="col-sm-4 help-return">
                    <router-link to="/register">注册</router-link><span class="dividing-line"></span>
                    <router-link to="/login" replace>登录</router-link>
                </div>
                <ul class="header-navigation list-inline col-auto">
                    <li><a>我的发布</a></li>
                    <li><a href="/tech/logout"><i class="iconfont icon-signout"></i></a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {

    name: 'header',

    data() {
        return {

        };
    },
    
};
</script>
<style lang="scss" scoped>
@import '~assets/css/variables.scss';
#back-header.navbar {
    z-index: 9999;
    border: none;
    color: $white-max;
    height: $header-height;
    line-height: $header-height;
    margin-bottom: $header-margin;
    background-color: $hot-dark;
    border-radius: 0px;
    .navbar-header {
        float: left;
        padding-left: 20px;
    }
    .navbar-brand {
        width: 100px;
        height: 83px;
        margin-top: 5px;
        background-image: url(~assets/img/logo-ZXZX.png);
        background-repeat: no-repeat;
        background-size: 100%;
    }
    .header-title {
        font-size: 24px;
        padding: 15px 20px;
        div {
            line-height: $header-height - 30;
            padding: 0 10px;
            border-left: 1px solid $white-max;
        }
    }
    .header-navigation {
        font-size: 18px;
        float: right;
        height: 100%;
        text-align: right;
        li {
            padding: 0;
            &.active {
                a {
                    background-color: $hot-max;
                }
            }
            a {
                display: inline-block;
                height: $header-height;
                padding: 0 15px;
                color: $white-max;
                &:hover {
                    background-color: $hot-max;
                }
            }
        }
    }
    .dividing-line {
        padding: 15px 6px 5px 6px;
        margin-left: 10px;
        border-left: 1px solid $white-max;
        font-size: 0;
    }
    .help-return {
        font-size: 1.2em;
        line-height: 70px;
        float: right;
        text-align: right;
    }
    .help-return > a {
        margin-right: 10px;
        margin-left: 10px;
        color: $white-max;
    }
}
</style>
