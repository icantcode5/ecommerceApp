const pg = require("pg")

//GET all products
const getAllProducts = async (request, response) => {
	const client = new pg.Client(process.env.DB_URL)
	const allProductsQuery = "SELECT * FROM products"

	try {
		await client.connect()
		const products = await client.query(allProductsQuery)
		response.json(products.rows)
	} catch (error) {
		console.log("Error is " + error)
	}
	client.end()
}

//Get a single product
const getProductById = async (request, response) => {
	const client = new pg.Client(process.env.DB_URL)
	//In postgreSQL the $1 represents a variable to be passed in at the time of the query to the DB. For multiple variables, we just increment as $2, $3, $4...etc
	const id = parseInt(request.params.id)
	const allProductsQuery = "SELECT * FROM products WHERE id = $1"

	try {
		await client.connect()
		const products = await client.query(allProductsQuery, [id])
		response.json(products.rows)
		// client.end()
	} catch (error) {
		console.log(error)
	}
	client.end()
}

module.exports = {
	getAllProducts,
	getProductById,
}
