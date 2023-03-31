import React from "react"
import styles from "../styles/CartPage.module.css"
import CartItem from "../components/CartItem"
import { useSelector, useDispatch } from "react-redux"

//Things to do:
//1. PROCEED TO SETUP STRIP API TO ALLOW FOR ONLINE PAYMENTS!
//2. Change inStock amount in DB once the user has checked out.

const CartPage = () => {
	const { cartItems } = useSelector((state) => state.cart)
	console.log(cartItems)
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
					<button>Proceed to Checkout</button>
				</div>
			</div>
		</div>
	)
}

export default CartPage
