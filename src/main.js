import 'lib-flexible/flexible'
import Vue from "vue";
import App from "./App";
import store from './store/index.js'
import router from './router/index'


import { Swipe, SwipeItem, CountDown, Icon, Popup, Overlay, Form, Cell, CellGroup, Field, RadioGroup, Radio } from 'vant';
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Field);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Form);
Vue.use(Popup);
Vue.use(Overlay);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(CountDown);
Vue.use(Icon);

// export const EventBus = new Vue();

new Vue({
  beforeCreate () { // 尽量早的执行挂载全局事件总线对象的操作
    Vue.prototype.$globalEventBus = this
  },
//   el: "#root",
  render: (h) => h(App),
  // 应用router，所有组件实例对象就能直接使用router
  // 通过 this.$router / this.$route 访问
  router,
  store
}).$mount('#root')
