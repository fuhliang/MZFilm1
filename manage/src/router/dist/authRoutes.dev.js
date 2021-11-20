"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Manage = _interopRequireDefault(require("@/views/Manage.vue"));

var _Home = _interopRequireDefault(require("@/views/manage/Home.vue"));

var _Default = _interopRequireDefault(require("@/views/manage/user/Default.vue"));

var _List = _interopRequireDefault(require("@/views/manage/user/List.vue"));

var _Add = _interopRequireDefault(require("@/views/manage/user/Add.vue"));

var _Edit = _interopRequireDefault(require("@/views/manage/user/Edit.vue"));

var _Default2 = _interopRequireDefault(require("@/views/manage/address/Default.vue"));

var _List2 = _interopRequireDefault(require("@/views/manage/address/List.vue"));

var _Add2 = _interopRequireDefault(require("@/views/manage/address/Add.vue"));

var _Edit2 = _interopRequireDefault(require("@/views/manage/address/Edit.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  path: '/manage',
  name: 'Manage',
  component: _Manage["default"],
  // 子路由（嵌套路由）
  children: [// 当浏览器地址匹配 /manage/home 时， 在Manage中的<router-view/>中渲染Home组件
  {
    path: 'home',
    component: _Home["default"]
  }, {
    path: 'user',
    component: _Default["default"],
    children: [{
      path: 'list',
      component: _List["default"]
    }, {
      path: 'add',
      component: _Add["default"]
    }, {
      path: 'edit/:id',
      name: 'UserEdit',
      component: _Edit["default"]
    }]
  }, // 商品
  {
    path: 'address',
    component: _Default2["default"],
    children: [{
      path: 'list',
      component: _List2["default"]
    }, {
      path: 'add',
      component: _Add2["default"]
    }, {
      path: 'edit/:id',
      component: _Edit2["default"]
    }]
  }]
}; // router.addRoute('Manage',{
//     path:'user',
//     component:User
// })

exports["default"] = _default;