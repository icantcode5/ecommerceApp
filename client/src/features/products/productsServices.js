import axios from "axios"

//GET Products
const getAllProducts = async () => {
	const response = await axios.get("http://localhost:5000/products")
	return response.data
}

const productsServices = {
	getAllProducts,
}

export default productsServices
