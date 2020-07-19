import config from './config.js'
import axios from 'axios'

export default function request(url){
	// axios.get(config.host + url)
	// 	.then(function (response) {
	// 		console.log(response);
	// 	})
	// 	.catch(function (error) {
	// 		console.log(error);
	// 	});
}







// export default (url,data={},method='GET') => {
// 	return new Promise((resolve, reject) => {
// 		// 执行异步任务
// 		uni.request({
// 			// url,    // 代理服务器
// 			url: config.host + url,  // config.host + url   走代理的话就不能拼接  代理是以api开头 拼接就不是api开头了
// 			data,
// 			method,
// 			success:(res) => {
// 				resolve(res.data)
// 			},
// 			fail: (err) => {
// 				reject(err)
// 			}
// 		})
// 	})
// }