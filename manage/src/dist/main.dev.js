"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _request = _interopRequireDefault(require("./utils/request"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 完整引用
// 安装插件：注册60+全局组件，给Vue原型添加常用方法
_vue["default"].use(_elementUi["default"]); // 按需引入
// import Button from 'element-ui/lib/button'
// import 'element-ui/lib/theme-chalk/button.css'
// Vue.use(Button)
// 使用 babel-plugin-component 工具实现按需引入
// import {Message,Button,Table,Form,FormItem,Input,Checkbox,Container,Main,Aside,Header,Row,Col} from 'element-ui'
// Vue.use(Button)
// Vue.use(Table)
// Vue.use(Form)
// Vue.use(FormItem)
// Vue.use(Input)
// Vue.use(Checkbox)
// Vue.use(Container)
// Vue.use(Main)
// Vue.use(Aside)
// Vue.use(Header)
// Vue.use(Row)
// Vue.use(Col)
// Vue.prototype.$message = Message;


_vue["default"].prototype.$request = _request["default"];
_vue["default"].config.productionTip = false; // 全局路由守卫

_router["default"].beforeEach(function (to, from, next) {
  console.log('beforeEach'); // 访问后台页面都需要用户登录才能访问

  if (to.path.startsWith('/manage')) {
    // 判断是否登录
    if (_store["default"].getters.isLogin) {
      // 假设所有的用户都是好人,先放行，后校验
      // 如果用户已登录，则校验用户身份
      _router["default"].app.$request.get('/user/verify', {
        params: {
          username: _store["default"].state.userInfo.username
        }
      }).then(function (_ref) {
        var data = _ref.data;

        if (data.code === 401) {
          _store["default"].dispatch('logout');

          _router["default"].push({
            path: '/login',
            query: {
              // 用户访问的目标页面
              targetUrl: to.fullPath
            }
          });
        }
      });

      next();
    } else {
      _router["default"].push({
        path: '/login',
        query: {
          // 用户访问的目标页面
          targetUrl: to.fullPath
        }
      });
    }
  } else {
    next();
  }
}); // router.beforeResolve(function(to,from,next){
//     console.log('beforeResolve');
//     next();
// })
// router.afterEach(function(to,from){
//     console.log('afterEach');
// })


new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');