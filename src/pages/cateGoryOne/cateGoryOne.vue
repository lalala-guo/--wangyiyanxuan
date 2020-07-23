<template>
    <div class="cateContainer">
        <div class="cateTop">
            <img :src="cateGoryList.bannerUrl" alt="">
        </div>
        <div class="cateBottom">
            <div class="cateListContainer">
                <div class="cateItem">
                    <div class="imgContainer">
                        <img src="../../../public/images/bao.png" alt="">
                    </div>
                    <div class="imgDesc">员工精选</div>
                </div>
                <div class="cateItem">
                    <div class="imgContainer">
                        <img src="../../../public/images/bao.png" alt="">
                    </div>
                    <div class="imgDesc">员工精选</div>
                </div>
                <div class="cateItem">
                    <div class="imgContainer">
                        <img src="../../../public/images/bao.png" alt="">
                    </div>
                    <div class="imgDesc">员工精选</div>
                </div>
                <div class="cateItem">
                    <div class="imgContainer">
                        <img src="../../../public/images/bao.png" alt="">
                    </div>
                    <div class="imgDesc">员工精选</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getCateLists} from '../../api/index.js'
export default {
    props: ['cateGoryList'],
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
        .imgContainer
            width 144px
            height 144px
            background green
            img 
                width 100%
                height 100%
        .imgDesc
            width 144px
            height 72px
            font-size 24px
            color #333
            text-align center
</style>