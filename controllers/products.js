const client = require("../config/database")

const getAllProducts = async (request, response) => {
	const allProductsQuery = "SELECT * FROM products"

	try {
		const products = await client.query(allProductsQuery)
		response.json(products.rows)
	} catch (error) {
		console.log("Error is " + error)
	}
}
const getProductById = async (request, response) => {
	const id = request.params.id
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
