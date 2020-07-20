<template>
    <div>
        <!-- 路由页面  -->
        <Router-view></Router-view>
        
        <!-- tabBar -->
        <div class="tabBarWrap">
            <div class="tabBar">
                    <div @click="changeActive('icon1')">
                        <Router-link class="item" :class="{active: activeFlag === 'icon1'}" to="/index">
                            <i class="icon1"></i>
                            <span>首页</span>
                        </Router-link>
                    </div>
                    <div @click="changeActive('icon2')">
                        <Router-link class="item" :class="{active: activeFlag === 'icon2'}" to="/category">
                            <i class="icon2" ></i>
                            <span >分类</span>
                        </Router-link>
                    </div>
                    <div @click="changeActive('icon3')">
                        <Router-link class="item" :class="{active: activeFlag === 'icon3'}" to="/buy">
                            <i class="icon3"></i>
                            <span>值得买</span>
                        </Router-link>
                    </div>
                    <div @click="changeActive('icon4')">
                        <Router-link class="item" :class="{active: activeFlag === 'icon4'}" to="/cart">
                            <i class="icon4 "></i>
                            <span>购物车</span>
                        </Router-link>
                    </div>
                    <div @click="changeActive('icon5')">
                        <Router-link class="item" :class="{active: activeFlag === 'icon5'}" to="/personal">
                            <i class="icon5 "></i>
                            <span>个人</span>
                        </Router-link>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
// import './rem.js'
export default {
    data(){
        return {
            activeFlag:'icon1'
        }
    },
    // mounted(){
    //     let divs = document.querySelectorAll('.tabBar .item')
    //     divs.forEach((item, index) => {
    //         item.addEventListener('click', () => {
    //             console.log("click");
    //             item.className = 'item active'

    //         })
    //     })
    // }
    methods:{
        changeActive(flag){
            console.log(flag);
            this.activeFlag = flag
        }
    }

}
</script>

<style >
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
    .item.active .icon1{
        background-position-y: -200px;
    }
    .item.active .icon2{
        background-position-y: -100px;
    }
    .item.active .icon3{
        background-position-y: -300px;
    }
    .item.active .icon4{
        background-position-y: -0px;
    }
    .item.active .icon5{
        background-position-y: -400px;
    }
    .item i {
        width: 40px;
        height: 40px;
        background-image: url("../public/images/xuebi.webp");
        background-size: 40px;
    }
    .item .icon1{
        background-position-y: -250px;
    }
    
    .item .icon2{
        background-position-y: -150px;
    }
    .item .icon3{
        background-position-y: -350px;
    }
    .item .icon4{
        background-position-y: -50px;
    }
    .item .icon5{
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