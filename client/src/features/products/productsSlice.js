import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import productsServices from "./productsServices"

const initialState = {
	products: [],
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

//GET single product
export const getProduct = createAsyncThunk(
	"products/getProduct",
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
				//Here we are storing the current products as objects with the new"product" object added so we can display all the products added to the current cart. NEED TO CODE LOGIC TO HANDLE REPEAT ITEMS ADDED
				state.products = [...action.payload]
				console.log(action.payload)
			})
			.addCase(getAllProducts.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(getProduct.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getProduct.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				//cartItems state holds an array of objects where each object is the product along with other info as properties
				//Here we are storing the current products as objects with the new"product" object added so we can display all the products added to the current cart. NEED TO CODE LOGIC TO HANDLE REPEAT ITEMS ADDED
				state.products = [...action.payload]
				console.log(action.payload)
			})
			.addCase(getProduct.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
	},
})

export const { reset } = productsSlice.actions
export default productsSlice.reducer
