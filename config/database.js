const { Client } = require("pg")

// //This dotenv file seems to only be read from the root of the app
require("dotenv").config({ path: __dirname + "/.env" })

//__dirname specifies the current directory we are in AKA the folder
//so in this folder the path is as follows C:\Users\Carlos\Documents\EcommerceApp\config
//we simply tack on the file in the directory we are in, so, /.evn
//console.log(__dirname)

//normal port is 5423
const client = new Client({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	port: 5432,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DB,
})

module.exports = client
