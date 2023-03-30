const express = require("express")
const app = express()
require("dotenv").config({ path: "./config/.env" })
const cors = require("cors")
const client = require("./config/database")
const path = require("path")

//Routes
const userRoutes = require("./routes/users")
const productsRoutes = require("./routes/products")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

//Static Folder
if (process.env.NODE_ENV === "production") {
	app.use(express.static("./client/dist"))
}

// client.connect()

//TAKE A LOOK AT THE PATH OF THE HTML FILE ONCE WE ARE READY TO BUILD OUR APP AND DEPLOY IT
if (process.env.NODE_ENV === "production") {
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "./client/dist/index.html"))
	})
}

//Routes
app.use("/users", userRoutes)
app.use("/products", productsRoutes)

app.listen(process.env.PORT, () => {
	console.log("Server is running on Port: 5000")
})
