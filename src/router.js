import Vue from 'vue'
import Router from 'vue-router'
import siginComponent from './page/sigin'
import homeComponent from './page/home'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/sigin'},
    { path: '/sigin', component: siginComponent },
    { path: '/home', component: homeComponent }
  ]
})
