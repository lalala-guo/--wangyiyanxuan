import 'lib-flexible/flexible'
import Vue from "vue";
import App from "./App";
import store from './store/index.js'
import router from './router/index'


import { Swipe, SwipeItem, CountDown, Icon, Popup, Overlay, Form } from 'vant';
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)
Vue.use(Form);
Vue.use(Popup);
Vue.use(Overlay);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(CountDown);
Vue.use(Icon);

new Vue({
//   el: "#root",
  render: (h) => h(App),
  // 应用router，所有组件实例对象就能直接使用router
  // 通过 this.$router / this.$route 访问
  router,
  store
}).$mount('#root')
