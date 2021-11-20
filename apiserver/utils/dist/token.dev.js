"use strict";

/**
 * Token操作
    * 创建token方法：create
    * 验证token方法：verify
 */
var jwt = require('jsonwebtoken'); //密钥：用于加密的key


var key = "miaomovice";
/**
 * 创建token
 * @param {Object}          data            需要写入token的加密的数据
 * @param {Number|String}   expiresIn       有效期
 * @returns {String}                        返回token（一段加密后拥有有效期的字符）
 */

exports.create = function (data) {
  var expiresIn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '2h';
  // username: 用于加密的用户名
  // expires: token有效期(单位: s)，默认2小时(2h)
  // console.log(data);
  // console.log(777);
  //生成 Token：根据传入用户名和key进行加密，并设置有效期
  var token = jwt.sign(data, key, {
    expiresIn: expiresIn
  }); // console.log(888);

  return token;
};
/**
 * 校验token
 * @param {String} token 
 * @returns {Boolean}      token校验是否成功
 */


exports.verify = function (token) {
  var res = false;

  try {
    //  jwt.verify() 
    // 校验成功，得到加密前的数据（解密）
    // 校验失败，抛出错误
    res = jwt.verify(token, key);
    res = true;
  } catch (err) {
    res = false;
  }

  return res;
};