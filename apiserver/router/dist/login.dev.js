"use strict";

var express = require('express');

var router = express.Router();
module.exports = router;

var db = require('../db');

var _require = require('../utils'),
    formatData = _require.formatData;

router.get('/', function _callee(req, res) {
  var _req$query, username, password, sql, data;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$query = req.query, username = _req$query.username, password = _req$query.password;
          sql = "select username from users where username='".concat(username, "' and password='").concat(password, "'");
          _context.next = 4;
          return regeneratorRuntime.awrap(db(sql));

        case 4:
          data = _context.sent;

          //  console.log(data);
          if (data.length > 0) {
            // res.send(formatData(data))
            res.send({
              code: 200,
              data: data[0],
              message: 'success'
            });
          } else {
            // res.send(formatData({code:400}))
            res.send({
              code: 400,
              data: [],
              message: 'fail'
            });
          }

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});