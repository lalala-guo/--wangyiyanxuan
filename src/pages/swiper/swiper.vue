<template>
        <!-- Swiper -->
            <div class="swiper-container" autoplay>
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
            
            <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
            </van-swipe> -->

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
                clickable: true,
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

//  .my-swipe .van-swipe-item 
//     color #fff
//     font-size 20px
//     line-height 150px
//     text-align center
//     background-color #39a9ed

    .swiper-container 
            width 100%
            height 296px
            .swiper-wrapper
                width 100%
                height 296px
                .swiper-slide 
                    width 100%
                    height 100%
                    text-align center
                    // font-size 36.5px
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
                bottom 30px
                left 50%
                transform translateX(-50%)
                white-space nowrap
                .swiper-pagination-bottom
                    width 40px
                    height 4px
                    display inline-block
                    background #fff
                    opacity .4
                    border-radius 0
                    margin-right 10px
                    &.active
                        opacity 1



</style>