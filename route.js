const express = require("express");
const routes = express.Router();

const surveyResponse = require("./routes/responseUploadRoute")

routes.use("/response",surveyResponse)


module.exports = routes;