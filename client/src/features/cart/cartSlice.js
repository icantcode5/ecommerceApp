import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit"
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
	async ([...rest], thunkAPI) => {
		try {
			const [id, QTY] = rest

			return await cartServices.addProductToCart(id, QTY)
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

				//Can't call state.cartItems before it is set to anything as we can access the previous state with the "current" function, but not make any changes based on the previous state. First we need to set the state to some "data" and then we can manipulate the current state based on the incoming data from the action.payload in order to set our state to our desired "final" state.

				state.cartItems = JSON.parse(localStorage.getItem("cart"))

				//If there is a length then check if there is also the same item in the cart already, if so then just update it's quantity by the value of the QTY payload passed in, else add the item to the cart as a new item.
				if (
					state.cartItems.length &&
					state.cartItems.some((product) => product.id === action.payload[0].id)
				) {
					const updatedCartItems = state.cartItems.map((product) => {
						if (product.id === action.payload[0].id) {
							return { ...product, QTY: (product.QTY += 1) }
						} else {
							return product
						}
					})

					localStorage.setItem("cart", JSON.stringify([...updatedCartItems]))
				} else {
					console.log("hello from else")
					localStorage.setItem(
						"cart",
						JSON.stringify([...state.cartItems, ...action.payload])
					)
				}

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
