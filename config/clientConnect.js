require("dotenv").config({ path: __dirname + "/.env" })

const pg = require("pg")
const client = new pg.Client(process.env.DB_URL)
client.connect()
module.exports = client
