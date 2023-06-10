const mongoose = require("mongoose")

const AddressSchema = new mongoose.Schema({    
    cart : {type : Array ,required : true},
    name : {type : String , required : true} ,
    mobileNumber : {type : String ,required : true},
    pinCode : {type : Number ,required : true},
    houseNo : {type : String ,required : true},
    area : {type : String ,required : true} ,
    landmark : {type : String ,required : true},
    state : {type : String ,required : true},
    userId : {type : String ,required : true} ,
    date : { type : String ,require : true},
    totalPrice : {type : String , required : true}
})

const Address = mongoose.model("AddressDetail",AddressSchema)

module.exports = Address