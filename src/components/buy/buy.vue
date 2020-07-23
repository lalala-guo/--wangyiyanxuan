<template>
  <div class="buyContainer">
    <div class="topContainer">
      <div class="leftContainer">
        <div class="homeContainer" @click="toIndex">
          <i class="home" ></i>
        </div>
      </div>
      <div class="textContainer">值得买</div>
      <div class="rightContainer">
        <div class="homeContainer" @click="toSousuo">
          <i class="home find"></i>
        </div>
        <div class="homeContainer" @click="toCart">
          <i class="home cart"></i>
        </div>
      </div>
    </div>
    <div class="swiperCenterContainer">
      <div class="top">
        <img class="bg" src="../../../public/images/buybg.png" alt="" />
        <img class="bLogo" src="../../../public/images/buylogo.png" alt="">
        <span class="centerText">严选好物 用心生活</span>
      </div>
      <div class="bottomSwiperContainer">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in swiperList.navList" :key="index" >
              <div class="item1">
                <img class="itemImg" :src="item.picUrl" alt="">
                <div class="contentContainer">
                  <div class="text1">{{item.mainTitle}}</div>
                  <div class="text2">{{item.viceTitle}}</div>
                </div>
              </div>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-scrollbar">
          </div>
        </div>
      </div>
    </div>
    <div class="waterContainer">
      <Water />
    </div>
  </div>
</template>

<script>
import $globalEventBus from '../../main.js'
import axios from 'axios'
import '../../package/swiper-bundle.min.css'
import '../../package/swiper-bundle.min.js'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import Water from './waterfall.vue'
export default {
  data(){
    return{
      swiperList:[],
      activeId: 0,
    }
  },
  components:{
    Water
  },
  async mounted(){
    this.$globalEventBus.$emit('active', this.$route.path)
    let result = await axios('/online/topic/v1/know/navWap.json')
    this.swiperList = result.data.data
    // 初始化轮播
    await this.$nextTick(() => {
      this.initSwiper()
    })
  },
  methods:{
    toIndex(){
      this.$router.push('./index')
      let tabBar = document.querySelector('.tabBarWrap')
      tabBar.style.display='block'
    },
    toSousuo(){
      this.$router.push('/sousuo?key=buy')
      let tabBar = document.querySelector('.tabBarWrap')
      tabBar.style.display='none'
    },
    toCart(){
      this.$router.push('./cart')
      let tabBar = document.querySelector('.tabBarWrap')
      tabBar.style.display='block'
    },
    initSwiper(){
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        slidesPerColumn: 2,
        // spaceBetween: 10,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        scrollbar: {
          el: ".swiper-scrollbar",
          dragSize: 20
        }
      });
      swiper.scrollbar.dragEl.style.background='#DD1A21'
      console.log();
    }
  }
}
</script>

<style lang="less" scoped>

.swiper-container-horizontal > .swiper-scrollbar{
  height: 5px;
  width: 200px;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
}
.swiper-scrollbar-drag{
  height: 5px;
  width: 200px;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
}
.waterContainer{
  padding-top: 400*2px;
}
.topContainer{
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 50*2px;
  padding: 0 13*2px 0 12*2px;
  display: flex;
  justify-content: space-between;
  background: white;
}
.leftContainer{
  width: 70.5*2px;
}
.homeContainer{
  width: 23*2px;
  height: 50*2px;
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
.textContainer{
    font-size: 36px;
    // position: absolute;
    width: 75*2px;
    text-align: center;
    line-height: 50*2px;
    height: 20*2px;
    // left: 50%;
    // top: 50%;
    // margin-left: -.75rem;
    // margin-top: -.2rem;
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

.swiperCenterContainer{
  position: absolute;
  width: 375*2px;
  height: 342.5*2px;
  // margin-bottom: 30px;
  margin-bottom: 130px;
  left: 50%;
  transform: translateX(-50%);
}
.bLogo{
  width: 65*2px;
  height: 34.33*2px;
  position: absolute;
  top: 85*2px;
  left: 12px;
  z-index: 2;
}
.centerText{
  font-size: 30px;
  line-height: .44rem;
  height: .44rem;
  position: absolute;
  font-family: 'PingFangSC-Regular';
  left: 146px;
  top: 97*2px;
  color: #FFF;
}
.bg{
  margin-top: 100px;
  position: absolute;
  // top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 375*2px;
  height: 259*2px;
}
.bottomSwiperContainer{
  width: 355*2px;
  height: 270*2px;
  background: white;
  position: absolute;
  top: 123*2px;
  left: 20px;
  border-radius: 16px;
}

// swiper
.swiper-container {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
.swiper-slide {
  margin-top: 18*2px;
  margin-bottom: 18*2px;
  // margin-right: 6px;
  padding: 0 3*2px 3*2px;
  width: 84*2px;
  height: 100.5*2px;
  text-align: center;
  font-size: 18px;
  background: #fff;
  // margin-bottom: 3*2px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.item1{
  width: 84*2px;
  height: 100.5*2px;
  margin-bottom: 20px;
  // background: yellow;
}
.item2{
  margin-top: 14*4px;
}
.itemImg{
  width: 60*2px;
  height: 60*2px;
}
.contentContainer{
  width: 84*2px;
  height: 36*2px;
  text-align: center;
  margin-top: 4*2px;
}
.text1{
  font-family: 'PingFang-SC-Bold';
  font-weight: bold;
  font-size: .28rem;
  width: 100%;
  height: .4rem;
  white-space: nowrap;
  overflow: hidden;
  color: #333333;
  text-align: center;
  line-height: .4rem;
}
.text2{
  width: 100%;
  margin-top: 2px;
  font-family: 'PingFangSC-Regular';
  font-size: .2rem;
  color: #999999;
  text-align: center;
  height: .3rem;
  line-height: .3rem;
  white-space: nowrap;
  overflow: hidden;
}
.swiper-pagination{
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}
.paginationItem{
  width: 40px;
  height: 4px;
  display: inline-block;
  background: #D9D9D9;
  // opacity: .4;
  border-radius: 0;
  // margin-right: 10px;             
}
.paginationItem.active{
  background: #DD1A21;
}
</style>