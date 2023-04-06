const express = require("express")
const app = express()
require("dotenv").config({ path: "./config/.env" })
const cors = require("cors")
// const { connectTODB } = require("./config/database")
// const client = require("./config/database")
const path = require("path")

//Routes
const userRoutes = require("./routes/users")
const productsRoutes = require("./routes/products")
const paymentRoutes = require("./routes/payment")

// Static Folder
if (process.env.NODE_ENV === "production") {
	app.use(express.static("./client/dist"))
}

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

//Routes
app.use("/", userRoutes)
app.use("/products", productsRoutes)
app.use("/payment", paymentRoutes)

app.listen(process.env.PORT, () => {
	console.log("Server is running on Port: 5000")
})
