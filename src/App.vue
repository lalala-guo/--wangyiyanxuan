<template>
    <div>
        <!-- 路由页面  -->
        <Router-view></Router-view>
        
        <!-- tabBar -->
        <div class="tabBarWrap">
            <div class="tabBar">
                    <div @click="changeActive('index')">
                        <div class="item" @click="toIndex" :class="{active: activeFlag === 'index'}">
                            <i class="index"></i>
                            <span>首页</span>
                        </div>
                    </div>
                    <div @click="changeActive('category')">
                        <div class="item" @click="toCategory" :class="{active: activeFlag === 'category'}">
                            <i class="category"></i>
                            <span >分类</span>
                        </div>
                    </div>
                    <div @click="changeActive('buy')">
                        <div class="item" @click="toBuy" :class="{active: activeFlag === 'buy'}">
                            <i class="buy"></i>
                            <span>值得买</span>
                        </div>
                    </div>
                    <div @click="changeActive('cart')">
                        <div class="item" @click="toCart" :class="{active: activeFlag === 'cart'}">
                            <i class="cart "></i>
                            <span>购物车</span>
                        </div>
                    </div>
                    <div @click="changeActive('personal')" >
                        <div class="item" @click="toPersonal" :class="{active: activeFlag === 'personal'}" >
                            <i class="personal "></i>
                            <span>个人</span>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import $globalEventBus from './main.js'
export default {
    data(){
        return {
            activeFlag:'index'
        }
    },
    mounted(){
        this.$globalEventBus.$on('active', (v) => {
            this.activeFlag = v.split('/')[1]
            
        })
        // console.log(this.$route);
        // this.activeFlag = this.$route.query
    },
    methods:{
        toIndex(){
            if(this.$route.path === '/index'){
                this.activeFlag = 'index'
                return
            }
            this.$router.push('/index')
        },
        toCategory(){
            if(this.$route.path === '/category') {
                this.activeFlag = 'category'
                return
            }
            this.$router.push('/category')
        },
        toBuy(){
            if(this.$route.path === '/buy') return
            this.$router.push('/buy')
        },
        toCart(){
            if(this.$route.path === '/cart') return
            this.$router.push('/cart')
        },
        toPersonal(){
            if(this.$route.path === '/personal') return
           this.$router.push('/personal')
            // 获取 tabBar
            let tabBar = document.querySelector('.tabBarWrap')
            tabBar.style.display='none'
        },
        changeActive(flag){
            // console.log(flag);
            this.activeFlag = flag
        }
    }

}
</script>

<style >
    html,body{
        background: #eee;
    }
    *{
        margin: 0;
        padding: 0;
        /* color: #333; */
        box-sizing: border-box;
        font-family: PingFangSC-Light,helvetica,'Heiti SC';
    }
    .tabBarWrap{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 98px;
    }
    .tabBar{
        width: 100%;
        height: 98px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: .32rem;
        border-top: 1px solid #d9d9d9;
        background: white;
        
    }
    .item{
        color: #333;
        text-decoration-line: none;
        width: 98px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .item.active span{
        color: #b5262d;
    }
    .item.active .index{
        background-position-y: -200px;
    }
    .item.active .category{
        background-position-y: -100px;
    }
    .item.active .buy{
        background-position-y: -300px;
    }
    .item.active .cart{
        background-position-y: -0px;
    }
    .item.active .personal{
        background-position-y: -400px;
    }
    .item i {
        width: 40px;
        height: 40px;
        background-image: url("../public/images/xuebi.webp");
        background-size: 40px;
    }
    .item .index{
        background-position-y: -250px;
    }
    
    .item .category{
        background-position-y: -150px;
    }
    .item .buy{
        background-position-y: -350px;
    }
    .item .cart{
        background-position-y: -50px;
    }
    .item .personal{
        background-position-y: -450px;
    }


    /* .item .icon1{
        width: 20px;
        height: 20px;
        background-image: url("../public/images/xuebi.webp");
        background-size: 40px;
        background-position: 0 -250px;
    }
    .item .icon1.active{
        width: 20px;
        height: 20px;
        background-image: url("../public/images/xuebi.webp");
        background-size: 100% 100%;
        background-position: 0 -250px;
    }
    .item .icon2{
        width: 20px;
        height: 20px;
        background-image: url("../public/images/xuebi.webp");
        background-size: 100% 100%;
        background-position: 0 -250px;
    }
    .item .icon3{
        width: 20px;
        height: 20px;
        background-image: url("../public/images/xuebi.webp");
        background-size: 100% 100%;
        background-position: 0 -250px;
    }
    .item .icon4{
        width: 20px;
        height: 20px;
        background-image: url("../public/images/xuebi.webp");
        background-size: 100% 100%;
        background-position: 0 -250px;
    }
    .item .icon5{
        width: .53333rem;
        height: .53333rem;
        background-image: url("../public/images/xuebi.webp");
        background-size: .53333rem 6.53333rem;
    }
    .item.active{
        color: red;
    } */
</style>