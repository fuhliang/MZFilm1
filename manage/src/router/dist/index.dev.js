"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Login = _interopRequireDefault(require("../views/Login.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 1. 安装vue-router
// 2. 引入vue-router
// 3. 安装路由插件
_vue["default"].use(_vueRouter["default"]); // 4. 实例化路由，并配置参数


var router = new _vueRouter["default"]({
  routes: [{
    path: '/',
    // 路由重定向
    redirect: '/login' // redirect:{name:'Home'}

  }, // 第一层路由：显示再App.vue中的<router-view />中
  {
    path: '/login',
    component: _Login["default"]
  }] //保持滚动条
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

}); // const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }

console.log('router', router);
var _default = router;
exports["default"] = _default;