const express = require("express")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 5000
const cors = require("cors")
const morgan = require('morgan');
const connectDB = require("./config/db")

const transactions = require('./routes/transactions');

// connect to the database
connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/expenseBuddy/users", require("./routes/userRoutes"))
app.use('/api/v1/transactions', transactions);

app.listen(PORT, () => "server started...")