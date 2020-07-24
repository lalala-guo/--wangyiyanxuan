<template>
  <div class="indexContainer">
    <div class="headerContainer">
      <!-- 头部 -->
      <div class="header">
        <a href="/index" src="../../../public/images/logo.webp"></a>
        <div class="inputContainer" @click="toSousuo">
          <i class="icon"></i>
          <span>搜索商品, 共34087款好物</span>
        </div>
        <!-- <button class="btn">登录</button>  plain  hairline -->
        <van-button class="btn" hairline type="danger" @click="toLogin">登录</van-button>
      </div>
      <!-- 导航  -->
      <div class="navContainer" ref="scroll">
        <!-- 左侧 -->
        <div class="left">
          <div class="navItem" @click="changeNavId(0,0)" :class="{active: navIndex === 0}">
            <span>推荐</span>
          </div>
          <div class="navItem" @click="changeNavId(index+1,item.id)" :class="{active: navIndex === (index+1)}" v-for="(item, index) in navList" :key="index">
            <span>{{item.name}}</span>
          </div>
        </div>
        <!-- 右侧 -->  
        <div class="right">
          <div class="linear"></div>
          <div class="xiala">
            <div is-link @click="show = true" class="icon"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- scroll -->
    <div class="container" >
      <ScroolIndex v-if="navIndex===0"></ScroolIndex>
      <IndexCate v-else :getindexDataList = 'getindexDataList'></IndexCate>
    </div>
    <!--  下来显示内容   遮罩 -->
    <van-overlay duration=0 :show="show"  @click="show = false" class="vanContent">
        <div class="wrapper" @click.stop>
          <div class="block">
            <div class="header positions">
              <a href="/index" src="../../../public/images/logo.webp"></a>
              <div class="inputContainer" @click="toSousuo">
                <i class="icon"></i>
                <span>搜索商品, 共34087款好物</span>
              </div>
              <van-button class="btn" hairline type="danger">登录</van-button>
            </div>
            <div class="contentContainer">
              <div class="title">
                  <h3>全部频道</h3>
                  <div class="zhuanhuan">
                    <div class="linear"></div>
                    <div class="xiala">
                      <i is-link @click="show = false" class="icon"></i>
                    </div>
                  </div>
              </div>
              <div class="lists">
                <div class="listItem" @click="changeNavId(0,0)" :class="{active: navIndex === 0}">
                  <span>推荐</span>
                </div>
                <div @click="changeNavId(index+1,item.id)" :class="{active: navIndex === index+1}" v-for="(item, index) in navList" :key="index" class="listItem">{{item.name}}</div>
              </div>
            </div>
          </div>
          
        </div>
      </van-overlay>
  </div>

  
</template>

<script>
import ScroolIndex from "../../pages/scrollIndex/scrollIndex.vue";
import IndexCate from "../../pages/indexCate/indexCate.vue";
import BScroll from "@better-scroll/core";
import {mapState, mapActions} from 'vuex'
export default {
  data() {
    return {
      active: 2,
      navIndex: 0,  // 点击的下标
      navId:'',  // 导航 id
      show: false,
    };
  },
  components: {
    ScroolIndex,
    IndexCate
  },
  async mounted() {
    await this.init();
    await this.getIndexCateData()
  },
  beforeDestroy() {
    this.bs.destroy();
  },
  computed:{
    ...mapState({
      navList: state => state.index.indexCateData
    }),
    getindexDataList(){
      return this.navList.find(item => item.id === this.navId)
    }
  },
  methods: {
    ...mapActions({
      getIndexCateData: "getIndexCateData"
      
    }),
    changeNavId(navIndex,id){
      this.navIndex = navIndex
      this.navId = id
      this.show = false
    },
    toSousuo(){
      this.$router.push('/sousuo?key=index')
      let tabBar = document.querySelector('.tabBarWrap')
      tabBar.style.display='none'
    },
    showPopup() {
      this.show = true;
    },
    toLogin(){
      this.$router.push('./personal')
    },
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        mouseWheel: true,
        disableMouse:false,
        disableTouch: false,
        resizePolling: 0,
        click: true,
        scrollX: true,
        probeType: 3 // listening scroll hook
      });
      this._registerHooks(["scroll", "scrollEnd"], pos => {
      });
    },
    _registerHooks(hookNames, handler) {
      hookNames.forEach(name => {
        this.bs.on(name, handler);
      });
    }
  }
};
</script>

