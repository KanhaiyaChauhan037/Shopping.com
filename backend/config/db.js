const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://project:kch@cluster0.jjbg6t8.mongodb.net");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
};

module.exports = connect;