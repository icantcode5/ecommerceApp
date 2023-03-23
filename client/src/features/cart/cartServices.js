import axios from "axios"

//Add to Cart Service //Is basically get a product
const addProductToCart = async (id, QTY, currentCart) => {
	const response = await axios.get(`http://localhost:5000/products/${id}`)
	// localStorage.setItem("cart", currentCart)
	return response.data
}

const cartServices = {
	addProductToCart,
}

export default cartServices
