const fun = ()=>{
    try {
        mongoose.connect("mongodb://localhost:27017").then(()=>{
            console.log("learning to connect database");
        });
    } catch (error) {
        console.log("error occured")
    }
};


module.exports = {fun};