const express = require("express");
const { connectDatabase } = require("./connect");
const app = express();
const user_model = require("./models/user");
app.use(express.json());

app.post("/api/savedata", async (req, res) => {
    try {
        console.log(req.body);
        const newObject = {
            name: req.body.username,
            rollNo: req.body.userRollno,
            isFresher: req.body.fresher
        }
        console.log(newObject);
        const userData = new user_model(newObject);
        await userData.save();
        return res.json({ success: true, message: "data send succesfully" })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, error: error.message });
    }
})
connectDatabase();
const Port = 5000;
app.listen(Port, () => {
    console.log(`server is ready at port ${Port}`);
});