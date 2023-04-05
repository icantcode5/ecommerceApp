import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import productsServices from "./productsServices"

const initialState = {
	products: JSON.parse(localStorage.getItem("products")) || [],
	isLoading: false,
	isSuccess: false,
	isError: false,
	message: "",
}

//GET products
export const getAllProducts = createAsyncThunk(
	"products/getAllProducts",
	async (_, thunkAPI) => {
		try {
			return await productsServices.getAllProducts()
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false
			state.isError = false
			state.isSuccess = false
			state.message = ""
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllProducts.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getAllProducts.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				//cartItems state holds an array of objects where each object is the product along with other info as properties
				//Here we are storing the current products as objects with the new "product" object added so we can display all the products added to the current cart.
				if (!localStorage.getItem("products")) {
					localStorage.setItem("products", JSON.stringify(action.payload))
					state.products = JSON.parse(localStorage.getItem("products"))
				} else {
					state.products = JSON.parse(localStorage.getItem("products"))
				}
			})
			.addCase(getAllProducts.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
	},
})

export const { reset, getProductsState } = productsSlice.actions
export default productsSlice.reducer
