import axios from './axios.js'

// 获取首页 导航列表数据
export const  getIndexCateData = () => axios('/indexCateData')
// 获取首页数据
export const  getIndexData = () => axios('/indexData')