const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")



const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://ananthan123:ananthan123@cluster0.4r0z6.mongodb.net/userdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input = req.body
    let user = new usermodel(input)
    user.save()
    console.log(course)
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    usermodel.find().then(
        (data)=>{
            res.json(data)

        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})


app.listen(8085,()=>{
    console.log("server Started")
})