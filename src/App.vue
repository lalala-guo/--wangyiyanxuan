<template>
    <div>
        <!-- 路由页面  -->
        <Router-view></Router-view>
        
        <!-- tabBar -->
        <div class="tabBarWrap">
            <div class="tabBar">
                <Router-link class="item active" to="/index" @click="changeActive">
                    <i class="icon1 "></i>
                    <span>首页</span>
                </Router-link>
                <Router-link class="item" to="/category">
                    <i class="icon2 "></i>
                    <span>分类</span>
                </Router-link>
                <Router-link class="item" to="/buy">
                    <i class="icon3 "></i>
                    <span>值得买</span>
                </Router-link>
                <Router-link class="item" to="/cart">
                    <i class="icon4 "></i>
                    <span>购物车</span>
                </Router-link>
                <Router-link class="item" to="/personal">
                    <i class="icon5 "></i>
                    <span>个人</span>
                </Router-link>
            </div>
        </div>
    </div>
</template>

<script>
import './rem.js'
export default {
    methods:{
        changeActive(){
            
        }
    }


}
</script>



<style>
    *{
        margin: 0;
        padding: 0;
    }
    .tabBarWrap{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 1.30667rem;
    }
    .tabBar{
        width: 100%;
        height: 1.30667rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: .32rem;
        border-top: 0.02667rem solid #d9d9d9;
        background: white;
        
    }
    .item{
        color: #333;
        text-decoration-line: none;
        width: 1.28rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .item .icon1{
        width: .53333rem;
        height: .53333rem;
        background-image: url("../public/images/xuebi.webp");
        background-size: .53333rem 6.53333rem;
    }
    .item .icon2{
        width: .53333rem;
        height: .53333rem;
        background-image: url("../public/images/xuebi.webp");
        background-size: .53333rem 6.53333rem;
    }
    .item .icon3{
        width: .53333rem;
        height: .53333rem;
        background-image: url("../public/images/xuebi.webp");
        background-size: .53333rem 6.53333rem;
    }
    .item .icon4{
        width: .53333rem;
        height: .53333rem;
        background-image: url("../public/images/xuebi.webp");
        background-size: .53333rem 6.53333rem;
    }
    .item .icon5{
        width: .53333rem;
        height: .53333rem;
        background-image: url("../public/images/xuebi.webp");
        background-size: .53333rem 6.53333rem;
    }
    .item.active{
        color: red;
    }
</style>