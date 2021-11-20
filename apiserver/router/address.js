const express = require('express')
const router = express.Router();
module.exports = router;

const db = require('../db')
const {formatData} = require('../utils')

//全部查询
// get /api/address/list
router.get('/list',async (req,res)=>{
    

    const {page , size, districtName} = req.query
    //查询数据库商品的数据，把结果响应到前端

    //因为查询的数据太多，进行分页
    const idx = (page - 1) * size //idx索引值    page页码,     size每页多少条数据
    
    const qty = Number(size) //确保是数字，不会因为字符串出问题

    let sql = `select * from address`

    if(districtName){
        sql+=` where districtName="${districtName}"`
    }
    if(page && size){
    sql += ` limit ${idx},${qty}`
    //查询第idx的索引，查询size条数据响应到前端
    }
    

    const data = await db(sql)
    // res.send(formatData({data}))
    res.send(formatData.success(data))
})

// 添加商品
// post /api/address
router.post('/', async(req,res)=>{

    const {form}=req.body
    console.log("form",form);
    const {name,address,districtName,lowPrice} = form;
    console.log('req.body',req.body)
    const sql = `insert into address(name,address,districtName,lowPrice) values('${name}','${address}','${districtName}','${lowPrice}')`

    const data = await db(sql)
    console.log("data",data);
    if(data.insertId){
        
        res.send(formatData())
    }else{
        
        res.send(formatData({code:400}))
    }

    
})

//删除单个商品
// delete /api/address/3
router.delete('/:id', async(req,res)=>{

    const {id} = req.params;
    console.log('req.params',req.params)
    const sql=`delete from address where id=${id}`

    const data = await db(sql)
    console.log("data",data);
    if(data.affectedRows){
        
        res.send(formatData())
    }else{
        
        res.send(formatData({code:400}))
    }
})

// 更新商品
// put /api/address/3
router.put('/:id', async(req,res)=>{
    const {id}=req.params
    console.log(id);

    const {form}=req.body
    console.log("form",form);

    const {name,address,districtName,lowPrice} = form;
    console.log('req.body',req.body)
    let sql = `update address set name='${name}',address='${address}',districtName='${districtName}',lowPrice='${lowPrice}'  where id=${id}`


    console.log("sql",sql);
    const data = await db(sql)
    console.log("data",data);
    if(data.changedRows){
        
        res.send(formatData())
    }else{
        
        res.send(formatData({code:400}))
    }

})

//通过id查询
// get /api/address/3
router.get('/:id',async(req,res)=>{
    // console.log(req.params);
    const {id}=req.params
    // console.log(id);

    const sql=`select *from address where id='${id}'`
    let data=await db(sql)
    console.log(JSON.parse(JSON.stringify(data[0])));
    data=JSON.parse(JSON.stringify(data[0]))
    res.send(formatData.success(data))

})