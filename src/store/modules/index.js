import { getIndexCateData, getIndexData } from '../../api/index'
const state = {
    indexCateData: [], //首页导航数据
    indexData: [],  // 首页数据
}
const mutations = {
    changeIndexCateData(state, indexCateData){
        state.indexCateData = indexCateData
    },
    changeIndexData(state, indexData){
        state.indexData = indexData
    }
}
const actions = {
    async getIndexCateData({commit}){
        let indexCateDataResult = await getIndexCateData()
        // console.log(indexDataResult.data);
			commit("changeIndexCateData",indexCateDataResult.data)
    },
    async getIndexData({commit}){
        let indexDataResult = await getIndexData()
        // console.log(indexDataResult.data);
			commit("changeIndexData",indexDataResult.data)
	}
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}