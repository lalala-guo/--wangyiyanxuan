<template>
    <div class="indexContainer">
        <!-- 头部 -->
        <div class="header">
            <a href="/index" src="../../../public/images/logo.webp" ></a>
            <div class="inputContainer">
                <i class="icon"></i>
                <span>搜索商品, 共34087款好物</span>
            </div>
            <button class="btn">登录</button>
        </div>
        <!-- 导航 -->
        <div class="navContainer" >
            <div ref="navContainer">
                <div class="left">
                    <div class="navItem active">
                        <span>推荐</span>
                    </div>
                    <div class="navItem">
                        <span>居家生活</span>
                    </div>
                    <div class="navItem">
                        <span>服饰鞋包</span>
                    </div>
                    <div class="navItem">
                        <span>美食酒水</span>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="linear"></div>
                <div class="xiala">
                    <i class="icon"></i>
                </div>
            </div>
        </div>

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

            <div class="swiper-pagination">
                <span class="swiper-pagination-bottom"></span>
                <span class="swiper-pagination-bottom"></span>
                <span class="swiper-pagination-bottom"></span>
                <span class="swiper-pagination-bottom"></span>
                <span class="swiper-pagination-bottom"></span>
                <span class="swiper-pagination-bottom"></span>
                <span class="swiper-pagination-bottom"></span>
                <span class="swiper-pagination-bottom"></span>
            </div>
        </div>
    </div>
  
</template>

<script>
import '../../package/swiper-bundle.min.css'
import '../../package/swiper-bundle.min.js'
// import '../../swiper.js'
import Swiper from 'swiper'
  export default {
    mounted(){
        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }
  }
</script>

<style>
/* 头部 */
    .header{
        /* width: 100%; */
        /* height: 1.6rem; */
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: .21333rem .4rem;
    }
    .header a{
        display: block;
        width: 1.84rem;
        height: .53333rem;
        background-image: url('../../../public/images/logo.webp') ;
        background-size: cover;
        margin-right: .26667rem;
    }
    .inputContainer{
        /* position: relative; */
        background: #eee;
        height: .74667rem;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: .10667rem;
    }
    .inputContainer span{
        /* position: absolute;
        left: 0;
        top: 50%; */
        color: #666;
        font-size: .37333rem;
        /* text-align: center; */
        height: .74667rem;
        line-height: .74667rem;   
    }
    .inputContainer i{
        display: block;
        width: .37333rem;
        height: .37333rem;
        margin-right: .13333rem;
        background-image: url('../../../public/images/sousuo.webp');
        background-size: cover;
    }
    .btn{
        width: .98667rem;
        height: .53333rem;
        line-height: .53333rem;
        text-align: center;
        color: #DD1A21;
        border: 1px solid #DD1A21;
        border-radius: .10667rem;
        margin-left: .21333rem;
        font-size: .32rem;
        background: white;
    }
/* 导航 */
    .navContainer{
        position: relative;
        display: flex;
        align-items: center;
        overflow: hidden;
    }
    .navContainer .left{
        width: 100%;
        height: 0.8rem;
        display: flex;
        align-items: center;
        padding: 0 .4rem;
    }
    .navContainer .left .navItem{
        font-size: .37333rem;
        white-space: nowrap;
        margin-right: .26667rem;
        color: #333;
    }
    .navContainer .left .navItem span{
        padding: 0 .21333rem;
    }
    .navContainer .left .navItem.active{
        color: #DD1A21;
    }
    .navContainer .left .navItem.active:after{
        content: '';
        display: block;
        width: 100%;
        height: 0.026667rem;
        background: #DD1A21;
    }

    .navContainer .right{
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
    }
    .navContainer .right .linear {
        width: .8rem;
        height: .8rem;
        background-image: linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%);
    }
    .navContainer .right .xiala{
        position: relative;
        width: 1.33333rem;
        height: .8rem;
        text-align: center;
        background: #fff;
    }
    .navContainer .right .xiala .icon{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: .4rem;
        height: .4rem;
        background-image: url('../../../public/images/xiala.webp');
        background-size: 100% 100%;
    }


    .swiper-container {
      width: 100%;
      height: 3.94667rem;
    }

    .swiper-slide {
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: 0.48rem;
      background: #fff;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    .swiper-slide img{
        width: 100%;
        height: 100%;
    }
    .swiper-pagination{
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
    }
    .swiper-pagination .swiper-pagination-bottom{
        width: .53333rem;
        height: .05333rem;
        display: inline-block;
        background: #fff;
        opacity: .4;
        border-radius: 0;
        margin-right: .13333rem;
    }

</style>