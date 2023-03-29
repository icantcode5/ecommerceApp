const client = require("../config/database")

//GET all products
const getAllProducts = async (request, response) => {
	const allProductsQuery = "SELECT * FROM products"

	try {
		const products = await client.query(allProductsQuery)
		response.json(products.rows)
	} catch (error) {
		console.log("Error is " + error)
	}
}

//Get a single product
const getProductById = async (request, response) => {
	//In postgreSQL the $1 represents a variable to be passed in at the time of the query to the DB. For multiple variables, we just increment as $2, $3, $4...etc
	const id = parseInt(request.params.id)
	const allProductsQuery = "SELECT * FROM products WHERE id = $1"

	try {
		const products = await client.query(allProductsQuery, [id])
		response.json(products.rows)
	} catch (error) {
		console.log(error)
	}
}

module.exports = {
	getAllProducts,
	getProductById,
}
