import Vue from 'vue'
import Vuex from 'vuex'

import index from './modules/index.js'
import cateList from './modules/cateList.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        index,
        cateList
    }
})

export default store