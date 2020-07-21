<template>
    <div class="indexCateContainer" ref="scroll">
        <div class="container">
            <div class="swiperContainer">
                <Swiper></Swiper>
            </div>
            <div class="listContainer">
                <div class="container">
                    <div class="titleContainer">
                        <div class="name">口碑好物</div>
                        <div class="desc">口碑好物</div>
                    </div>
                    <div class="listWrap">
                        <!-- v-for="(item, index) in indexData.tagList" :key="index" -->
                        <div class="cateItem" v-for="(item, index) in getindexDataList.subCateList" :key="index">
                            <div class="itemWrap">
                                <div class="imgWrap">
                                    <img class="cateImg" :src="item.wapBannerUrl" mode=""/>
                                </div>
                                <div class="descWrap">
                                    <div class="desc">【{{item.name}}】{{item.frontDesc}}</div>
                                    <div class="priceContainer">
                                        <span class="nowPrice">￥1399</span>
                                        <span class="pastPrice">￥1799</span>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Swiper from '../swiper/swiper.vue'
import {mapState, mapActions} from 'vuex'
export default {
    props:['getindexDataList'],
    components:{
        Swiper
    },
    mounted(){
        this.init()
        // this.getIndexData()
    },
    beforeDestroy() {
      this.bs.destroy()
    },
    methods: {
        init() {
            this.bs = new BScroll(this.$refs.scroll, {
                mouseWheel: true,
                disableMouse:false,
                disableTouch: false,
                resizePolling: 0,
                scrollY: true,
                click: true,
                probeType: 3 // listening scroll hook
            })
            this._registerHooks(['scroll', 'scrollEnd'], (pos) => {
                console.log('done')
            })
        },
        clickHandler (item) {
            alert(item)
        },
        _registerHooks(hookNames, handler) {
            hookNames.forEach((name) => {
            this.bs.on(name, handler)
            })
        }
        // ...mapActions({
        //     getIndexData: "getIndexData"
        // }),
    },
     computed:{
        // ...mapState({
        //     indexData: state => state.index.indexData
        // })
    },
    
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.indexCateContainer
    width 100%
    height calc(100vh - 148px)
    overflow hidden
    .listContainer
        overflow hidden
        background #eee
        .container
            width 100%
            // height 120px
            margin-top 20px
            background white
            .titleContainer
                width 100%
                height 120px
                text-align center
                .name
                    line-height 90px
                    font-size 32px
                    color #333
                .desc
                    line-height 0px
                    color #999
            .listWrap
                display flex
                flex-wrap wrap
                justify-content space-around
                &:after
                    content ''
                    width 344rpx   
                    height 0
                .cateItem
                    width 50%
                    padding 0 10px 33px 20px
                    .itemWrap
                        width 100%
                        height 569px
                        // background yellow 
                        .imgWrap
                            width 100%
                            height 390px
                            background #eee
                            .cateImg
                                width 345px
                                height 345px
                    .descWrap
                        .desc
                            margin-top .21333rem
                            line-height .53333rem
                            text-align left
                            font-size .37333rem
                            text-overflow: ellipsis
                            overflow hidden
                            color #333
                            font-family PingFangSC-Regular
                            display -webkit-box
                            -webkit-line-clamp: 2
                            word-break break-all
                        .nowPrice
                            font-size .42667rem
                            line-height .64rem
                            text-align left
                            color #dd1a21
                            font-family PingFangSC-Regular
                            letter-spacing:-1px;
                        .pastPrice
                            margin-left .10667rem
                            font-size .32rem
                            color #999
                            line-height .48rem
                            text-decoration line-through
                            font-family PingFangSC-Light
                            letter-spacing:-1px;
</style>