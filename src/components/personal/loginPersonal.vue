<template>
  <div class="loginPersonalContainer">
      <div class="loginHeader">
          <div class="leftHeader">
              <img class="headPortrait" src="//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" alt="">
              <div class="userContainer">
                  <div class="title">严选用户7207306422320449</div>
                  <div class="desc">普通用户</div>
              </div>
          </div>
          <div class="rightHeader">
              <i class="icon"></i>
              <div class="member">
                <i class="memberIcon"></i>
                <div class="memberTitle">
                    <div class="memberTitleTop">Pro会员</div>
                    <div class="memberTitleBottom">
                        <span class="now">立即试用</span>
                        <i class="more"></i>
                    </div>
                </div>
              </div>
          </div>
      </div>

      <div class="contentContainer">
          <div class="my">
              <div class="header">我的资产</div>
              <div class="list">
                  <div class="listItem">
                      <div class="num">
                          <span>￥</span>0</div>
                      <div class="name">回馈金</div>
                  </div>
                  <div class="listItem">
                      <div class="num">0</div>
                      <div class="name">红包</div>
                  </div>
                  <div class="listItem">
                      
                      <div class="num">0</div>
                      <div class="name">优惠券</div>
                  </div>
                  <div class="listItem">
                      <div class="num">
                          <span>￥</span>0</div>
                      <div class="name">津贴</div>
                  </div>
                  <div class="listItem">
                      <div class="num">0</div>
                      <div class="name">礼品卡</div>
                  </div>
              </div>
          </div>
      </div>

      <div class="detailsContainer">
          <ul class="details">
              <li class="detailsItem">
                  <i class="detailsIcon order"></i>
                  <div class="headerLine">我的订单</div>
              </li>
              <li class="detailsItem">
                  <i class="detailsIcon together"></i>
                  <div class="headerLine">周六一起拼</div>
              </li>
              <li class="detailsItem no">
                  <i class="detailsIcon service"></i>
                  <div class="headerLine">售后服务</div>
              </li>
              <li class="detailsItem">
                  <i class="detailsIcon invitation"></i>
                  <div class="headerLine">邀请返利</div>
              </li>
              <li class="detailsItem">
                  <i class="detailsIcon first"></i>
                  <div class="headerLine">优先购</div>
              </li>
              <li class="detailsItem no">
                  <i class="detailsIcon Integral"></i>
                  <div class="headerLine">积分中心</div>
              </li>
              <li class="detailsItem">
                  <i class="detailsIcon club"></i>
                  <div class="headerLine">会员俱乐部</div>
              </li>
              <li class="detailsItem">
                  <i class="detailsIcon address"></i>
                  <div class="headerLine">地址管理</div>
              </li>
              <li class="detailsItem no">
                  <i class="detailsIcon Account"></i>
                  <div class="headerLine">账号安全</div>
              </li>
              <li class="detailsItem wu">
                  <i class="detailsIcon help"></i>
                  <div class="headerLine">帮助与客服</div>
              </li>
              <li class="detailsItem wu">
                  <i class="detailsIcon opinion"></i>
                  <div class="headerLine">意见反馈</div>
              </li>
          </ul>
      </div>

      <div class="signOut" @click="signOut">退出登录</div>
  </div>
</template>

<script>
import $globalEventBus from '../../main.js'
export default {
    data(){
        return{
            // login:[1,2]
        }
    },
    mounted(){
        // console.log(this.$route.path);
        this.$globalEventBus.$emit("display", 'loginPersonal')
        this.$globalEventBus.$emit('active', '/personal')
    },
    methods:{
        signOut(){
            // location.reload(); 
            localStorage.clear('login')
            this.$router.push('/personal')
        }
    }
}
</script>

