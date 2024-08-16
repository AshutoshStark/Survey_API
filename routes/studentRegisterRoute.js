const express = require("express")
const route = express.Router()
const StudentRegistration = require("../modules/StudentRegistration")

route.get("/studentData",async(req,res)=>{
    try{
        const result = await StudentRegistration.find({})
        res.status(200).json({StudentRegistration:result})
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
})

module.exports = route;