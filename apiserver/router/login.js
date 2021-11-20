const express = require('express')
const router = express.Router();
module.exports = router;

const db = require('../db')
const {formatData} = require('../utils')
const token=require('../utils/token')

router.get('/',async (req,res)=>{

    const {username,password} = req.query;
    
    const sql = `select id,username from users where username='${username}' and password='${password}'`

    let result
    try{
        // 第一次登录：需要用户名和密码确认用户身份
        let data = await db(sql)
        // console.log(JSON.parse(JSON.stringify(data[0])));

        data=JSON.parse(JSON.stringify(data[0]))
        // 如果查询到数据，则确认用户身份
        console.log("data",data);
        if(data){
            
            // console.log(data.username);
            // 确认用户身份后，创建token
            
            let authorization=token.create({username})
            // console.log("authorization",authorization);


            data.authorization=authorization
            
            result=formatData({data})
        }
        else{
            result=formatData({code:401,msg:'用户名或密码错误'})
        }
    
    }catch(err){
        //用户名和密码错误
        result=formatData({code:400,msg:err})
    }
    res.send(result)

    

    
    
})