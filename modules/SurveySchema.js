const mongoose = require("mongoose")

const SurveyResponse = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    topic:{
        type:String,
        required:true,
    },
    answerOne:{
        type:String,
        required:true,
    },
    answerTwo:{
        type:String,
        required:true,
    }

},
{timeStamp:true},
)

module.exports = mongoose.model("SurveyResponse",SurveyResponse);