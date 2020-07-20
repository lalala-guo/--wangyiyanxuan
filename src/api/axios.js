import axios from 'axios'

// 配置通用的路径和超时时间
const instance = axios.create({
    baseURL: '/api',  // 基础路径
    timeout: 5000,   // 超时时间
})
 export default instance
