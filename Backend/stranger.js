const express=require('express')
const myCon=require('./connection')

const router=express.Router()

router.post("/strregister",(req,resp)=>{
    let strusn=req.body.strusn
    let strname=req.body.strname
    let stremail=req.body.stremail
    let strsem=req.body.strsem
    let strbranch=req.body.strbranch
    myCon.query("insert into stranger(strusn,strname,stremail,strsem,strbranch) values(?,?,?,?,?)"
        ,[strusn,strname,stremail,strsem,strbranch],(err,response)=>{
        if(err)
            console.log(err)
        else
            resp.send(response)
    })
})

module.exports=router