<template>
  <div class="container-water-fall">
    <waterfall :col='col' :data="waterLists"  @loadmore="loadmore"   >
      <template >
        <div class="cell-item" v-for="(listItem,index) in waterLists" :key="index">
          <div class="item-body" >
              <div class="imgContainer">
                  <img :lazy-src="listItem.picUrl" :class="{avatar: listItem.layoutType==2}" />
              </div>
              <div class="name">{{listItem.title}}</div>
              <div class="user">
                  <img class="imgUser" :lazy-src="listItem.avatar" alt="">
                  <span>{{listItem.nickname}}</span>
                  <div class="lookContainer">
                      <img src="../../../public/images/look.png" alt="">
                      <span class="num">1778</span>
                  </div>
              </div>
              <div class="footer" v-if="listItem.buyNow">
                  <div class="shopName">{{listItem.buyNow.itemName}}</div>
                  <div class="toBuy">去购买 ></div>
              </div>
          </div>
        </div>
      </template>
    </waterfall>
  </div>
</template>

<script>
import axios from 'axios'
export default{
	data(){
	    return{
            waterLists:[],
            col:2,
            page: 1,
	    }
    },
    mounted(){
        this.$nextTick(() => {
            this.initList(1)
        })
    },
	methods:{
        async initList(page){
            let resultWater = await axios(`/online/topic/v1/find/recAuto.json?page=${page}&size=5&exceptIds=`)
            let logs = resultWater.data.data.result
            logs.forEach(item => {
                this.waterLists.push( ...item.topics, item.look)
            })
        },
	    loadmore(index){
            console.log('触底');
            let pagmore = this.page += 1
            this.initList(pagmore)
	    }
	}
}
</script>

<style lang="less" scoped>
.container-water-fall{
    width: 710px;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    margin: 0 auto;
    margin-top: 15px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.item-body{
    width: 172.5*2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: .16rem;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    background: white;
    margin-bottom: 20px;;
}
.imgContainer img{
    width: 100%;
    // width: 172.5*2px;
    // height: 95.83*2px;
    // margin-left: -35%;
}
.imgContainer .avatar{
    // width: 100%;
    width: 172.5*3.4px;
    height: 172.5*2px;
    margin-left: -34%;
    // background: pink;
}
.name{
    width: 155.5*2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 9*2px 8*2px 0;
    color: #333;
    font-size: 30px;
    // line-height: 40*2px;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    lines: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-family: 'PingFangSC-Regular';
    background-color: #fff;
    text-align: left;
}
.user{
    position: relative;
    padding: 8.5*2px 8*2px 12*2px;
    width: 171.5*2px;
    height: 44.5*2px;
    line-height: 24*2px;
    // padding: 8.5*2px 8*2px 12*2px;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
}
.user .imgUser{
    width: 24*2px;
    height: 24*2px;
    border-radius: 50%;
}
.user span{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .22rem;
    color: #7f7f7f;
    height: 48px;
    line-height: 48px;
    margin-left: .08rem;
}
.lookContainer{
    position: absolute;
    right: 20px;
    height: 24*2px;
    text-align: center;
    line-height: 24*2px;
    display: flex;
    align-items: center;
}
.lookContainer img{
    width: 16*2px;
    height: 16*2px;
    vertical-align: middle;
}
.num{
    vertical-align: middle;
    font-size: .24rem;
    color: #7f7f7f;
    max-width: .9rem;
    text-align: right;
    height: .32rem;
    line-height: .32rem;
    margin-left: .02rem;
}
.footer{
    width: 152.5*2px;
    height: 20*2px;
    padding: 0 8*2px;
    display: flex;
    justify-content: space-between;
}
.shopName{
    vertical-align: middle;
    display: inline-block;
    width: 2.07rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .22rem;
    color: #333333;
    line-height: .32rem;
    height: .32rem;
}
.toBuy{
    display: inline-block;
    vertical-align: top;
    font-size: .22rem;
    color: #DD1A21;
    line-height: .32rem;
    height: .32rem;
}
</style>