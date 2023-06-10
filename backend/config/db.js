// const mongoose = require("mongoose")

// const connect = async()=>{
//     return await mongoose.connect("mongodb+srv://project:kch@cluster0.jjbg6t8.mongodb.net/")
// }

// module.exports = connect

// // mongodb+srv://ace:ace123@cluster0.b04n5vc.mongodb.net/test

const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://project:kch@cluster0.jjbg6t8.mongodb.net", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
};

module.exports = connect;



