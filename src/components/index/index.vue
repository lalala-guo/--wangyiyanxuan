<template>
  <div class="indexContainer">
    <div class="headerContainer">
      <!-- 头部 -->
      <div class="header">
        <a href="/index" src="../../../public/images/logo.webp"></a>
        <div class="inputContainer">
          <i class="icon"></i>
          <span>搜索商品, 共34087款好物</span>
        </div>
        <!-- <button class="btn">登录</button>   hairline -->
        <van-button class="btn" plain type="danger">登录</van-button>
      </div>
      <!-- 导航    ref="scroll" -->
      <!-- <div class="navContainer" >
        <van-tabs class="left" v-model="active" swipeable>
          <van-tab class="navItem active" title="推荐" ></van-tab>
          <van-tab class="navItem" title="居家生活"></van-tab>
          <van-tab class="navItem" title="服饰鞋包"></van-tab>
          <van-tab class="navItem" title="美食酒水"></van-tab>
          <van-tab class="navItem" title="美食酒水"></van-tab>
          <van-tab class="navItem" title="美食酒水"></van-tab>
          <van-tab class="navItem" title="美食酒水"></van-tab>
          <van-tab class="navItem" title="美食酒水"></van-tab>
          <van-tab class="navItem" title="美食酒水"></van-tab>
        </van-tabs> -->
      <div class="navContainer" ref="scroll">
        <div class="left">
          <div class="navItem active">
            <span>推荐</span>
          </div>
          <div class="navItem">
            <span>居家生活</span>
          </div>
          <div class="navItem">
            <span>服饰鞋包</span>
          </div>
          <div class="navItem">
            <span>美食酒水</span>
          </div>
          <!-- active -->
          <div class="navItem">
            <span>美食酒水</span>
          </div>
          <div class="navItem">
            <span>美食酒水</span>
          </div>
          <div class="navItem">
            <span>美食酒水</span>
          </div>
          <div class="navItem">
            <span>美食酒水</span>
          </div>
          <div class="navItem">
            <span>美食酒水</span>
          </div>
        </div>
        
        <div class="right">
          <div class="linear"></div>
          <div class="xiala">
            <i class="icon"></i>
          </div>
        </div>
      </div>
        
      <!-- <van-tabs v-model="active" swipeable>
        <van-tab v-for="index in 4" :title="'选项 ' + index">
          内容 {{ index }}
        </van-tab>
      </van-tabs> -->



    </div>

    <!-- scroll -->
    <div class="container">
      <ScroolIndex></ScroolIndex>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import ScroolIndex from "../../pages/scrollIndex/scrollIndex.vue";

export default {
  data() {
    return {
      active: 2,
    };
  },
  components: {
    ScroolIndex
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.bs.destroy();
  },
  methods: {
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollX: true
        //   probeType: 3 // listening scroll hook
      });
      this._registerHooks(["scroll", "scrollEnd"], pos => {
        //   console.log('done')
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

<style >
.headerContainer{
    width: 100%;
    height: 148px;
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
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 30px;
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

.container {
  height: calc(100vh - 148px);
}
</style>