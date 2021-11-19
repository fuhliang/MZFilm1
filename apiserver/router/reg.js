const express = require('express')
const router = express.Router();
module.exports = router;

const db = require('../db')
const {formatData} = require('../utils')


router.post('/',async (req,res)=>{
    console.log('req.body==',(req.body))

    // { '{"data":{"username":"deew","password":"123456"}}': '' }

    // const {data} = req.body;
    // console.log(data);
    // console.log((req.body.data));
    const b = JSON.stringify(req.body)
    const daa = JSON.parse(b)
    const daaaaa = (Object.keys(daa)[0]);
    const obj = JSON.parse(daaaaa)
    console.log('obj======>',obj);
    const username = obj.data.username
    const password = obj.data.password

    console.log('username,password=====>',username,password);

    // console.log('daaaaa=====>',daaaaa);
    // console.log('daa====>',daa);
    // console.log('b====>',b);

    // const userinfo = JSON.stringify(req.body)

    const sql = `insert into users(username,password) values('${username}','${password}')`

    const data = await db(sql)

    console.log(sql);
    if(data.insertId){
        res.send(formatData())
    }else{
        res.send(formatData({code:400}))
    }
})