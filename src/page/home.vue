<template>
    <div class="home">
        <htmlHeader :title="'中消在线'"></htmlHeader>
        <nav id="secondary-header" class="navbar" role="navigation">
            <div class="container">
                <ul class="nav navbar-nav">
                    <li><a href="http://www.zxzx119.com">首页</a></li>
                    <li><a href="http://www.zxzx119.com/article-news-1.html">热点新闻</a></li>
                    <li><a href="http://www.zxzx119.com/article-wiki-1.html">政策法规</a></li>
                    <li><a href="http://www.zxzx119.com/article-knowall-1.html">消防百科</a></li>
                    <li><a href="http://www.zxzx119.com/article-supervision-1.html">监督举报</a></li>
                    <li><a href="http://d.zxzx119.com">企业名录</a></li>
                    <li><a href="http://www.zxzx119.com/article-onlineEdu-1.html">教育培训</a></li>
                    <li><a href="http://www.zxzx119.com/article-savezx-1.html">中消救援</a></li>
                </ul>
            </div>
        </nav>
        <div class="big-img">
            <a class="btn-upload" href="javascript:void(0);">上传图纸</a>
        </div>
        <div class="container">
            <div class="ask-box">
                <p>建筑工程装修、消防验收、消防施工过程中，您是否遇到过以下问题呢？</p>
                <i class="tech-arrow"></i>
            </div>
            <ul class="problem-list row list-unstyled">
                <li class="col-sm-6 col-md-4"><img src="~assets/img/front-tech-img1.jpg" alt=""><span>对消防办理流程不了解</span></li>
                <li class="col-sm-6 col-md-4"><img src="~assets/img/front-tech-img2.jpg" alt=""><span>找不到专业人员</span></li>
                <li class="col-sm-6 col-md-4"><img src="~assets/img/front-tech-img3.jpg" alt=""><span>报备材料准备不充分</span></li>
                <li class="col-sm-6 col-md-4"><img src="~assets/img/front-tech-img4.jpg" alt=""><span>消防设计图纸不合规</span></li>
                <li class="col-sm-6 col-md-4"><img src="~assets/img/front-tech-img5.jpg" alt=""><span>施工乱收费现象</span></li>
                <li class="col-sm-6 col-md-4"><img src="~assets/img/front-tech-img6.jpg" alt="">
                    <a class="btn-reg" href="javascript: void(0);"></a><span>为您提供高效的消防解决方案</span></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {

    name: 'Home',

    data() {
        return {

        };
    }
};
</script>
<style lang="scss" scoped>
@import '~assets/css/variables.scss';
.home {
    background-color: $white-max;
    #secondary-header.navbar {
        border-radius: 0px;
        z-index: 0;
        margin: {
            top: -$header-margin;
            bottom: 0px;
        }
        background-color: $black-dark;
        height: auto;
        .container {
            padding: {
                top: $header-margin;
                bottom: $header-margin;
            }
            ;
            ul > li > a {
                color: $white-max;
                font-size: 1.2em;
                font-weight: bold;
                padding: {
                    left: 30px;
                    right: 30px;
                    top: 0px;
                    bottom: 0px;
                }
                ;
                @media (max-width: 992px) {
                    padding: {
                        right: 10px;
                    }
                    ;
                }
            }
            ul > li:hover > a {
                color: $white-dark;
                background-color: transparent;
                font-weight: normal;
            }
        }
    }
    .big-img {
        position: relative;
        width: 100%;
        height: 452px;
        background: url("~assets/img/front-tech-bigimg.jpg");
        background-position: center top;
        .btn-upload {
            position: absolute;
            left: 50%;
            bottom: 66px;
            margin-left: 66px;
            background-color: #143ec7;
            width: 120px;
            height: 40px;
            color: #fff;
            text-align: center;
            line-height: 40px;
        }
    }
    .ask-box p {
        width: 590px;
        line-height: 48px;
        margin: 0 auto;
        padding: 60px 94px 10px;
        color: #484848;
        font-size: 20px;
        text-align: center;
        border-bottom: 2px solid #cacaca;
    }
    .tech-arrow {
        display: block;
        margin: 26px auto 53px;
        width: 23px;
        height: 23px;
        background: url("~assets/img/front-tech-arrow.jpg");
    }
    .problem-list {
        padding-bottom: 86px;
        li {
            position: relative;
            text-align: center;
            span {
                display: block;
                line-height: 52px;
                font-size: 16px;
                color: #000;
                margin-bottom: 22px;
            }
            .btn-reg {
                position: absolute;
                left: 50%;
                top: 96px;
                width: 120px;
                height: 40px;
                margin-left: -60px;
            }
        }
    }
}
</style>
