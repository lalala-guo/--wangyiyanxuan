<template>
  <div class="scrollIndexContainer">
              <!-- Swiper -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../../../public/images/01.webp" />
                </div>
                <div class="swiper-slide">
                    <img src="../../../public/images/02.webp" />
                </div>
                <div class="swiper-slide">
                    <img src="../../../public/images/03.webp" />
                </div>
                <div class="swiper-slide">
                    <img src="../../../public/images/04.webp" />
                </div>
                <div class="swiper-slide">
                    <img src="../../../public/images/05.webp" />
                </div>
                <div class="swiper-slide">
                    <img src="../../../public/images/06.webp" />
                </div>
                <div class="swiper-slide">
                    <img src="../../../public/images/07.webp" />
                </div>
                <div class="swiper-slide">
                    <img src="../../../public/images/08.webp" />
                </div>
            </div>

            <!-- 分页 -->
            <div class="swiper-pagination">
                <span class="swiper-pagination-bottom active" ></span>
                <span class="swiper-pagination-bottom"></span>
                <span class="swiper-pagination-bottom"></span>
                <span class="swiper-pagination-bottom"></span>
                <span class="swiper-pagination-bottom"></span>
                <span class="swiper-pagination-bottom"></span>
                <span class="swiper-pagination-bottom"></span>
                <span class="swiper-pagination-bottom"></span>
            </div>
        </div>

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
        <!-- <div class="listContainer">
            <div class="itemContainer">
                <div class="listItem">
                    <img src="../../../public/images/bao.png" alt="">
                    <span>新品首发</span>
                </div>
                <div class="listItem">
                    <img src="../../../public/images/bao.png" alt="">
                    <span>新品首发</span>
                </div>
                <div class="listItem">
                    <img src="../../../public/images/bao.png" alt="">
                    <span>新品首发</span>
                </div>
                <div class="listItem">
                    <img src="../../../public/images/bao.png" alt="">
                    <span>新品首发</span>
                </div>
                <div class="listItem">
                    <img src="../../../public/images/bao.png" alt="">
                    <span>新品首发</span>
                </div>
                <div class="listItem">
                    <img src="../../../public/images/bao.png" alt="">
                    <span>新品首发</span>
                </div>
                <div class="listItem">
                    <img src="../../../public/images/bao.png" alt="">
                    <span>新品首发</span>
                </div>
                <div class="listItem">
                    <img src="../../../public/images/bao.png" alt="">
                    <span>新品首发</span>
                </div>
            </div>
        </div> -->




  </div>
</template>

<script>
import '../../package/swiper-bundle.min.css'
import '../../package/swiper-bundle.min.js'
import Swiper from 'swiper'
export default {
    mounted(){
        var swiper = new Swiper('.swiper-container', {
            // slidesPerView: 1,
            // spaceBetween: 30,
            // centeredSlides: true,
            autoplay: {
                delay: 2500,
                // disableOnInteraction: false,
            },
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                // type: 'bullets',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.scrollIndexContainer
    height 100%
.swiper-container 
    width 100%
    height 3.94667rem
    .swiper-wrapper
        width 100%
        height 3.94667rem
        .swiper-slide 
            width 100%
            height 100%
            text-align center
            font-size 0.48rem
            background #fff
            display -webkit-box
            display -ms-flexbox
            display -webkit-flex
            display flex
            -webkit-box-pack center
            -ms-flex-pack center
            -webkit-justify-content center
            justify-content cente
            -webkit-box-align center
            -ms-flex-align center
            -webkit-align-items center
            align-items center
            img
                width 100%
                height auto
    .swiper-pagination
        position absolute
        bottom 5%
        left 50%
        transform translateX(-50%)
        white-space nowrap
        .swiper-pagination-bottom
            width .53333rem
            height .05333rem
            display inline-block
            background #fff
            opacity .4
            border-radius 0
            margin-right .13333rem
    
.centerContainer
    width 100%
    height 0.96rem
    // background pink
    .center
        // padding 0 .4rem
        width 100%
        height .96rem
        display flex
        align-items center
        .centerItem
            margin 0 .36rem
            // flex 1
            white-space nowrap
            img 
                width .42667rem
                height .42667rem
                vertical-align middle
            span 
                font-size .32rem
                color #333
                margin-left .10667rem
                line-height .42667rem
                display inline-block
                vertical-align middle
.listContainer
    width 10rem
    .itemContainer
        float left
        // display flex
        .listItem
            display flex
            flex-direction column
            align-items center
            // display: block;
            width: 1.46667rem;
            // height: 2.08rem;
            // float: left;
            margin: .13333rem .26667rem 0;
            img 
                width 1.46667rem
                height 1.46667rem
            span
                margin-top .13333rem
                text-align center
                font-size .32rem
                line-height .48rem
                white-space nowrap



</style>