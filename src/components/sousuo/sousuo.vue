<template>
  <div class="container">
      <div class="headerC">
        <div class="top">
            <div class="inputWrap">
                <i class="icon"></i>
                <input value="searchValue" placeholder="梅雨季必备好物" v-model="searchValue" />
            </div>
            <span class="cancel" @click="cancel">取消</span>
        </div>
      </div>
      <div class="contentContainer" v-if="!searchValue">
          <div class="title">
              <h3>热门搜索</h3>
          </div>
          <div class="lists">
            <div class="listItem" :class="{colorRed: item.type===0}" v-for="(item, index) in searchList.hotKeywordVOList" :key="index">
                {{item.keyword}}
            </div>
          </div>
      </div>
      <div class="searchList" v-else>
        <van-cell-group>
            <van-cell v-for="(item, index) in searchNameList" :key="index" :title="item"  is-link/>
        </van-cell-group>
      </div>
  </div>
</template>

<script>
import $globalEventBus from '../../main.js'
import axios from 'axios'
var _ = require('lodash');
export default {
    data(){
        return {
            searchList:{},
            searchValue: '',
            searchNameList: [],
            flag: ''
        }
    },
    async mounted(){
        this.$globalEventBus.$emit("display", 'sousuo')
        let result = await axios('/searchFirst')
        this.searchList = result.data.data
        this.flag = this.$route.query.key
    },
    methods:{
        cancel(){
            console.log(this.flag);
            this.$router.push('./'+ this.flag)
            let tabBar = document.querySelector('.tabBarWrap')
            tabBar.style.display='block'
        }
    },
    watch: {
         searchValue(v){
             // 防抖  lodash里面
            _.debounce(async (v) => {
                let search = await axios(`/online/xhr/search/searchAutoComplete.json?keywordPrefix=${v}`)
                this.searchNameList = search.data.data 
            }, 500, {
                'leading': true,
                'trailing': false
            })(v)
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
.searchList{
    width: 100%;
}

</style>