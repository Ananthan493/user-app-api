const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const app = express()



app.listen(8085,()=>{
    console.log("server Started")
})