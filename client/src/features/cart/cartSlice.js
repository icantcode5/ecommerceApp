import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { json } from "react-router-dom"
import cartServices from "./cartServices"

const initialState = {
	cartItems: JSON.parse(localStorage.getItem("cart"))
		? JSON.parse(localStorage.getItem("cart"))
		: [],
	isLoading: false,
	isError: false,
	isSuccess: false,
	message: "",
}

//GET single product to add to cart
export const addProductToCart = createAsyncThunk(
	"cart/addProductToCart",
	async (id, thunkAPI) => {
		try {
			// const [id, QTY] = rest
			const currentCart = thunkAPI.getState().cartItems

			return await cartServices.addProductToCart(id, currentCart)
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

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false
			state.isError = false
			state.isSuccess = false
			state.message = ""
		},
		//action.payload holds only a single argument, so if we want to pass mutliple arguments, we have to pass them in an array or object.
		deleteProductFromCart: (state, action) => {
			const currentCart = state.cartItems
			const newCart = currentCart.filter((product) => {
				return product.id !== action.payload
			})
			localStorage.setItem("cart", JSON.stringify(newCart))
			state.cartItems = newCart
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(addProductToCart.pending, (state) => {
				state.isLoading = true
			})
			.addCase(addProductToCart.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				//cartItems state holds an array of objects where each object is the product along with other info as properties
				//Here we are storing the current products as objects with the new"product" object added so we can display all the products added to the current cart. NEED TO CODE LOGIC TO HANDLE REPEAT ITEMS ADDED
				// state.cartItems = JSON.parse(localStorage.getItem("cart"))
				// 	? JSON.parse(localStorage.getItem("cart"))
				// 	: []
				localStorage.setItem(
					"cart",
					JSON.stringify([...state.cartItems, ...action.payload])
				)
				state.cartItems = JSON.parse(localStorage.getItem("cart"))
			})
			.addCase(addProductToCart.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
	},
})

export const { reset, deleteProductFromCart } = cartSlice.actions
export default cartSlice.reducer
