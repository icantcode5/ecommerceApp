import axios from "axios"

//Add to Cart Service //Is basically get a product
const addProductToCart = async (id, QTY) => {
	const response = await axios.get(`http://localhost:5000/products/${id}`)

	const productsWithQTY = response.data.map((product) => {
		return { ...product, QTY }
	})

	return productsWithQTY
	// return response.data
}

const cartServices = {
	addProductToCart,
}

export default cartServices
