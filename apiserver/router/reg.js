const express = require('express')
const router = express.Router();
module.exports = router;

const db = require('../db')
const {formatData} = require('../utils')


router.post('/',async (req,res)=>{
    console.log('req.body==',(req.body))
    const {key,value} = req.body;
    console.log(key,value);
    // console.log((req.body.data));

    // const userinfo = JSON.stringify(req.body)
    console.log('username===',JSON.parse(req.body).data.username);
    console.log('userinfo===',userinfo);
    const sql = `insert into users(username,password) values('${username}','${password}')`

    const data = await db(sql)

    console.log(sql);
    if(data.insertId){
        res.send(formatData())
    }else{
        res.send(formatData({code:400}))
    }
})