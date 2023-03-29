import React from "react"
import { Link } from "react-router-dom"
import styles from "../styles/CartItem.module.css"
import { useDispatch, useSelector } from "react-redux"
import { deleteProductFromCart } from "../features/cart/cartSlice"

function CartItem(props) {
	const dispatch = useDispatch()

	function handleDeleteCartItem(id) {
		dispatch(deleteProductFromCart(id))
	}

	return (
		<div className={styles.cartitem}>
			<div className={styles.cartitem__image}>
				<Link to={`/product/${props.id}`}>
					<img src={`${props.img}`} alt="ps5 picture" />
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

			<button
				className={styles.cartitem__deleteBtn}
				onClick={() => handleDeleteCartItem(props.id)}>
				<i className="fas fa-trash"></i>
			</button>
		</div>
	)
}

export default CartItem
