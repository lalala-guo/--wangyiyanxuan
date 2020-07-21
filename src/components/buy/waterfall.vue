<template>
  <div class="container-water-fall">
    <waterfall :col='col' :width="itemWidth" :gutterWidth="gutterWidth"  :data="waterLists"  @loadmore="loadmore"  @scroll="scroll"  >
      <template >
        <div class="cell-item" v-for="(item,index) in waterLists" :key="index">
          <div class="item-body" v-for="(listItem, index) in item.topics" :key="index">
              <img :src="listItem.picUrl" class="avatar" />
              <div class="name">{{listItem.title}}</div>
              <div class="user">
                  <img class="imgUser" :src="listItem.avatar" alt="">
                  <span>{{listItem.nickname}}</span>
                  <div class="lookContainer">
                      <img src="../../../public/images/look.png" alt="">
                      <span class="num">1778</span>
                  </div>
              </div>
              <div class="footer">
                  <div class="shopName">{{listItem.subTitle}}</div>
                  <div class="toBuy">去购买 ></div>
              </div>
          </div>
        </div>
      </template>
    </waterfall>
    
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
export default{
	data(){
	    return{
            waterLists:[],
	        data:[
                    {
							"categoryType": 0,
							"showIndex": 1,
							"superCategoryId": 1005000,
							"level": "L2",
							"wapBannerUrl": "https://yanxuan.nosdn.127.net/1d89de114797fb9237314920695c564d.png",
							"name": "秋冬好物",
							"id": 109243003,
							"frontDesc": "温暖秋冬",
							"type": 0,
							"subCateList": [],
							"frontName": "秋冬好物"
					},
					{
							"categoryType": 0,
							"showIndex": 2,
							"superCategoryId": 1005000,
							"level": "L2",
							"wapBannerUrl": "https://yanxuan.nosdn.127.net/0fe3073506c10f604c4ed7e0ba65d1f4.png",
							"name": "主题床品",
							"id": 109243004,
							"frontDesc": "设计点亮，品质当道",
							"type": 0,
							"subCateList": [],
							"frontName": "设计点亮，品质当道"
					},
					{
							"categoryType": 0,
							"showIndex": 3,
							"superCategoryId": 1005000,
							"level": "L2",
							"wapBannerUrl": "https://yanxuan.nosdn.127.net/02d3e51b8db87c331dc73bef9e217133.png",
							"name": "北欧原木",
							"id": 109252033,
							"frontDesc": "经典北欧风，打造原木家",
							"type": 0,
							"subCateList": [],
							"frontName": "经典北欧风，打造原木家"
					},
					{
							"categoryType": 0,
							"showIndex": 4,
							"superCategoryId": 1005000,
							"level": "L2",
							"wapBannerUrl": "https://yanxuan-item.nosdn.127.net/4ccd6ee87a83918474e7e962b06d96fd.png",
							"name": "餐厨爆款清单",
							"id": 109261015,
							"frontDesc": "烹饪享乐趣",
							"type": 0,
							"subCateList": [],
							"frontName": "烹饪享乐趣"
					},
					{
							"categoryType": 0,
							"showIndex": 6,
							"superCategoryId": 1005000,
							"level": "L2",
							"wapBannerUrl": "https://yanxuan.nosdn.127.net/ed6400e5be573e1524cdef0b5c9e462d.png",
							"bannerUrl": "",
							"name": "床品件套",
							"id": 1008009,
							"frontDesc": "甄选品质，睡眠美学",
							"type": 0,
							"subCateList": [],
							"frontName": "甄选品质，睡眠美学"
					},
					{
							"categoryType": 0,
							"showIndex": 7,
							"superCategoryId": 1005000,
							"level": "L2",
							"wapBannerUrl": "https://yanxuan.nosdn.127.net/96d109867f08a14af62d2390b7787439.png",
							"name": "被枕盖毯",
							"id": 109260008,
							"frontDesc": "陷进柔软，多样选择",
							"type": 0,
							"subCateList": [],
							"frontName": "陷进柔软，多样选择"
					},
                ],
	            col:2,
	    }
    },
    mounted(){
        this.$nextTick(() => {
            this.initList()
        })
        // let result = await axios('/online/topic/v1/find/recAuto.json?page=1&size=5&exceptIds=')
        // console.log(result.data.data.result);
        // this.waterLists = result.data.data.result
    },
	computed:{
	    itemWidth(){  
	            // return (138*0.5*(document.documentElement.clientWidth/375)) 
	    },
	    gutterWidth(){
	            // return (9*0.5*(document.documentElement.clientWidth/375))
	    }
	},
	methods:{
        async initList(){
            let result = await axios('/online/topic/v1/find/recAuto.json?page=1&size=5&exceptIds=')
            console.log(result.data.data.result);
            this.waterLists = result.data.data.result
        },
        scroll(scrollData){
                // console.log(scrollData)
        },
	    switchCol(col){
	        this.col = col
	            // console.log(this.col)
	    },
	    loadmore(index){
	        this.data = this.data.concat(this.data)
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
.avatar{
    width: 172.5*2px;
    height: 172.5*2px;
    background: pink;
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
    padding: 8.5*2px 8*2px 12*2px;
    width: 171.5*2px;
    height: 44.5*2px;
    line-height: 24*2px;
    // padding: 8.5*2px 8*2px 12*2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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