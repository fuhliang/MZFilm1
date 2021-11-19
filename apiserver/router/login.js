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
        // res.send(formatData(data))
        res.send({
            code:200,
            data:data[0],
            message:'success'
        })
    }else{
        // res.send(formatData({code:400}))
        res.send({
            code:400,
            data:[],
            message:'fail' 
        })
    }
})