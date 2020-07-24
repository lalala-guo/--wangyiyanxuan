<template>
  <div>
    <div v-if="!login" class="personalContainer">
      <div class="topContainer">
        <div class="leftContainer">
          <div class="homeContainer">
            <i class="home" @click="toIndex"></i>
          </div>
        </div>
        <div class="textContainer">
          <i class="logo" @click="toIndex"></i>
        </div>
        <div class="rightContainer">
          <div class="homeContainer">
            <i class="home find" @click="toSousuo"></i>
          </div>
          <div class="homeContainer">
            <i class="home cart" @click="toCart"></i>
          </div>
        </div>
      </div>
      <div class="contentContainer">
        <div class="getUserContainer">
          <div class="logoBigContainer">
            <img src="../../../public/images/logobig.png" alt="">
          </div>
          <div class="loginButtonContainer">
            <div class="phoneLogin">
              <div class="btn" color="#DD1A21" @click="show = true">
                <i class="phoneIcon"></i>
                <span class="phoneText" >手机号快捷登录</span>
              </div>
            </div>
            <div class="emilLogin">
              <div plain class="btn" color="#DD1A21">
                <i class="emilIcon"></i>
                <span class="emilText">邮箱账号登录</span>
              </div>
            </div>
          </div>
        </div>
        <div class="loginTypeContainer">
            <div class="loginType">
              <div class="item weixin">
                <img src="../../../public/images/weixin.png" alt="">
                <div>微信</div>
              </div>
              <div class="item qq">
                <img src="../../../public/images/qq.png" alt="">
                <div>QQ</div>
              </div>
              <div class="item weibo">
                <img src="../../../public/images/weibo.png" alt="">
                <div>微博</div>
              </div>
            </div>
        </div>
      </div>
        <!-- 登录页面 -->
      <van-overlay :show="show" @click="show = false">
        <div class="wrapper" @click.stop>
          <div class="block">
              <div class="loginwrap">
                <div class="loginHeader">
                  <img src="../../../public/images/logobig.png" alt="">
                </div>
                  <van-form class="vanForm" @submit="onSubmit">
                    <van-field
                      v-model="username"
                      type="username"
                      placeholder="请输入手机号"
                      :rules="[{ required: true }]"
                    />
                    <van-field
                      class="code"
                      v-model="password"
                      type="password"
                      placeholder="请输入短信验证码"
                      :rules="[{ required: true    }]"
                    />
                    <div style="margin: 16px;">
                      <van-button class="submit" color="#DD1A21" block type="info" native-type="submit">
                        提交
                      </van-button>
                    </div>
                  </van-form>
                  <div class="getCode" :class="{display: showC === false}" @click="None">获取验证码</div>
                  <div class="getCode count" :class="{display: showC === true}">{{count}}</div>
                  <div class="problemContainer">
                    <a target="_blank" href="https://aq.reg.163.com/ydaq/offline" class="problem">遇到问题?</a>
                    <div class="passwordLogin">使用密码验证登录</div>
                  </div>
                  <div class="agreeContainer">
                    <!-- <input type="checkbox"> -->
                    <van-radio-group class="checkBox" v-model="radio">
                      <van-radio name="1" checked-color="#ccc" shape="square"></van-radio>
                    </van-radio-group>
                    <span>我同意</span>
                    <!-- target="_blank"   跳转并打开新页面 -->
                    <a target="_blank" href="https://reg.163.com/agreement_mobile_wap.shtml?v=20171127">《服务条款》</a>
                    <span>和</span>
                    <a target="_blank" href="https://reg.163.com/agreement_mobile_ysbh_wap.shtml?v=20171127">《网易隐私政策》</a>
                  </div>
              </div>
          </div>
        </div>
      </van-overlay>
    </div>
    <div v-else>
      <loginPersonalVue></loginPersonalVue>
    </div>
  </div>
</template>

<script>
import $globalEventBus from '../../main.js'
import loginPersonalVue from './loginPersonal.vue'
export default {
  data() {
    return {
      radio: '1',
      show: false,
      username: '',
      password: '',
      showC: true,
      count: 5,
      login: []
    }
  },
  components:{
    loginPersonalVue
  },
  mounted(){
    this.$globalEventBus.$emit("display", 'sousuo')
    let login = localStorage.getItem('login')
    this.login = login
    if(login){
      this.$globalEventBus.$emit("display", 'index')
    }
  },
  methods:{
    None(){
      console.log('show');
      this.showC = false
      setInterval(() => {
       if(this.count>0){
          this.count -= 1
       }else{
         this.showC = true
       }
      }, 1000)
    },
    onSubmit(values) {
      // console.log('submit', values);
      if(values){
        this.$router.push('./loginPersonal')
        localStorage.setItem('login', [1,2,3])
      }
    },
    toIndex(){
      this.$globalEventBus.$emit('active', '/index')
      this.$router.push('/index')
      let tabBar = document.querySelector('.tabBarWrap')
      tabBar.style.display='block'
    },
    toSousuo(){
      this.$router.push('/sousuo?key=personal')
      let tabBar = document.querySelector('.tabBarWrap')
      tabBar.style.display='none'
    },
    toCart(){
      this.$router.push('./cart')
      let tabBar = document.querySelector('.tabBarWrap')
      tabBar.style.display='block'
    }
  }
}
</script>

