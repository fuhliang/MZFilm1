const express = require('express')
const router = express.Router();
module.exports = router;

const db = require('../db')
const {formatData} = require('../utils')


router.get('/',async (req,res)=>{

    const {username,password} = req.query;
    
    const sql = `select username from users where username='${username}' and password='${password}'`

    const data = await db(sql)
    //  console.log(data);
    if(data.length>0){
        res.send(formatData())
    }else{
        res.send(formatData({code:400}))
    }
})