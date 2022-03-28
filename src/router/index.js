import Vue from 'vue'
import VueRouter from 'vue-router' //引入路由
Vue.use(VueRouter)
const routesMap = [
    // 主页
    {
      path: '/',
      name: 'Layout',
      component: () =>
        import ('@/views/Layout.vue')
    },
    // 登录页
    {
      path: '/login',
      name: 'Login',
      component: () =>
        import ('@/views/Login')
    },
    // 404
    {
      path: '*',
      name: '404',
      component: () =>
        import ('../views/404.vue')
    }
  ]
  // 创建路由实例
const router = new VueRouter({
  routes: routesMap
})

export default router