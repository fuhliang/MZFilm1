const express = require('express')
const router = express.Router();
module.exports = router;

const db = require('../db')
const {formatData} = require('../utils')

//全部查询
// get /api/address/list
router.get('/list',async (req,res)=>{
    let sql = `select * from address`

    // console.log(req.query);
    const {districtName}=req.query
    // console.log(category);
    if(districtName){
        sql+=` where districtName="${districtName}"`
    }


    const data = await db(sql)
    // res.send(formatData({data}))
    res.send(formatData.success(data))
})

// post /api/address
router.post('/',(req,res)=>{

    res.send()
})

// delete /api/address/3
router.delete('/:id',(req,res)=>{

    res.send()
})

// put /api/address/3
router.put('/:id',(req,res)=>{

    res.send()
})

//通过id查询
// get /api/address/3
router.get('/:id',async(req,res)=>{
    // console.log(req.params);
    const {id}=req.params
    // console.log(id);

    const sql=`select *from address where id='${id}'`
    const data=await db(sql)

    res.send(formatData.success(data))

})