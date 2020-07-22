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
        <div class="content"></div>
    </div>
  </div>
</template>

<script>
export default {

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
  height: 100%;
  background:  #f4f4f4;
}
.content{
  height: 300px;
  background: pink;
  margin-top: 498px;
}
</style>