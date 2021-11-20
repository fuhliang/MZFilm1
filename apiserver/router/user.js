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


// post 添加用户
router.post('/',async function(req,res){
    const {username,password} = req.body;

    const sql = `insert into users(username,password) values('${username}','${password}')`

    console.log('cartpout',sql);

    const data = await db(sql)

    res.send({
        code:200,
        data,
        msg:'success'
    })

})


// 批量删除用户
router.delete('/list',async (req,res)=>{

    let {removelist}=req.query

    // 没有removelist就删除全部
    let sql=`delete from users`

    // 有就批量删除
    if(removelist){
        let newlist = removelist.replace(/\[/,'')
        newlist = newlist.replace(/[\]]/,'')
        sql+=` where id in (${newlist})`
    }

    const data = await db(sql)
    res.send({
        code:200,
        data,
        msg:'success'
    })
})


// 删除单个用户
router.delete('/:id',async function(req,res){
    const {id} = req.params;
    const sql=`delete from users where id=${id}`

    const data = await db(sql)

    res.send({
        code:200,
        data,
        msg:'success'
    })

    // res.send(
    //     data?
    //     formatData.success()
    //     :
    //     formatData.fail()
    // )
})


// put 修改用户信息(密码)
router.put('/',async function(req,res){

    // console.log('put.body',req.body.password,req.body.id);

    const {password,id} = req.body;

    let sql=`update users set password='${password}' where id=${id}`

    const data = await db(sql)
    res.send({
        code:200,
        data,
        msg:'success'
    })
})

// get /api/user/list
router.get('/list',async (req,res)=>{
    const {page=1,size=2,animeclass} = req.query;

    // 计算索引值
    const idx = (page-1)*size
    const qty = Number(size)

    let sql = `select * from users`

    let datalength = await db(sql)

    if(animeclass){
        sql +=` where id like '%${animeclass}%' or username like '%${animeclass}%'`
    }

    sql += ` limit ${idx},${qty}`

    const data = await db(sql)
    res.send({
        code:200,
        data:data,
        total:datalength.length,
        msg:'success'
    })

})

router.get('/:id',async (req,res)=>{
    const {id} = req.params;
    const sql = `select * from users where id=${id}`

    const data = await db(sql)
    console.log('user=',data);

    res.send({
        code:200,
        data:data[0],
        msg:'success'
    })

    // res.send(data[0])
    // res.send(formatData.success(data[0]))

    // res.send(formatData()); // {code:200,data:[],msg:'success'}
    // res.send(formatData({data:data[0]})); // {code:200,data:{username,id},msg:'success'}
})

