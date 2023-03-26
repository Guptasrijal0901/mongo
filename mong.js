const express = require("express");
// const mongoose = require("mongoose");
const app = express();

// const fun = ()=>{
//     try {
//         mongoose.connect("mongodb://localhost:27017").then(()=>{
//             console.log("learning to connect database");
//         });
//     } catch (error) {
//         console.log("error occured")
//     }
// };
const {fun} = require("./m2")
fun();
app.listen(4000, ()=>{
    console.log("server is ready")
});