//接口
const express = require('express')
const router = require('./router')
const app = express();

// 静态资源服务器
app.use(express.static('./public'))

// 数据接口
app.use('/api',router)


app.listen(2108,()=>{
    console.log('server is running at port 2108')
})