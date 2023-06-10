const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username : {type : String , required : true,unique : true},
    email : {type : String , required : true},
    password : {type : String , required : true},
    role : {type : String ,required : true , enum : ["User","Admin"] , default : "User"}
})

const Users = mongoose.model("user",userSchema)

module.exports = Users