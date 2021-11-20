const express = require('express')
const router = express.Router();
module.exports = router;

const db = require('../db')
const {formatData} = require('../utils')

//全部查询
// get /api/address/list
router.get('/list',async (req,res)=>{
    

    const {page = 1, size = 10, districtName} = req.query //如果不传参数就会出问题，因此得加默认值page=1,size=10,  但order有可能有，有可能没有
    //查询数据库商品的数据，把结果响应到前端

    //因为查询的数据太多，进行分页
    const idx = (page - 1) * size //idx索引值    page页码,     size每页多少条数据
    
    const qty = Number(size) //确保是数字，不会因为字符串出问题

    let sql = `select * from address`

    if(districtName){
        sql+=` where districtName="${districtName}"`
    }

    sql += ` limit ${idx},${qty}`
    //查询第idx的索引，查询size条数据响应到前端

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