const express=require('express')
const myCon=require('./connection')

const router=express.Router()

router.post("/scavengerregister",(req,resp)=>{
    let scusn=req.body.scusn
    let scname=req.body.scname
    let scemail=req.body.scemail
    let scsem=req.body.scsem
    let scbranch=req.body.scbranch
    myCon.query("insert into scavenger(scusn,scname,scemail,scsem,scbranch) values(?,?,?,?,?)"
        ,[scusn,scname,scemail,scsem,scbranch],(err,response)=>{
        if(err)
            console.log(err)
        else
            resp.send(response)
    })
})
module.exports=router