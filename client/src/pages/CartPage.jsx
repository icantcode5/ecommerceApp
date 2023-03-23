import React from "react"
import styles from "../styles/CartPage.module.css"
import CartItem from "../components/CartItem"
import { useSelector, useDispatch } from "react-redux"

const CartPage = () => {
	const { cartItems } = useSelector((state) => state.cart)

	const currentCartItems = cartItems.map((product) => {
		return (
			<CartItem
				key={product.id}
				name={product.name}
				price={product.price}
				description={product.description}
				id={product.id}
			/>
		)
	})

	return (
		<div className={styles.cartpage}>
			<div className={styles.cartleftside}>
				<h2>Shopping Cart</h2>

				{currentCartItems.length ? (
					currentCartItems
				) : (
					<h2>There are no items in your cart</h2>
				)}
			</div>

			<div className={styles.cartrightside}>
				<div className={styles.cartrightinfo}>
					<p>Subtototal {cartItems.length} items</p>
					<p>$4.00</p>
				</div>

				<div>
					<button>Proceed to Checkout</button>
				</div>
			</div>
		</div>
	)
}

export default CartPage
