const { Client } = require("pg")

//This dotenv file seems to only be read from the root of the app
require("dotenv").config({ path: __dirname + "/.env" })

//__dirname specifies the current directory we are in AKA the folder
//so in this folder the path is as follows C:\Users\Carlos\Documents\EcommerceApp\config
//we simply tack on the file in the directory we are in, so, /.evn
//console.log(__dirname)

//normal port is 5423 but I switched it 5001 when setting up PostgreSQL
const client = new Client({
	host: "localhost",
	user: "postgres",
	port: 5001,
	password: process.env.DB_PASSWORD,
	database: "postgres",
})

module.exports = client