<style scoped>
.loginHeader{
    width: 100%;
    height: 270px;
    background-image: url('../../../public/images/personalLoginbg.webp');
    background-size: 100%;
    padding-left: 30px;

}
.leftHeader{ 
    display: flex;
    align-items: center;
    padding: 64px 0;
}
.headPortrait{
    width: 142px;
    height: 142px;
    border-radius: 50%;
    margin-right: 30px;
}
.userContainer{
    width: 338px;
}
.title{
    color: #fff;
    font-size: .48rem;
    line-height: 1.2;
    text-align: left;
    margin-bottom: .13333rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.desc{
    color: #fff;
    font-size: .37333rem;
    vertical-align: middle;
}
i{
    display: block;
    background-image: url('../../../public/images/iconjingling.webp');
    background-size: 100%;
}
.icon{
    
    width: 64px;
    height: 64px;
    background-position: 0 -2.5rem;
    position: absolute;
    top: 60px;
    right: 20px;
}
.member{
    position: absolute;
    top: 50px;
    right: 0px;
    margin-top: 1.38667rem;
    width: 2.70667rem;
    height: 1.12rem;
    border-top-left-radius: .85333rem;
    border-bottom-left-radius: .85333rem;
    overflow: hidden;
    -webkit-animation: shake 1s linear 3;
    animation: shake 1s linear 3;
    background-image: linear-gradient(180deg,#574E44 0,#0E0E0E 100%);
    display: flex;
    align-items: center;
}
.memberIcon{
    width: 57px;
    height: 57px;
    background-position: 0 -.9rem;
    margin: 0 9px;
}
.memberTitle{
    color: white;
}
.memberTitleTop{
    font-size: .34667rem;
    line-height: .48rem;
    color: #F9E0C0;
}
.memberTitleBottom{
    display: flex;
}
.now{
    font-size: 12px;
    /* -webkit-transform: scale(0.8); */
    line-height: .37333rem;
    vertical-align: middle;
    color: #F9E0C0;
}
.more{
    width: 18px;
    height: 18px;
    background-position: 0 -38px;
    margin-left: 4px;
    background-size: 300%;
}

.contentContainer{
    height: 285px;
    width: 100%;
    background: white;
    margin-bottom: 20px;
}
.header{
    height: 105px;
    line-height: 105px;
    margin-left: 30px;
    border-bottom: 1px solid #D9D9D9;
    text-align: left;
    font-size: 28px;
}
.list{
    height: 160px;
    display: flex;
    align-items: center;
}
.listItem{
    width: 160px;
    height: 160px;
    padding-top: 32px;
    text-align: center;
}
.num{
    margin-bottom: 20px;
    font-size: .42667rem;
    /* line-height: .64rem; */
    font-weight: 700;
}
.num span{
    font-size: .32rem;
    font-weight: 400;
}
.name{
    font-size: .32rem;
}
.detailsContainer{
    height: 723px;
    margin-bottom: 40px;
    background: white;
}
.detailsItem{
    padding-top: 45px;
    text-align: center;
    float: left;
    width: 250px;
    height: 181px;
    border-right: 1px solid rgba(0,0,0,.15);
    border-bottom: 1px solid rgba(0,0,0,.15);
}
.no{
    border-right: none;
    border-bottom: 1px solid rgba(0,0,0,.15);
}
.detailsIcon{
    margin: 0 auto;
    width: 50px;
    height: 50px;
    background-size: 127.5%;
}
.order{
    background-position: 0 -700px;
}
.together{
    background-position: 0 -788px;
}
.service{
    background-position: 0 -340px;
}
.invitation{
    background-position: 0 -655px;
}
.first{
    background-position: 0 -880px;
}
.Integral{
    background-position: 0 -835px;
}
.club{
    background-position: 0 -744px;
}
.address{
    background-position: 0 -290px;
}
.Account{
    background-position: 0 47px;
}
.help{
    background-position: 0 -520px;
}
.opinion{
    background-position: 0 -430px;
}
.wu{
    border-bottom: none;
}

.headerLine{
    display: block;
    font-size: .32rem;
    line-height: .45333rem;
    color: #333;
    margin-top: 16px;
}

.signOut{
    width: 100%;
    height: 96px;
    line-height: 96px;
    margin-bottom: 120px;
    background: white;
    text-align: center;
    font-size: 28px;
}
</style>