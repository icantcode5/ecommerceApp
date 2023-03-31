import axios from "axios"

//GET Products
const getAllProducts = async () => {
	if (import.meta.env.DEV) {
		const response = await axios.get("http://localhost:5000/products")
		return response.data
	} else {
		const response = await axios.get(
			"https://ecommerceapp-w6n9.onrender.com/products"
		)
		return response.data
	}
}

const productsServices = {
	getAllProducts,
}

export default productsServices
