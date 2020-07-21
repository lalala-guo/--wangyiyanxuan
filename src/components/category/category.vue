<template>
  <div class="cateGaryContainer">
    <!-- 头部搜索 -->
    <div class="cateGaryHeader">
        <div class="headerContainer"  @click="toSousuo">
          <i class="../../../public/images/sousuo.webp"></i>
          <span>搜索商品, 共34087款好物</span>
        </div>
    </div>
    <!-- 列表    -->
   <div class="scrollContainer">
      <div class="CateListContainer" ref="scroll" >
        <div class="leftCateList" >
          <div class="itemCate" :class="{active: activeIndex===index}" @click="changeActiveIndex(index,item.id)" v-for="(item, index) in cateNavData.slice(4, 12)" :key="index">
            {{item.name}}
          </div>
          <!-- <div class="itemCate">推荐</div>
          <div class="itemCate">推荐</div>
          <div class="itemCate">推荐</div>
          <div class="itemCate">推荐</div>
          <div class="itemCate">推荐</div>
          <div class="itemCate">推荐</div> -->
        </div>
      </div>
      <div class="CateListContainer" ref="scroll">
        <div class="rightList">
            <div class="cateContainer" v-if="cateId === (11 || 12 || 13 || 109217021)"  >
              <div class="cateTop">
                  <img src="../../../public/images/banner.webp" alt="">
              </div>
              <div class="cateBottom">
                  <div class="cateListContainer" v-if=" cateGoryList">
                      <div class="cateItem" v-for="(item, index) in cateGoryList.categoryList" :key="index">
                          <div class="imgContainer">
                              <img :src="item.bannerUrl" alt="">
                          </div>
                          <div class="imgDesc">{{item.name}}</div>
                      </div>
                  </div>
              </div>
            </div>
            <!-- v-else -->
            <div class="cateContainertwo" v-else>
              <div class="cateTop">
                  <img src="../../../public/images/banner.webp" alt="">
              </div>
              <div class="cateBottom">
                  <div class="cateListContainer" v-if=" cateGoryList">
                      <div class="lists" >
                        <div class="title">口碑好物</div>
                        <div class="cateItem" v-for="(item, index) in cateGoryList.subCateList.slice(0,9)" :key="index">
                          <div class="imgContainer">
                            <img :src="item.wapBannerUrl" alt="">
                          </div>
                          <div class="imgDesc">{{item.name}}</div>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
   </div>
  </div>
</template>

