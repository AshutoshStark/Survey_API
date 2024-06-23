const express = require("express");
const route = express.Router();
const SurveyResponse = require("../modules/SurveySchema")

//this is the parent path all the routes is "*host-url*/api/"

route.get("/getAllResponse", async(req,res)=>{

    try{
        const result = await SurveyResponse.find({})
        res.status(200).json({SurveyResponse:result})
    }
    catch(error){
        res.status(500).json({message:error.message});
    }

})
route.get("/getResponseOnTopic", async(req,res)=>{

    const topic = req.query.topic;

    try{
        const result = await SurveyResponse.findOne({
            topic:topic
        })
        res.status(200).json({SurveyResponse:result})
    }
    catch(error){
        res.status(500).json({success:false});
    }

})
route.get("/getResponseByUser", async(req,res)=>{

    const UserMail = req.query.UserMail;

    try{
        const result = await SurveyResponse.findOne({
            email:UserMail
        })
        res.status(200).json({SurveyResponse:result})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }

})

route.post("/uploadResponse", async(req,res)=>{
    try{
        const result = await SurveyResponse.create({
            name:req.body.name,
            email:req.body.email,
            topic:req.body.topic,
            answerOne:req.body.answerOne,
            answerTwo:req.body.answerTwo,
        })
        res.status(200).json({
            SurveyResponse:result,
            success:true,
        })
    }
    catch(error){
        res.status(500).json({
            message:error.message,
            success:false,
        })
    }
})

// route.delete("/deleteImage", async(req,res)=>{
//     try{
//         const image_id = req.query.image_id;
//         const result = await SurveyResponse.deleteOne({
//             _id:image_id,
//         })
//         res.status(200).json({
//             SurveyResponse:result,
//             success:true,
//         })
//     }
//     catch(error){
//         res.status(500).json({
//             message:error.message,
//             success:false,
//         })
//     }
// })

module.exports = route;