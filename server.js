const express = require("express")
const app = express()
const client = require("./config/database")
const userRoutes = require("./routes/users")

require("dotenv").config({ path: "./config/.env" })

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Static Folder
if (process.env.NODE_ENV === "production") {
	app.use(express.static("./client/build"))
}

//May need to connect to the client from the controller directory files as that's where we are going make requests to the postgres database from
client.connect()

//GET users from user routes + controller
app.use("/users", userRoutes)

//TAKE A LOOK AT THE PATH OF THE HTML FILE ONCE WE ARE READY TO BUILD OUR APP AND DEPLOY IT
if (process.env.NODE_ENV === "production") {
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "./client/build/index.html"))
	})
}

app.listen(5000, () => {
	console.log("Server is running on Port: 5000")
})