<script>
import CateGoryOne from '../../pages/cateGoryOne/cateGoryOne.vue'
import BScroll from "@better-scroll/core";
import {mapState, mapActions, mapMutations,mapGetters} from 'vuex'
export default {
  data(){
    return {
      activeIndex: 0,
      cateId:11,  // 分类id
    }
  },
  components:{
    CateGoryOne
  },
  async mounted(){
    this.init()
    this.getCateData()
    this.getCateList()
  },
  beforeDestroy() {
    this.bs.destroy()
  },
  computed:{
    ...mapState({
      cateNavData: state => state.cateList.cateNavData,
      cateLists: state => state.cateList.cateLists
    }),
    cateGoryList(){
      return this.cateLists.find(item => item.id === this.cateId)
    }
  },
  methods:{
    changeActiveIndex(index, id){
      this.activeIndex = index
      this.cateId = id
      console.log(this.cateGoryList);
    },
    ...mapActions({
      getCateData: 'getCateData',
      getCateList: 'getCateList'
    }),
    toSousuo(){
      this.$router.push({path:'/sousuo' })
    },

    init() {
            this.bs = new BScroll(this.$refs.scroll, {
                mouseWheel: true,
                disableMouse:false,
                disableTouch: false,
                resizePolling: 0,
                scrollY: true,
                click: true,
                probeType: 3 // listening scroll hook
            })
            this._registerHooks(['scroll', 'scrollEnd'], (pos) => {
                console.log('done')
            })
        },
        clickHandler (item) {
            alert(item)
        },
        _registerHooks(hookNames, handler) {
            hookNames.forEach((name) => {
            this.bs.on(name, handler)
            })
        }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.cateGaryContainer
  position relative
  padding-top 88px
  background white
  .cateGaryHeader
    z-index 2
    width 100%
    height 88px
    padding 0 30px
    background white
    position absolute
    top 0
    left 0
    &:after
        content ""
        position absolute
        background-color #d9d9d9
        left 0
        width 100%
        height 1px
        -webkit-transform-origin 50% 100% 0
        transform-origin 50% 100% 0
        bottom 0
    .headerContainer
      // width 690px
      height 56px
      line-height 56px
      margin-top 16px
      background #ededed
      display flex
      align-items center
      justify-content center
      border-radius 4px
      span 
        color #666
        font-size 28px
      i 
        display block
        width 28px
        height 28px
        margin-right 10px
        background-image url("../../../public/images/sousuo.webp")
        background-size cover
  .scrollContainer
    display flex
    .CateListContainer
      height calc(100vh - 88px)
      display flex
      // height 100%
      .leftCateList
        padding 40px 0 0 0 
        width 162px
        border-right 1px solid #d9d9d9
        .itemCate
          position relative
          margin-bottom 40px
          width 100%
          height 50px
          color #333
          font-size 28px
          text-align center
          line-height 50px
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
          &.active:after
            content ""
            display block
            width 6px
            height 50px
            background  #ab2b2b
            position absolute
            left 0
            top 0
      .rightList
        width 588px
        // height 100%
        // background pink
        .cateContainer
          padding 30px 30px 21px 30px
          .cateTop
              width 528px
              height 192px
              margin-bottom 32px
              img 
                  width 100%
                  height 100%
          .cateItem
              float left
              width 144px
              height 216px
              margin-left 34px
              // background yellow
              &:nth-of-type(1)
                  margin 0
              &:nth-of-type(4)
                  margin 0
              &:nth-of-type(7)
                  margin 0
              .title
                font-size 28px
                font-weight bold
                width 528px
                height 51px
                line-height 51px
                margin-bottom 24px
                border-bottom 1px solid #d9d9d9
              .imgContainer
                  width 144px
                  height 144px
                  // background #eee
                  img 
                      width 100%
                      height 100%
              .imgDesc
                  width 144px
                  height 36px
                  // line-height 36px
                  font-size 24px
                  color #333
                  text-align center
                  display: -webkit-box;
                  -webkit-line-clamp: 1;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  // white-space nowrap
        .cateContainertwo
          padding 30px 30px 21px 30px
          .cateTop
              width 528px
              height 192px
              margin-bottom 32px
              img 
                  width 100%
                  height 100%
          .lists
            // float left
            overflow hidden
            .title
                color #333
                font-size 28px
                font-weight bold
                width 528px
                height 51px
                line-height 51px
                margin-bottom 24px
                border-bottom 1px solid #d9d9d9
                padding-bottom 8px
              .cateItem
                  float left
                  width 144px
                  height 216px
                  margin-left 34px
                  &:nth-of-type(2)
                      margin 0
                  &:nth-of-type(5)
                      margin 0
                  &:nth-of-type(8)
                      margin 0
                  &:nth-of-type(11)
                      margin 0
                  &:nth-of-type(14)
                      margin 0
                  &:nth-of-type(17)
                      margin 0
                  &:nth-of-type(20)
                      margin 0
                  &:nth-of-type(23)
                      margin 0
                  &:nth-of-type(26)
                      margin 0
                  &:nth-of-type(29)
                      margin 0
                  &:nth-of-type(34)
                      margin 0
                  &:nth-of-type(37)
                      margin 0
                  &:nth-of-type(40)
                      margin 0
                  &:nth-of-type(43)
                      margin 0
                  &:nth-of-type(46)
                      margin 0
                  &:nth-of-type(49)
                      margin 0
                  &:nth-of-type(52)
                      margin 0
                  &:nth-of-type(55)
                      margin 0
                  &:nth-of-type(58)
                      margin 0
                  &:nth-of-type(61)
                      margin 0
                  &:nth-of-type(64)
                      margin 0
                  &:nth-of-type(67)
                      margin 0
                  &:nth-of-type(71)
                      margin 0
                  &:nth-of-type(74)
                      margin 0
                  &:nth-of-type(77)
                      margin 0
                  &:nth-of-type(80)
                      margin 0
                  &:nth-of-type(83)
                      margin 0
                  &:nth-of-type(86)
                      margin 0
                  .imgContainer
                      width 144px
                      height 144px
                      // background #eee
                      img 
                          width 100%
                          height 100%
                  .imgDesc
                      width 144px
                      height 36px
                      // line-height 36px
                      font-size 24px
                      color #333
                      text-align center
                      display: -webkit-box;
                      -webkit-line-clamp: 1;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      // white-space nowrap
</style>