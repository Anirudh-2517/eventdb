const express=require('express')
const myCon=require('./connection')

const router=express.Router()

router.post("/comregister",(req,resp)=>{
    let comusn=req.body.comusn
    let comname=req.body.comname
    let comemail=req.body.comemail
    let comsem=req.body.comsem
    let combranch=req.body.combranch
    myCon.query("insert into comedy(comusn,comname,comemail,comsem,combranch) values(?,?,?,?,?)"
        ,[comusn,comname,comemail,comsem,combranch],(err,response)=>{
        if(err)
            console.log(err)
        else
            resp.send(response)
    })
})
module.exports=router