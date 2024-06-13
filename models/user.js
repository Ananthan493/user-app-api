const mongoose = require("mongoose")
const Schema = mongoose.Schema(
    {
            "name":{type:String,required:true},
            "dob":{type:String,required:true},
            "blood":{type:String,required:true},
            "mobile":{type:String,required:true},
            "address":{type:String,required:true},
            "pincode":{type:String,required:true},
            "district":{type:String,required:true},
            "place":{type:String,required:true},
            "email":{type:String,required:true},
            "username":{type:String,required:true},
            "password":{type:String,required:true},
            "confirmpass":{type:String,required:true}

    }
)

let usermodel=mongoose.model("users",Schema)
module.exports=(usermodel)