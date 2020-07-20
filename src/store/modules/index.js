import { getIndexCateData } from '../../api/index'
const state = {
    indexData: [], //导航数据
}
const mutations = {
    changeIndexData(state, indexData){
        state.indexData = indexData
    }
}
const actions = {
    async getIndexData({commit}){
        // console.log(getIndexCateData());
        let indexDataResult = await getIndexCateData()
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