<style scoped>
.indexContainer{
  top: 0;
  left: 0; 
  overflow: hidden;
}
.headerContainer{
   position: relative;
    /* z-index: 99; */
    /* position: flex;
    top: 0;
    left: 0; */
    width: 100%;
    height: 148px;
    background: white;
}
/* 头部 */
.header {
  /* width: 100%; */
  /* height: 1.6rem; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px 30px;
}
.header a {
  display: block;
  width: 138px;
  height: 40px;
  background-image: url("../../../public/images/logo.webp");
  background-size: cover;
  margin-right: 20px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.positions{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: white;
}
.contentContainer{
    position: absolute;
    top: 88px;
    left: 0;
    /* float: left; */
    width: 100%;
    height: 357px;
    padding: 0 30px 30px 30px;
    margin-bottom: 20px;
    background: white;
}
.contentContainer .title{
  align-items: center;
}
.contentContainer .title .zhuanhuan{
  height: 60px;
  line-height: 60px;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
}
.contentContainer .title .zhuanhuan .linear{
  width: 60px;
  height: 60px;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0,
    #fff 100%
  );
}
.contentContainer .title .zhuanhuan .xiala{
  position: relative;
  width: 100px;
  height: 60px;
  text-align: center;
  background: #fff;
}
.contentContainer .title .zhuanhuan .icon{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 30px;
  height: 30px;
  background-image: url("../../../public/images/01.png");
  background-size: 100% 100%;
  /* margin-bottom: ; */
}
.title{
    display: flex;
    height: 60px;
    line-height: 60px;
}
.title h3{
    color: #333;
    font-size: 28px;
    font-weight: 400;
    display: inline-block;
}
.lists{
    width: 750px;
    height: 100%;
    margin-right: -.4rem;
    margin-bottom: -.42667rem;
    zoom: 1;
    padding-top: 24px;
}
.lists .listItem{
    width: 150px;
    height: 56px;
    text-align: center;
    float: left;
    padding: 0 .2rem;
    margin-right: 30px;
    margin-bottom: 40px;
    line-height: 56px;
    border: 1px solid #999;
    border-radius: 4px;
    background: #FAFAFA;
    color: #333;
}
.listItem.active{
  border: 1px solid #DD1A21;
  color: #DD1A21;
}
.lists .listItem.colorRed{
    border-color: #DD1A21;
    color: #DD1A21;
}

.inputContainer {
  /* position: relative; */
  background: #eee;
  height: 56px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}
.inputContainer span {
  color: #666;
  font-size: 28px;
}
.inputContainer i {
  display: block;
  width: 28px;
  height: 28px;
  margin-right: 10px;
  background-image: url("../../../public/images/sousuo.webp");
  background-size: cover;
}
.btn {
  width: 74px;
  height: 40px;
  white-space: nowrap;
  text-align: center;
  color: #dd1a21;
  border-radius: 8px;
  margin-left: 16px;
  font-size: 24px;
  background: white;
}

/* 导航 */
.navContainer {
  width: 100%;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.navContainer .left {
  /* width: 650px; */
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
}
.navContainer .left .navItem {
  position: relative;
  height: 60px;
  font-size: 28px;
  white-space: nowrap;
  margin-right: 20px;
  color: #333;
}
.navContainer .left .navItem span {
  display: block;
  height: 60px;
  line-height: 60px;
  padding: 0 16px;
}
.navContainer .left .navItem.active {
  color: #dd1a21;
}
.navContainer .left .navItem.active:after {
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background: #dd1a21;
}

.navContainer .right {
  position: absolute;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
}
.navContainer .right .linear {
  width: 60px;
  height: 60px;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0,
    #fff 100%
  );
}
.navContainer .right .xiala {
  position: relative;
  width: 100px;
  height: 60px;
  text-align: center;
  background: #fff;
}
.navContainer .right .xiala .icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 30px;
  height: 30px;
  background-image: url("../../../public/images/xiala.webp");
  background-size: 100% 100%;
}

</style>