const express = require('express')
const router = express.Router();
module.exports = router;

const hotRouter = require('./hot')
const nowRouter = require('./now')
const addressRouter= require('./address')
const loginRouter = require('./login')
const regRouter = require('./reg')
const userRouter =require('./user')

// 处理请求体参数
router.use(
    express.json(),
    express.urlencoded({extended:true}),
)




// CORS跨域解决方案
router.use(function(req,res,next){
    // 允许所有域名访问：不管请求来源自哪里，都允许访问我的的接口
    res.header('Access-Control-Allow-Origin','*');
    
    // res.set({
    //     // 设置单一域名：只允许该域名跨域访问我的接口
    //     'Access-Control-Allow-Origin':'http://localhost:8080'
    // })


    // 允许多个域名跨域
    // 设置一个白名单
    // const allowOrigin = [
    //     'http://localhost:8080',
    //     'http://localhost:8081',
    //     'http://127.0.0.1:8080',
    //     'http://localhost:10086',
    // ]

    // // 获取请求域名来源，并判断是否存在该白名单中
    // const currentOrigin  =  req.get('Origin')
    // const allow = allowOrigin.includes(currentOrigin)
    // if(allow){
    //     res.set({
    //         // 设置单一域名：只允许该域名跨域访问我的接口
    //         'Access-Control-Allow-Origin':currentOrigin
    //     })
    // }

    // 处理复杂跨域中的预检请求
    if(req.method=="OPTIONS") {
        // res.header("Access-Control-Allow-Methods","PUT,POST,GET,PATCH,DELETE,OPTIONS");
        // 设置响应头
        res.set({
            "Access-Control-Allow-Headers": "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,aa",
            "Access-Control-Allow-Methods":"PUT,POST,GET,PATCH,DELETE,OPTIONS"
        });
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        next();
    }

    
})



// /api/hot
router.use('/hot',hotRouter)
router.use('/now',nowRouter)
router.use('/address',addressRouter)
router.use('/login',loginRouter)
router.use('/reg',regRouter)
router.use('/user',userRouter)



