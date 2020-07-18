import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../components/index/index.vue'
import Category from '../components/category/category.vue'
import Buy from '../components/buy/buy.vue'
import Cart from '../components/cart/cart.vue'
import Personal from '../components/personal/personal.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    // 指定模式 hash / history
//   mode: "history",
    routes: [
        {
            path: '/index',
            component: Index
        },
        {
            path: '/category',
            component: Category
        },
        {
            path: '/buy',
            component: Buy
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '/personal',
            component: Personal
        },
    ]


})

export default router