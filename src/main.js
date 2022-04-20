// 入口文件
import Vue from 'vue' //引入Vue
import ElementUI from 'element-ui'; //引入element-ui
import 'element-ui/lib/theme-chalk/index.css'; //引入element-ui的css样式
// import FormCore from '@formily/core' //必须要引入
// import FormVue from '@formily/vue' //vue
import App from './App.vue' //引入最大的组件App
import router from './router' //引入路由
import store from './store' //引入vuex
import echarts from "echarts" //引入echarts
import "./permission"
import "@/common/common.css" //引入公共样式
import "./mock/mock.js"; //引入mock.js
import moment from 'moment' //日期库
Vue.use(ElementUI);
// Vue.use(FormCore)
// Vue.use(FormVue)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$moment = moment; //挂原型赋值使用
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')