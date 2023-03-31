import axios from "axios"

//Add to Cart Service //Is basically get a product
const addProductToCart = async (id, QTY) => {
	const response = await axios.get(
		`https://ecommerceapp-w6n9.onrender.com/products/${id}`
	)

	const productsWithQTY = response.data.map((product) => {
		return { ...product, QTY }
	})

	return productsWithQTY
}

const cartServices = {
	addProductToCart,
}

export default cartServices
