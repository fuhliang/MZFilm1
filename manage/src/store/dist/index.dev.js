"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _request = _interopRequireDefault(require("../utils/request"));

var _router = _interopRequireDefault(require("../router"));

var _authRoutes = _interopRequireDefault(require("../router/authRoutes"));

var _utils = require("@/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userInfo = localStorage.getItem('userInfo'); // null

try {
  userInfo = JSON.parse(userInfo) || {};
} catch (err) {
  userInfo = {};
}

_vue["default"].use(_vuex["default"]);

var store = new _vuex["default"].Store({
  state: {
    userInfo: userInfo,
    addedRoute: false // 是否已经动态添加路由

  },
  getters: {
    isLogin: function isLogin(state) {
      console.log(state.userInfo);
      return !!state.userInfo.id;
    }
  },
  mutations: {
    login: function login(state, payload) {
      state.userInfo = payload;
      (0, _utils.updateStorage)('userInfo', payload);
    },
    logout: function logout(state) {
      state.userInfo = {};
      (0, _utils.updateStorage)('userInfo');
    },
    addRoute: function addRoute(state) {
      if (!state.addedRoute) {
        _router["default"].addRoute(_authRoutes["default"]);

        state.addedRoute = true;
      }
    },
    removeRoute: function removeRoute(state) {
      console.log('removeRoute');

      _router["default"].addRoute({
        path: '/manage',
        name: 'Manage',
        children: []
      });
    }
  },
  actions: {
    login: function login(ctx, payload) {
      var _ref, data;

      return regeneratorRuntime.async(function login$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("payload", payload);
              _context.next = 3;
              return regeneratorRuntime.awrap(_request["default"].get("/login", {
                params: payload
              }));

            case 3:
              _ref = _context.sent;
              data = _ref.data;

              if (data.code === 200) {
                // 更新userInfo
                ctx.commit("login", data.data); // 动态添加路由

                ctx.commit('addRoute');
              } //   把请求回来的数据返回组件（组件需要页面业务逻辑操作）


              return _context.abrupt("return", data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    logout: function logout(ctx) {
      ctx.commit('logout');
      ctx.commit('removeRoute');
    }
  }
}); // 刷新重新动态添加路由
// 判断用户是否处在登录状态

if (store.getters.isLogin) {
  store.commit('addRoute');
}

var _default = store;
exports["default"] = _default;