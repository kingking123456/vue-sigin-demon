import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* css初始化样式 */
import './style/common.css'
/* 导入element-ui */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
/* 导入axios */
import axios from "axios";
Vue.prototype.$http = axios;
/* 全局默认请求路径 */
axios.defaults.baseURL = 'http://www.litc.pro:9999/v1';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
