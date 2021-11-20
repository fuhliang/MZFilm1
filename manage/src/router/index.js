import Vue from 'vue'
// 1. 安装vue-router
// 2. 引入vue-router
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

// 3. 安装路由插件
Vue.use(VueRouter)
// 4. 实例化路由，并配置参数
const router = new VueRouter({
  routes:[
    {
      path:'/',
      // 路由重定向
      redirect:'/login',
      // redirect:{name:'Home'}
    },
    
    // 第一层路由：显示再App.vue中的<router-view />中
    {
      path:'/login',
      component:Login,
    },
  ],
  //保持滚动条
//   scrollBehavior(to,from,savePosition){
//     //savePosition:当前页面滚动的位置,格式{x,y}
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(!savePosition){
//                 savePosition={}
//             }
//             savePosition.behavior="smooth",
//             resolve(savePosition)   
//         },500)
//     })
//   }
})

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }

console.log('router',router);



export default router;