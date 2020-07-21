import axios from './axios.js'

// 获取首页 导航列表数据
export const  getIndexCateData = () => axios('/indexCateData')
// 获取首页数据
export const  getIndexData = () => axios('/indexData')
// 获取分类页面数据
export const  getCateNavData = () => axios('/cateNavData')
// 获取分类页面右侧列表数据
export const  getCateLists = () => axios('/cateLists')
