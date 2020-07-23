<template>
  <div class="cartContainer">
    <div class="cartHeader">
      <div class="title">购物车</div>
      <div class="card">领券</div>
    </div>
    <div class="listContainer">
      <ul class="lists">
        <li class="listItem">
          <i class="icon"></i>
          <span class="listTitle">30天无忧退货</span>
        </li>
        <li class="listItem">
          <i class="icon"></i>
          <span class="listTitle">48小时快速退款</span>
        </li>
        <li class="listItem">
          <i class="icon"></i>
          <span class="listTitle">满99元包邮费</span>
        </li>
      </ul>
    </div>

    <div class="contentContainer">
        <div class="content">
          <img class="cartBig" src="../../../public/images/cartBig.webp" alt="">
          <div>
            <van-button type="danger" class="text">登录</van-button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import $globalEventBus from '../../main.js'
export default {
  mounted(){
    this.$globalEventBus.$emit('active', this.$route.path)
  }
}
</script>

<style scoped>
.cartHeader{
  padding: 0 30px;
  width: 100%;
  height: 88px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title{
  font-size: 36px;
  color: #333;
}
.card{
  font-size: 30px;
  color: #DD1A21;
  margin-right: 30px;
}

.listContainer{
  width: 100%;
  height: 70px;
  padding: 0 30px;
}
.lists{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.listItem{
  display: flex;
  align-items: center;
}
.icon{
  display: block;
  width: 10px;
  height: 10px;
  background-image: url('../../../public/images/dian.webp');
  background-size: contain;
  margin-right: 6px;
}
.listTitle{
  font-size: .32rem;
  color: #666;
}

.contentContainer{
  width: 100%;
  position: absolute;
  left: 0;
  top: 158px;
  height: calc(100vh - 158px);
  background:  #f4f4f4;
}
.content{
  z-index: 99;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  margin-top: 384px;
  text-align: center;
}
.cartBig{
  width: 248px;
  height: 248px;
  margin-bottom: 20px;
}
.text{
  width: 480px;
  height: 92px;
}
</style>