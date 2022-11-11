const mongoose = require("mongoose")

const connectDB = async () => {
    try{
        const conn = mongoose.connect(process.env.MONGO_URI)
        console.log("---------- mongoDB connected ----------")
    }
    catch(error) {
        console.log(`Error : ${error}`);
        process.exit(1)
    }
}

module.exports = connectDB