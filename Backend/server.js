const express=require('express')
const cors=require('cors')
const bp=require('body-parser')
const send = require('send')
const port=9876
const myCon=require("./connection")
const scavenger=require('./scavenger')
const stranger=require('./stranger')
const comedy=require('./comedy')
const eventlist=require('./eventlist')

const App=new express()

App.use(cors({origin:"*"}))
App.use(bp.json())
App.use(express.urlencoded({extended:false}))

App.use("/api/Scavenger",scavenger)
App.use("/api/Stranger",stranger)
App.use("/api/Comedy",comedy)
App.use("/api/Event",eventlist)

App.listen(port,err=>{
    if(err)
        console.log(err)
    else
    console.log("Server running at port ..."+port)
})