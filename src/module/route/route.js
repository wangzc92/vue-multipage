import Vue from 'vue'
// 引入 vue-router
import VueRouter from 'vue-router'

import App from './App'
import route1 from './comp/route1'
import route2 from './comp/route2'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: route1
}, {
    path: '/route2',               // 如何使用
    component: route2,
}]

const router = new VueRouter({
    // mode: 'history',
    // base: __dirname,
    routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
