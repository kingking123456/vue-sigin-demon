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
/* 添加请求拦截器 */
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  let token = localStorage.getItem('token') || ''
  config.headers.Authorization = token
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
