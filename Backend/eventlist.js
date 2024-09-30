const express=require('express')
const router=express.Router()
const myCon=require("./connection")

router.get("/getparticipants/:tname",(req,resp)=>{
    let tablename=req.params.tname
    myCon.query("select * from "+tablename,(err,result)=>{
        if(err)
            console.log(err)
        else
            resp.send(result)
    })
})

router.post("/deleteevent",(req,resp)=>{
    let usn=req.body.usn
    let tablename=req.body.eventname
    switch(tablename)
    {
        case "scavenger":
            myCon.query("delete from "+tablename+"  where scusn='"+usn+"'",(err,result)=>{
                if(err)
                    console.log(err)
                else
                    resp.send(result)
            })
            break;
        case "stranger":
            myCon.query("delete from "+tablename+"  where strusn='"+usn+"'",(err,result)=>{
                if(err)
                    console.log(err)
                else
                    resp.send(result)
            })
            break;
        case "comedy":
            myCon.query("delete from "+tablename+"  where comusn='"+usn+"'",(err,result)=>{
                if(err)
                    console.log(err)
                else
                    resp.send(result)
            })
            break;
    }
})
router.post("/updateevent",(req,resp)=>{
    let usn=req.body.usn
    let tablename=req.body.eventname
    let newname=req.body.newname
        myCon.query("update "+tablename+" set scname='"+newname+"' where scusn='"+usn+"'",(err,result)=>{
            if(err)
                console.log(err)
            else
                resp.send(result)
    })
})

module.exports=router