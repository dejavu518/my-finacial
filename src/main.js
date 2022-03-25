import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from "echarts"
import "./permission"
import "@/common/common.css"
import "./mock/mock.js";
import moment from 'moment'//导入文件 
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$moment = moment;//赋值使用
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
