<template>
  <div class="container">
      <div class="headerC">
        <div class="top">
            <div class="inputWrap">
                <i class="icon"></i>
                <input placeholder="梅雨季必备好物" />
            </div>
            <span class="cancel" @click="cancel">取消</span>
        </div>
      </div>
      <div class="contentContainer">
          <div class="title">
              <h3>热门搜索</h3>
          </div>
          <div class="lists">
            <div class="listItem colorRed">梅雨季必备</div>
            <div class="listItem">牛奶</div>
            <div class="listItem">电动牙刷</div>
            <div class="listItem colorRed">梅雨季必备</div>
            <div class="listItem">牛奶</div>
            <div class="listItem">电动牙刷</div>
            <div class="listItem colorRed">梅雨季必备</div>
            <div class="listItem">牛奶</div>
            <div class="listItem">电动牙刷</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        cancel(){
            // let id = this.$route.params.id
            // console.log(id);
            this.$router.push('./index')
            let tabBar = document.querySelector('.tabBarWrap')
            tabBar.style.display='block'
        }
    }
}
</script>

<style scoped>
html,body{
   background: #eee;
}
.headerC{
    width: 100%;
    height: 88px;
    background: white;
    padding: 0 30px;
}
.top{
    width: 100%;
    height: 88px;
    line-height: 88px;
    display: flex;
    /* align-items: center; */
    margin: auto;
    height: 88px;
}
.inputWrap{
    padding: 0 20px;
    display: flex;
    align-items: center;
    flex: 1;
    height: 56px;
    line-height: 56px;
    border-radius: 4px;
    background: #eee;
    margin-top: 16px;
}
.inputWrap .icon{
    margin-right: 10px;
    display: block;
    width: 28px;
    height: 28px;
    margin-right: 10px;
    background-image: url("../../../public/images/sousuo.webp");
    background-size: cover;
}
.inputWrap input{
    /* color: #666;
    font-size: 28px; */
    box-shadow: none;
    outline: 0;
    font-family: PingFangSC-Light,helvetica,'Heiti SC';
    font-size: 28px;
    border: none;
    color: rgba(0,0,0,.8);
    background-color: transparent;
}
.cancel{
    font-size: 28px;
    padding-left: 30px;
    color: #333;
}
.contentContainer{
    width: 100%;
    height: 357px;
    padding: 0 30px 30px 30px;
    margin-bottom: 20px;
    background: white;
}
.title{
    height: 90px;
    line-height: 90px;
    /* background: yellow; */
}
.title h3{
    color: #999;
    font-weight: 400;
}
.lists{
    /* display: flex; */
    margin-right: -.4rem;
    margin-bottom: -.42667rem;
    zoom: 1;
}
.lists .listItem{
    float: left;
    padding: 0 .2rem;
    margin-right: .42667rem;
    margin-bottom: .42667rem;
    line-height: .61333rem;
    border: 1px solid #999;
    border-radius: 4px;
    color: #333;
}
.lists .listItem.colorRed{
    border-color: #DD1A21;
    color: #DD1A21;
}
</style>