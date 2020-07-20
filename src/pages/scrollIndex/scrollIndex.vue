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

            <!-- 新人专享礼 -->
            <div class="freshManContainner">
                <div class="freshHeader">
                    新人专享礼
                </div>
                <div class="contentContainer">
                    <div class="contentLeft">
                        <div class="name">新人专享礼包</div>
                        <div class="imgContainer">
                            <img class="leftImg" src="../../../public/images/freshMan.png" alt="">
                            <div class="more"></div>
                        </div>
                        
                    </div>
                    <div class="contentRight" v-if="indexData.indexActivityModule">
                        <!-- v-for="(item, index) in indexData.indexActivityModule" :key="index" -->
                        <div class="topRight" >
                            <div class="titleContainer" >
                                <div class="title">{{indexData.indexActivityModule[0].title}}</div>
                                <div class="content">{{indexData.indexActivityModule[0].subTitle}}</div>
                            </div>
                            <div class="imgwrap">
                                <img class="rightImg" :src="indexData.indexActivityModule[0].showPicUrl" alt="">
                            </div>
                        </div>
                        <div class="bottomRight">
                            <div class="titleContainer">
                                <div class="title">{{indexData.indexActivityModule[1].title}}</div>
                                <div class="content">{{indexData.indexActivityModule[1].tag}}</div>
                            </div>
                            <div class="imgwrap">
                                <img class="rightImg" :src="indexData.indexActivityModule[0].showPicUrl" alt="">
                                <div class="priceContainer">
                                    <div class="line1">￥1</div>
                                    <div class="line2">￥13.9</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 类目热销榜 -->
            <div class="hotListContainer" v-if="indexData.categoryHotSellModule">
                <div class="hotHeader">{{indexData.categoryHotSellModule.title}}</div>
                <div class="hotContainer">
                    <div class="hot1">
                        <div class="hotLeft">
                            <div class="hotName">{{indexData.categoryHotSellModule.categoryList[0].categoryName}}</div>
                            <img class="hotImg" :src="indexData.categoryHotSellModule.categoryList[0].showPicUrl" alt="">
                        </div>
                        <div class="hotRight">
                            <div class="hotName">{{indexData.categoryHotSellModule.categoryList[1].categoryName}}</div>
                            <img class="hotImg" :src="indexData.categoryHotSellModule.categoryList[1].showPicUrl" alt="">
                        </div>
                    </div>
                    <div class="hot2">
                        <div class="hotItem" v-for="(item,index) in indexData.categoryHotSellModule.categoryList.slice(2,10)" :key="index">
                            <div class="hotTitle">{{item.categoryName}}</div>
                            <img class="itemImg" :src="item.showPicUrl" alt="">
                        </div>
                    </div>
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
                justify-content space-between
                align-items center
                .centerItem
                    white-space nowrap
                    img 
                        width 32px
                        height 32px
                        vertical-align middle
                    span 
                        font-size 24px
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
                .listItem
                    display inline
                    align-items center
                    width: 110px;
                    height: 156px;
                    float: left;
                    margin: 10px 20px 9px
                    img 
                        width 110px
                        height 110px
                    span
                        margin-top 5px
                        text-align center
                        font-size 24px
                        line-height 36px
                        white-space nowrap
        .newBuyContainer
            width 100%
            background rgb(230, 73, 4)
            height 547.5px
            .topContainer
                height 4.28444rem
                background url('../../../public/images/xinren0yuan.gif')  0% 0% / 100% 100% 
            .bottomContainer
                display flex
                align-items center
                justify-content space-between
                margin 20px
                height 186px
                
                .left 
                    width 351px
                    height 100%
                    background url('../../../public/images/newBuy1.webp') 0% 0% / 100% 100%
                .right 
                    width 351px
                    height 100%
                    background  url('../../../public/images/newBuy2.webp') 0% 0% / 100% 100%
        .freshManContainner
            position relative
            margin 20px 0
            background white
            padding-bottom 30px
            .freshHeader
                padding 0 30px 
                font-family PingFangSC-Regular
                width 100%
                height 90px
                line-height 90px
                text-align center
                background white
                font-size 32px
                &:before 
                    position absolute
                    left 250px
                    top 45px
                    content ''
                    display block
                    width 24px
                    height 3px
                    background #333
                &:after
                    position absolute
                    right 250px
                    top 45px
                    content ''
                    display block
                    width 24px
                    height 3px
                    background #333
            .contentContainer
                display flex
                align-items center
                justify-content space-between
                padding 0 30px
                width 100%
                height 434px
                // background pink
                .contentLeft
                    width 343px
                    height 100%
                    background #F9E9CF
                    .name
                        text-align left 
                        padding 30px 0 0 30px
                        font-size 32px
                    .imgContainer
                        position relative
                        width 258px
                        height 257px
                        margin 37px auto
                        .leftImg
                            width 258px
                            height 257px
                        .more
                            width 30px
                            height 20px
                            position absolute
                            bottom 18px
                            right 65px
                            background-image url('../../../public/images/more.webp')
                            background-size 100% 100%
                .contentRight
                    width 343px
                    height 100%
                    .topRight
                        position relative
                        padding 20px 0 0 30px
                        width 100%
                        height 215px
                        background #FBE2D3
                        margin-bottom 4px
                        .imgwrap
                            position absolute
                            top 15px
                            right 0
                            width 200px
                            height 200px
                            .rightImg
                                width 200px
                                height 200px
                        .titleContainer
                            text-align left 
                            .title
                                font-size 32px
                            .content 
                                color #7F7F7F   
                    .bottomRight
                        position relative
                        padding 20px 0 0 30px
                        width 100%
                        height 215px
                        background #FFECC2
                        .imgwrap
                            position absolute
                            top 15px
                            right 0
                            width 200px
                            height 200px
                            .rightImg
                                width 200px
                                height 200px
                        .titleContainer
                            text-align left 
                            .title
                                font-size 32px 
                            .content 
                                // width 121px
                                white-space nowrap 
                                color white
                                background #CBB693
                                padding 0 10px
                                display inline-block
                        .priceContainer
                            position absolute
                            top 0
                            right 30px
                            width 80px
                            height 80px
                            border-radius 50%
                            background #F59524
                            opacity .8
                            padding-top 10px
                            .line1
                                color white
                                font-size 24px
                            .line2
                                color white
                                font-size 18px
                                margin-top -.09333rem
                                text-decoration-line line-through
        .hotListContainer
            background white
            .hotHeader
                width 100%
                height 100px
                line-height 100px
                padding 0 30px
                font-size 32px
                font-family PingFangSC-Regular
                text-align left 
            .hotContainer
                width 100%
                height 610px
                padding 0 20px 20px 30px
                .hot1
                    display flex
                    .hotLeft 
                        position relative 
                        margin 0 10px 10px 0
                        width 340px
                        height 200px
                        background #F9F3E4
                        .hotName
                            position relative
                            font-size 28px
                            color #333
                            padding-left 24px
                            margin-top 66px
                            text-align left
                            &:after
                                position absolute
                                left 30px
                                bottom -16px
                                content ""
                                display block
                                width 48px
                                height 4px
                                background #333
                        .hotImg
                            position absolute
                            top 0 
                            right 0
                            width 200px
                            height 200px
                    .hotRight
                        position relative 
                        width 340px
                        height 200px
                        background #EBEFF6
                        .hotName
                            position relative
                            font-size 28px
                            color #333
                            padding-left 24px
                            margin-top 66px
                            text-align left
                            &:after
                                position absolute
                                left 30px
                                bottom -16px
                                content ""
                                display block
                                width 48px
                                height 4px
                                background #333
                        .hotImg
                            position absolute
                            top 0 
                            right 0
                            width 200px
                            height 200px
                .hot2
                    // display flex 
                    // white-space pre-wrap
                    .hotItem
                        float left
                        width 165px
                        height 180px
                        background #F5F5F5
                        border-radius 4px
                        margin 0 10px 10px 0
                        overflow hidden
                        .hotTitle
                            font-size 24px
                            color #333
                            font-family PingFangSC-Medium
                            margin-top 10px
                        .itemImg
                            width 120px
                            height 120px
        .test
            height 1000px
</style>