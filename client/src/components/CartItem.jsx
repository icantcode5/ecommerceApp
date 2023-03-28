import React from "react"
import { Link } from "react-router-dom"
import styles from "../styles/CartItem.module.css"
import { useDispatch, useSelector } from "react-redux"
// import { addProductToCart } from "../features/cart/cartSlice"

function CartItem(props) {
	const dispatch = useDispatch()

	return (
		<div className={styles.cartitem}>
			<div className={styles.cartitem__image}>
				<Link to={`/product/${props.id}`}>
					<img
						src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
						alt="ps5 picture"
					/>
				</Link>
			</div>

			<Link to={`/product/${props.id}`} className={styles.cartitem__name}>
				<p>{props.name}</p>
			</Link>

			<p className={styles.cartitem__price}>{props.price}</p>

			<select className={styles.cartitem__select}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>

			<button className={styles.cartitem__deleteBtn}>
				<i className="fas fa-trash"></i>
			</button>
		</div>
	)
}

export default CartItem
