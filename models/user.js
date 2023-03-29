const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    rollNo: Number,
    isFresher: Boolean,

})
const userModel = mongoose.model("userrggh", userSchema);
module.exports = userModel;