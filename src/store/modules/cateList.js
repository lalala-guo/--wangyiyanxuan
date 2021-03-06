import { getCateNavData, getCateLists } from '../../api/index'
const state = {
    cateNavData: [], // 分类列表
    cateLists: [], // 分类右侧数据
}
const mutations = {
    changeCateData(state, indexCateData){
        state.cateNavData = indexCateData
    },
    changeCateLists(state, cateLists){
        state.cateLists = cateLists
    }
}
const actions = {
    // 左侧分类列表
    async getCateData({commit}){
        let indexCateDataResult = await getCateNavData()
		commit("changeCateData",indexCateDataResult.data.categoryL1List)
    },
    // 右侧分类列表
    async getCateList({commit}){
        let indexCateListsResult = await getCateLists()
		commit("changeCateLists",indexCateListsResult.data)
    }
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}