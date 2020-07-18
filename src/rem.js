// function adapter(){
//     // 获取屏幕宽度
//     const w = document.documentElement.clientWidth
//     // 动态计算根字体大小
    // const rootFS = (w * 100) / 375

//     // 设置根字体大小
//     document.documentElement.style.fontSize = rootFS + 'px'
// }
// adapter()
// window.onresize = adapter

function adapter (){
    //获取当前手机设备独立像素值(因为开启了理想视口，所以布局视口=设备独立像素值)
    const w = document.documentElement.clientWidth
    //动态计算根字体大小
    const rootFontSize = w / 10
    //设置根字体大小
    document.documentElement.style.fontSize = rootFontSize +'px'
    
}
adapter()
window.onresize = adapter
