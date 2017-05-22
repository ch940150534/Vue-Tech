<template>
    <div id="forget">
        <htmlHeader :title="'忘记密码'"></htmlHeader>
       <!--  <nav id="back-header" class="navbar" role="navigation">
            <div class="container">
                <div class="row">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1"></button>
                        <a class="navbar-brand" href="http://d.zxzx119.com"> </a>
                    </div>
                    <div class="col-auto header-title hidden-xs">忘记密码</div>
                    <div class="col-auto help-return">
                        <a href="http://d.zxzx119.com">返回首页</a>
                    </div>
                </div>
            </div>
        </nav> -->
        <!--header  end-->
        <div class="container">
            <div class="panel panel-basis">
                <div class="panel-body">
                    <!--找回密码  begin-->
                    <form class="form-horizontal" method="post" id="form-forget">
                        <div class="form-tab">账号资料</div>
                        <div class="form-style">
                            <!--账号-->
                            <div class="form-group" id="account">
                                <label class="control-label col-sm-3 ">用户名:</label>
                                <div class="col-sm-4 col-md-5">
                                    <input class="form-control" type="text" v-model="account" name="account" v-validata="'required|account'">
                                    <span v-show="errors.has('account')" class="help is-danger">{{ errors.first('account') }}</span>
                                </div>

                            </div>
                            <!--手机-->
                            <div class="form-group" id="phone">
                                <label class="control-label col-sm-3 ">安全手机:</label>
                                <div class="col-sm-4 col-md-5">
                                    <input class="form-control" type="text" v-model="phone" name="phone" v-validate="'required|phone'" >
                                    <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
                                </div>
                            </div>
                            <!--新密码-->
                            <div class="form-group">
                                <label class="control-label col-sm-3 ">新密码:</label>
                                <div class="col-sm-4 col-md-5">
                                    <input id="password" class="form-control" type="password" name="pwd1" v-validate="'required|password'">
                                    <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
                                </div>
                                <div class="col-sm-5 col-md-4 tips">最少8个字符，需包含大小写字母及数字</div>
                            </div>
                            <!--手机验证码-->
                            <div class="form-group">
                                <label class="control-label col-sm-3 ">手机验证码:</label>
                                <div class="col-sm-4 col-md-5">
                                    <div class="input-group">
                                        <input class="form-control" type="text" name="code" required data-validation-message="验证码不能为空">
                                        <div class="input-group-btn">
                                            <a class="btn btn-default" id="send-sms" v-on:click="sendCode">免费获取验证码</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--提交  begin-->
                        <div class="row">
                            <div class="col-sm-4 col-md-5  col-sm-offset-3">
                                <a class="btn  btn-zxzx btn-block" type="submit" id="submit" v-on:click="sendForm($event)">点击重置密码</a>
                            </div>
                        </div>
                        <!--提交  end-->
                    </form>
                    <!--找回密码  end-->
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="babel">



export default {

    name: 'forget',

    data() {
        return {
            PATH:'/blade',
            countdown:90,
            account:"",
            phone:""
        };
    },
    mounted:function(){


    },
    methods:{
        sendForm: function (e) {//发送表单
            if (jrValidateForm('form-forget')) {
                $.ajax({
                    url: this.PATH + '/account/reset',
                    type: 'POST',
                    data: $('form').serialize(),
                    dataType: 'json',
                    mimeType: 'multipart/form-data',
                    contentType: "application/x-www-form-urlencoded",
                    cache: false,
                    processData: false,
                    success: (data)=>{
                        if (data.code === 0) {
                            alert(data.message);
                            location.href = this.PATH + '/account/login'
                        } else {
                            alert(data.message);
                        }
                    }
                });
            } else {
                //处理未通过表单验证的代码
            }
            e.preventDefault();
        },
        sendCode: function(){//发送手机验证码
            if(jrValidateForm('account')&&jrValidateForm('phone')){
                $.ajax({
                    url: this.PATH + '/account/sendsms?account='+this.account+'&phone='+this.phone,
                    type: 'POST',
                    dataType: 'json',
                    mimeType: 'multipart/form-data',
                    contentType: "application/x-www-form-urlencoded",
                    cache: false,
                    processData: false,
                    success: (data)=>{
                        var data={'code':'0'};
                        if (data.code===0){
                            this.settime();
                        }
                        alert(data.message);
                    }
                });
            }
        },
        settime: function(){//重新发送计时
            var obj = $('#send-sms');
            if (this.countdown == 0) {
                obj.removeAttr("disabled");
                obj.text("免费获取验证码");
                this.countdown = 90;
                return;
            } else {
                obj.attr("disabled", true);
                obj.text("重新发送(" + this.countdown + ")")
                this.countdown--;
            }
            setTimeout(()=>{
                this.settime();
            }, 1000);
        }
    }

};
</script>
<style lang="scss" scoped>
@import '~assets/css/variables.scss';
/*panel-basis*/
.panel-basis {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 0px;
  background-color: $white-max;
  &.back {
    padding: ($header-margin + 50px) 10px;
  }
  padding: $header-margin 10px;
  margin: {
    top: -$header-margin;
    bottom: 0px;
  }
}

.form-style {
  margin: 20px 0;
  border: 2px solid $white-light;
  padding: {
    top: 20px;
    bottom: 5px;
  }
;
  @media (max-width: 767px) {
    padding: {
      left: 20px;
      right: 20px;
    }
  }
}

.form-tab {
  font: bold 12px simsun;
  border: 10px solid $white-max;
  background-color: $white-max;
  float: left;
  margin: {
    left: 30px;
    top: -15px;
  }
}

/*tips*/
.tips {
  color: #929292;
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 14px;
  &:before {
    color: $hot-light;
    content: '*';
    font-family: sans-serif;
    margin-left: -9px;
  }
}
</style>
