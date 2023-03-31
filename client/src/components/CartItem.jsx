import React, { useState } from "react"
import { Link } from "react-router-dom"
import styles from "../styles/CartItem.module.css"
import { useDispatch, useSelector } from "react-redux"
import {
	deleteProductFromCart,
	updateQTYInCart,
} from "../features/cart/cartSlice"

function CartItem(props) {
	const dispatch = useDispatch()
	//prettier-ignore
	const options = Array.from({ length: 10 }).map((element,i) => <option key={i} value={i+1}>{i+1}</option>)

	function handleDeleteCartItem(id) {
		dispatch(deleteProductFromCart(id))
	}

	function handleQTYChange(event) {
		let { value } = event.target
		value = parseInt(value)
		dispatch(updateQTYInCart([props.id, value]))
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

			<select
				value={props.QTY}
				onChange={handleQTYChange}
				className={styles.cartitem__select}
			>
				{options}
			</select>

			<button
				className={styles.cartitem__deleteBtn}
				onClick={() => handleDeleteCartItem(props.id)}
			>
				<i className="fas fa-trash"></i>
			</button>
		</div>
	)
}

export default CartItem
