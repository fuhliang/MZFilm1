const express = require('express')
const router = express.Router();
module.exports = router;

const db = require('../db')
const {formatData} = require('../utils')
const token=require('../utils/token')

//校验用户token: /api/user/verify
router.get('/verify',async (req,res)=>{
    const Authorization = req.get('Authorization')

    const result = token.verify(Authorization)
    
    res.send(formatData({
        code: result ? 200 : 400
    }))
     
})