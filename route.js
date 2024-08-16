const express = require("express");
const routes = express.Router();

const surveyResponse = require("./routes/responseUploadRoute");
const StudentRegistration = require("./routes/studentRegisterRoute");

routes.use("/response",surveyResponse)
routes.use("/registrations",StudentRegistration)


module.exports = routes;