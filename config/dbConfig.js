const mongoose = require("mongoose")

const DbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://peketirajesh007:123@cluster0.ebqz3rl.mongodb.net/zomato")
        console.log("db connected successfully")
    } catch (error) {
        console.log(error)
    }
}

module.exports = DbConnection