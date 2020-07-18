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
    </div>
  
</template>

<script>
  export default {
    
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


</style>