<style lang="less" scoped>
//  遮罩登录页面
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.block {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.loginwrap{
  height: 393*2px;
  // background: pink;
  margin-top: 88px;
  padding-top: 28*2px;
}
.loginHeader{
  width: 100%;
  height: 45*2px;
  // background: yellow;
  text-align: center;
}
.loginHeader img{
  width: 134*2px;
  height: 45*2px;
}
// 头部
.topContainer{
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 44*2px;
  padding: 0 13*2px 0 12*2px;
  display: flex;
  justify-content: space-between;
  background: #fafafa;
}
.leftContainer{
  width: 70.5*2px;
}
.homeContainer{
  width: 23*2px;
  height: 44*2px;
}
.home{
  display: block;
  width: 23*2px;
  height: 50*2px;
  background-image: url('../../../public/images/home.png');
  background-size: 100% 50%;
  background-position: center;
  background-repeat: no-repeat;
}
.logo{
  display: block;
  width: 86*2px;
  height: 27*2px;
  background-image: url('../../../public/images/logo.webp');
  background-size: 100% 100%;
  margin-top: 10*2px;
}
.rightContainer{
  width: 70.5*2px;
  height: 50*2px;
  display: flex;
  justify-content: space-between;
}
.find{
  margin-left: 10px;
  background-image: url('../../../public/images/sousuo.webp');
}
.cart{
  background-image: url('../../../public/images/cart.png');
}
// 登录
.contentContainer{
  background: #F2F5F4;
}
.logoBigContainer{
  width: 100%;
  height: 240.97*2px;
  padding: 80*2px auto 116*2px;
  margin-top: 88px;
  text-align: center;
  line-height: 240.97*2px;
}
.logoBigContainer img{
  width: 134*2px;
  height: 45*2px;
}
.loginButtonContainer{
  width: 100%;
  height: 110*2px;
  padding: 0 20*2px 100%;
  box-sizing: border-box;
}
.btn{
  width: 335*2px;
  height: 47*2px;
  line-height: 47*2px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.phoneLogin{
  margin-bottom: 16*2px;
  color: white;
  font-size: .37333rem;
}
.phoneLogin .btn{
  background: #DD1A21;
}
.emilLogin{
  border: 1px solid #DD1A21;
  background-color: transparent;
  font-size: .37333rem;
}
i{
  float: left;
  display: block;
  width: 20*2px;
  height: 20*2px;
  margin-right: .21333rem;
  position: relative;
  top: -.02667rem;
  background-image: url('../../../public/images/loginImg.webp');
  background-size: .53333rem 3.86667rem;
}
.phoneIcon{
  background-position: 0 -50px;
}

// 第三方登录
.loginTypeContainer{
  width: 100%;
  height: 20*2px;
  position: absolute;
  bottom: 80px;
  
}
.loginType{
  width: 274.5*2px;
  display: flex;
  margin: 0 auto;
}
.item{
  width: 91.5*2px;
  height: 20*2px;
  border-right: 1px solid #979797;
  display: flex;
  flex-direction: row;
  justify-content: center;
  vertical-align: middle;
}

.loginType img{
  display: block;
  width: 40px;
  height: 40px;
  margin-right: 5px;
}
.weibo{
  border:none;
}

// vanForm
.vanForm{
  margin-top: 40px;
}
.code{
  margin-top: 40px;
}
.getCode{
  width: 82.11*2px;
  height: 26.77*2px;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: absolute;
  top: 203*2px;
  right: 25*2px;
  text-align: center;
  line-height: 26.77*2px;
}
.submit{
  margin-top: 55*2px;
}
.problemContainer{
  width: 100%;
  position: absolute;
  top: 263*2px;
  padding: 0 17*2px;
  display: flex;
  justify-content: space-between;
}
.problem{
  color: #979797;
  font-size: 0.2rem;
}
.passwordLogin{
 font-size: 0.2rem
}
.agreeContainer{
  width: 100%;
  height: 24*2px;
  line-height: 24*2px;
  padding: 0 17*2px;
  vertical-align: middle;
  display: flex;
  color: #7f7f7f;
  font-size: 12px;
}
.checkBox{
  margin-right: 20px;
}
.agreeContainer a{
  color: #007AFF;
}
.display{
  display: none;
}
.count{
  color: #979797;
}
</style>