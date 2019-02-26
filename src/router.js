import Vue from 'vue'
import Router from 'vue-router'
import siginComponent from './page/sigin'
import homeComponent from './page/home'
import childrenDetailComponent from '@/page/home/children/alldetail'
import sigupComponent  from './page/sigup'

Vue.use(Router)

let router = new Router({
  routes: [
    { path: '/', redirect: '/sigin' },
    { path: '/sigin', component: siginComponent },
    { path: '/sigup', component: sigupComponent },
    {
      path: '/home',
      component: homeComponent,
      redirect: '/home/alldetail',
      children: [
        { path: 'alldetail', component: childrenDetailComponent }
      ]
    }
  ]
})
router.beforeEach(function (to, from, next) {
  let token = localStorage.getItem('token') || ''

  //console.log(to, from)
  /* 登录已经拦截状态 */
  if (token && to.path === '/sigin') {
    return next('/home')
  }
  /* 登录未拦截状态
      判断token是否存在
      如果存在就正常导航
      不存在就跳转到登录页面 */
  if(token || to.path==='/sigin'||to.path==="/sigup"){
    next()
  }else{
    next('/')
  }

})
export default router
