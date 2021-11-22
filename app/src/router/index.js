import Vue from 'vue'
// 1. 安装vue-router
// 2. 引入vue-router
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Reg from '../views/Reg.vue'
import Cinema from '../views/Cinema.vue'
import Information from '../views/Information.vue'
import Mine from '../views/Mine.vue'
import NowPlaying from '../views/NowPlaying.vue'
import Buy from '../views/Buy.vue'


// 3. 安装路由插件
Vue.use(VueRouter)
// 4. 实例化路由，并配置参数
const router = new VueRouter({
  routes:[
    {
        path:'/',
        redirect:'/home',
    },
    {
      path:'/home',
      component:Home,
    },
    {
      path:'/reg',
      component:Reg
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/cinema',
      component:Cinema
    },
    
    {
      path:'/mine',
      component:Mine,
    },
    {
      path:'/information',
      component:Information
    },
    {
      path:'/nowPalying/:id',
      component:NowPlaying,
      name:"NowPlaying"
    },
    {
      path:'/buy/:id',
      component:Buy,
      name:"Buy"
    },
    
  ]
})

export default router;