<template>
  <div class="scrollIndexContainer">
        <div class="containerWrap">
            <!-- Swiper -->
            <Swiper></Swiper>

            <!-- center -->
            <div class="centerContainer">
                <ul class="center">
                    <li class="centerItem">
                        <img class="icon1" src="../../../public/images/yi.png"/>
                        <span>网易自营品牌</span>
                    </li>
                    <li class="centerItem">
                        <img class="icon1" src="../../../public/images/dui.png"/>
                        <span>30天无忧退货</span>
                    </li>
                    <li class="centerItem">
                        <img class="icon1" src="../../../public/images/qian.png"/>
                        <span>48小时快速退款</span>
                    </li>
                </ul>
            </div>

            <!-- 列表 -->
            <div class="listContainer">
                <div class="itemContainer" v-if="indexData.kingKongModule">
                    <div class="listItem" v-for="(item, index) in indexData.kingKongModule.kingKongList" :key="index">
                        <img :src="item.picUrl" alt="">
                        <span>{{item.text}}</span>
                    </div>
                </div>
            </div>
        
            <!-- 新人专享0元购 -->
            <div class="newBuyContainer">
                <div class="topContainer"></div>
                <div class="bottomContainer">
                    <div class="left"></div>
                    <div class="right"></div>
                </div>
            </div>







            <div class="test"></div>
        </div>
  </div>
</template>

<script>
import Swiper from '../swiper/swiper.vue'
import {mapState, mapActions} from 'vuex'
export default {
    components:{
        Swiper
    },
    mounted(){
        this.getIndexData()
    },
    computed:{
        ...mapState({
            indexData: state => state.index.indexData
        })
    },
    methods: {
        ...mapActions({
            getIndexData: "getIndexData"
        })
    }

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.scrollIndexContainer
    width 100%
    height 100%
    background #eee
    .containerWrap
        width 750px
        height 100%
        // background white
        text-align center
        .centerContainer
            width 100%
            height 72px
            background white
            .center
                padding 0 30px
                width 100%
                height 72px
                display flex
                box-sizing border-box
                justify-content space-between
                align-items center
                .centerItem
                    // width 228px
                    // height 36px
                    // margin 0 27px
                    // flex 1
                    white-space nowrap
                    img 
                        width 32px
                        height 32px
                        vertical-align middle
                    span 
                        font-size 24px
                        color #333
                        margin-left 8px
                        line-height 32px
                        display inline-block
                        vertical-align middle
        .listContainer
            width 100%
            height 372px 
            background white
            .itemContainer
                width 750px
                overflow hidden
                // float left
                // display flex
                // white-space pre-wrap
                .listItem
                    display inline
                    // display flex
                    // flex-direction column
                    align-items center
                    // display: block;
                    width: 110px;
                    height: 156px;
                    float: left;
                    margin: 10px 20px 9px
                    // margin: .13333rem .26667rem 0;
                    img 
                        width 110px
                        height 110px
                    span
                        margin-top 5px
                        text-align center
                        font-size .32rem
                        line-height .48rem
                        white-space nowrap
        .newBuyContainer
            width 100%
            background rgb(230, 73, 4)
            height 547.5px
            // background pink
            .topContainer
                height 4.28444rem
                background url('https://yanxuan.nosdn.127.net/d9b021de430394e9b274bf0455b53120.gif?imageView&quality=75')  0% 0% / 100% 100% 
            .bottomContainer
                display flex
                align-items center
                justify-content space-between
                margin 20px
                box-sizing border-box
                height 186px
                
                .left 
                    width 351px
                    height 100%
                    background url('../../../public/images/newBuy1.webp') 0% 0% / 100% 100%
                .right 
                    width 351px
                    height 100%
                    background  url('../../../public/images/newBuy2.webp') 0% 0% / 100% 100%






        .test
            height 1000px
</style>