"use strict";

var express = require('express');

var router = express.Router();
module.exports = router;

var db = require('../db');

var _require = require('../utils'),
    formatData = _require.formatData;

var token = require('../utils/token');

router.get('/', function _callee(req, res) {
  var _req$query, username, password, sql, result, data, authorization;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$query = req.query, username = _req$query.username, password = _req$query.password;
          sql = "select id,username from users where username='".concat(username, "' and password='").concat(password, "'");
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(db(sql));

        case 5:
          data = _context.sent;
          // console.log(JSON.parse(JSON.stringify(data[0])));
          data = JSON.parse(JSON.stringify(data[0])); // 如果查询到数据，则确认用户身份

          console.log("data", data);

          if (data) {
            // console.log(data.username);
            // 确认用户身份后，创建token
            authorization = token.create({
              username: username
            }); // console.log("authorization",authorization);

            data.authorization = authorization;
            result = formatData({
              data: data
            });
          } else {
            result = formatData({
              code: 401,
              msg: '用户名或密码错误'
            });
          }

          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](2);
          //用户名和密码错误
          result = formatData({
            code: 400,
            msg: _context.t0
          });

        case 14:
          res.send(result);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 11]]);
});