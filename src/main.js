import 'lib-flexible/flexible'
import Vue from "vue";
import App from "./App";
import store from './store/index.js'
import router from './router/index'

// swiper
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);

// tab
// import { Tab, Tabs } from 'vant';
// Vue.use(Tab);
// Vue.use(Tabs);



new Vue({
//   el: "#root",
  render: (h) => h(App),
  // 应用router，所有组件实例对象就能直接使用router
  // 通过 this.$router / this.$route 访问
  router,
  store
}).$mount('#root')
