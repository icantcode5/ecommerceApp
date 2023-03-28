import axios from "axios"

//GET Products
const getAllProducts = async () => {
	const response = await axios.get("http://localhost:5000/products")
	return response.data
}

const getProduct = async () => {
	const response = await axios.get(`http://localhost:5000/products/${id}`)
	return response.data
}
const productsServices = {
	getAllProducts,
	getProduct,
}

export default productsServices
