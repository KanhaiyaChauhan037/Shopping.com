const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(process.env.db);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
};

module.exports = connect;