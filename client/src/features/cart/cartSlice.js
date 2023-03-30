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
		updateQTYInCart: (state, action) => {
			const [id, QTY] = action.payload
			const updateQTY = state.cartItems.map((product) => {
				if (product.id === id) {
					return { ...product, QTY: QTY }
				} else {
					return product
				}
			})
			localStorage.setItem("cart", JSON.stringify(updateQTY))
			state.cartItems = updateQTY
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

				//To see the current state of the cartItems, we have to use the current function from the redux toolkit, but we can't make any changes to it from the current function, but we can make changes to the current state "state.cartItems" without being able to see what's going on with console.log(state.cartItems). In this case, this is where redux dev tools come in handy and allow us to see what state changes occured. We pretty much have to keep breaking the code or getting wrong results until we get it right and the redux devtools reflects that.

				//If there is a length then check if there is also the same item in the cart already, if so then just update it's quantity by the value of the QTY payload passed in, else add the item to the cart as a new item.
				if (
					state.cartItems.length &&
					state.cartItems.some((product) => product.id === action.payload[0].id)
				) {
					const updatedCartItems = state.cartItems.map((product) => {
						if (product.id === action.payload[0].id) {
							return { ...product, QTY: (product.QTY += action.payload[0].QTY) }
						} else {
							return product
						}
					})

					localStorage.setItem("cart", JSON.stringify([...updatedCartItems]))
				} else {
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

export const { reset, deleteProductFromCart, updateQTYInCart } =
	cartSlice.actions
export default cartSlice.reducer
