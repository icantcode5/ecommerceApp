import React from "react"
import { Link } from "react-router-dom"
import styles from "../styles/Product.module.css"

function Product(props) {
	return (
		<div className={styles.product}>
			<img src={`${props.img}`} alt="image" />

			<div className={styles.product__info}>
				<p className={styles.product__name}> {props.name}</p>
				<p className={styles.product__description}>{props.description}</p>
				<p className={styles.product__price}>${props.price}</p>

				<Link to={`/product/${props.id}`} className={styles.product__link}>
					View
				</Link>
			</div>
		</div>
	)
}

export default Product
