<template>
  <div>
    <van-swipe  ref="vanSwiper" @change="onChange" class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in swipeData" :key="index">
        <img  :src="item" >
      </van-swipe-item>
      <template #indicator>
        <div class="container" >
          <div @click="changeSwiperItem(index)" v-for="(item, index) in swipeData" 
              :key="index" class="custom-indicator"
              :class="{active:index===current}"
              >
          </div>
        </div>
      </template>
    </van-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
        //  轮播的数组
      swipeData: [
          'https://yanxuan.nosdn.127.net/53bcfcfc2f09f674a3a2e1372e3811ad.png?type=webp&imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/5a41cb42da592557824f8e546cff6693.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/e1d32c538a9fcf420411592746098ad2.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/8104acf1cc1514a88ea0b7d030e9a55e.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/2a1b91834498b175effc84f0e23547c4.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'http://yanxuan-miaobi.nos-jd.163yun.com/3989779_1_6_wap_af2ab96b6e10e59572ca453a305be775.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'http://yanxuan-miaobi.nos-jd.163yun.com/3805013_1_1_wap_3daf23060c99862470ef09b107f50dcc.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/50bc9d8901b05f7917156584812a853f.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
      ],
      current:0,//轮播的下标
    }
  },
  methods: {
     //轮播图发生变化的回调
    onChange(index) {
        // 更改current的值
      this.current = index;
    },
    //点击指示器的回调
    changeSwiperItem(index){
        // swiperTo 切换到指定位置
      this.$refs.vanSwiper.swipeTo(index);
    }
  },
}
</script>
<style lang="less" scoped>
  .my-swipe {
        height: 320px;
        width: 750px;
        .container{
          width: 100%;
          position: absolute;
          left: 0;
          bottom: 30px;
          display: flex;
          justify-content: center;
        }
        .custom-indicator {
          font-size: 12px;
          background-color: #fff;
          width: 40px;
          border-radius: 10px;
          height: 4px;
          margin-right: 8px;
          opacity: .4;
          &.active{
            opacity: 1;
          }
        }
        .van-swipe-item{
          height:296px;
          bottom: 40px;
          img{
          // width: 100%;
          height: 370px;
        }
        }
      }
</style>