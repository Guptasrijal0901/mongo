const mongoose = require("mongoose");
const connectDatabase = () => {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017").then(() => {
            console.log("learning to connect database");
        });
    } catch (error) {
        console.log("error occured")
    }
};


module.exports = { connectDatabase };

