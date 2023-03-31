import axios from "axios"

//GET Products
const getAllProducts = async () => {
	const response = await axios.get(
		"https://ecommerceapp-w6n9.onrender.com/products"
	)
	return response.data
}

const productsServices = {
	getAllProducts,
}

export default productsServices
