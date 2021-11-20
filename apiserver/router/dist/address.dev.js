"use strict";

var express = require('express');

var router = express.Router();
module.exports = router;

var db = require('../db');

var _require = require('../utils'),
    formatData = _require.formatData; //全部查询
// get /api/address/list


router.get('/list', function _callee(req, res) {
  var _req$query, page, size, districtName, idx, qty, sql, data;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$query = req.query, page = _req$query.page, size = _req$query.size, districtName = _req$query.districtName; //查询数据库商品的数据，把结果响应到前端
          //因为查询的数据太多，进行分页

          idx = (page - 1) * size; //idx索引值    page页码,     size每页多少条数据

          qty = Number(size); //确保是数字，不会因为字符串出问题

          sql = "select * from address";

          if (districtName) {
            sql += " where districtName=\"".concat(districtName, "\"");
          }

          if (page && size) {
            sql += " limit ".concat(idx, ",").concat(qty); //查询第idx的索引，查询size条数据响应到前端
          }

          _context.next = 8;
          return regeneratorRuntime.awrap(db(sql));

        case 8:
          data = _context.sent;
          // res.send(formatData({data}))
          res.send(formatData.success(data));

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}); // 添加商品
// post /api/address

router.post('/', function _callee2(req, res) {
  var form, name, address, districtName, lowPrice, sql, data;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          form = req.body.form;
          console.log("form", form);
          name = form.name, address = form.address, districtName = form.districtName, lowPrice = form.lowPrice;
          console.log('req.body', req.body);
          sql = "insert into address(name,address,districtName,lowPrice) values('".concat(name, "','").concat(address, "','").concat(districtName, "','").concat(lowPrice, "')");
          _context2.next = 7;
          return regeneratorRuntime.awrap(db(sql));

        case 7:
          data = _context2.sent;
          console.log("data", data);

          if (data.insertId) {
            res.send(formatData());
          } else {
            res.send(formatData({
              code: 400
            }));
          }

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
}); //删除单个商品
// delete /api/address/3

router["delete"]('/:id', function _callee3(req, res) {
  var id, sql, data;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          console.log('req.params', req.params);
          sql = "delete from address where id=".concat(id);
          _context3.next = 5;
          return regeneratorRuntime.awrap(db(sql));

        case 5:
          data = _context3.sent;
          console.log("data", data);

          if (data.affectedRows) {
            res.send(formatData());
          } else {
            res.send(formatData({
              code: 400
            }));
          }

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  });
}); // 更新商品
// put /api/address/3

router.put('/:id', function _callee4(req, res) {
  var id, form, name, address, districtName, lowPrice, sql, data;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          console.log(id);
          form = req.body.form;
          console.log("form", form);
          name = form.name, address = form.address, districtName = form.districtName, lowPrice = form.lowPrice;
          console.log('req.body', req.body);
          sql = "update address set name='".concat(name, "',address='").concat(address, "',districtName='").concat(districtName, "',lowPrice='").concat(lowPrice, "'  where id=").concat(id);
          console.log("sql", sql);
          _context4.next = 10;
          return regeneratorRuntime.awrap(db(sql));

        case 10:
          data = _context4.sent;
          console.log("data", data);

          if (data.changedRows) {
            res.send(formatData());
          } else {
            res.send(formatData({
              code: 400
            }));
          }

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  });
}); //通过id查询
// get /api/address/3

router.get('/:id', function _callee5(req, res) {
  var id, sql, data;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          // console.log(req.params);
          id = req.params.id; // console.log(id);

          sql = "select *from address where id='".concat(id, "'");
          _context5.next = 4;
          return regeneratorRuntime.awrap(db(sql));

        case 4:
          data = _context5.sent;
          console.log(JSON.parse(JSON.stringify(data[0])));
          data = JSON.parse(JSON.stringify(data[0]));
          res.send(formatData.success(data));

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  });
});