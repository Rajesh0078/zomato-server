const bodyParser = require("body-parser")
const express = require("express")
const router = require("./routes/restaurantRoute")
const cors = require("cors")
const DbConnection = require("./config/dbConfig")
const app = express()
const dotenv = require("dotenv").config()
const PORT = process.env.Port || 5000


DbConnection()

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req,res)=>{
    res.setHeader("Access-Control-Allow-Credentials","true");
})
app.use("/", router)


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})
