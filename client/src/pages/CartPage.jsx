import React from "react"
import styles from "../styles/CartPage.module.css"
import CartItem from "../components/CartItem"
import { useSelector, useDispatch } from "react-redux"
import getStripe from "../utilities/getStrip"
import axios from "axios"

const CartPage = () => {
	const { cartItems } = useSelector((state) => state.cart)
	//prettier-ignore
	const numberOfItemsInCart = cartItems.reduce((curr, product) => curr + product.QTY ,0)
	//prettier-ignore
	const totalPrice = cartItems.reduce((curr, product) => curr + (product.price * product.QTY), 0)

	const currentCartItems = cartItems.map((product) => {
		return (
			<CartItem
				product={product}
				key={product.id}
				name={product.name}
				price={product.price}
				description={product.description}
				id={product.id}
				img={product.imageurl}
				QTY={product.QTY}
			/>
		)
	})

	async function handleCheckout() {
		let URL = null
		//prettier-ignore
		import.meta.env.DEV ? URL = "http://localhost:5000/payment/create" : URL =  "https://ecommerceapp-w6n9.onrender.com/payment/create"
		try {
			const stripe = await getStripe()
			//prettier-ignore
			const response = await axios.post(URL, cartItems)
			stripe.redirectToCheckout({ sessionId: response.data.id })
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className={styles.cartpage}>
			<div className={styles.cartleftside}>
				<h2>Cart</h2>

				{currentCartItems.length ? (
					currentCartItems
				) : (
					<h2>There are no items in your cart</h2>
				)}
			</div>

			<div className={styles.cartrightside}>
				<div className={styles.cartrightinfo}>
					<p>Subtototal ({numberOfItemsInCart}) items</p>
					<p>${totalPrice}</p>
				</div>

				<div>
					<button onClick={handleCheckout}>Pay with Stripe</button>
				</div>
			</div>
		</div>
	)
}

export default CartPage
