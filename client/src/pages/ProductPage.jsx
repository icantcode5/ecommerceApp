import React, { useEffect } from "react"
import { addProductToCart } from "../features/cart/cartSlice"
import styles from "../styles/ProductPage.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const ProductPage = () => {
	const dispatch = useDispatch()
	//Grab Id from URL to display current product's info. URL id is a string.
	const { id } = useParams()

	const { products } = useSelector((state) => state.products)

	const product = products.filter((product) => {
		return product.id === parseInt(id)
	})[0]

	function handleAddProductToCart() {
		dispatch(addProductToCart())
	}

	return (
		<div className={styles.productpage}>
			<div className={styles.productpageleft}>
				<div className={styles.leftimage}>
					<img
						src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
						alt="product name"
					/>
				</div>

				<div className={styles.leftinfo}>
					<p className={styles.leftname}>{product.name}</p>
					<p>${product.price}</p>
					<p>{product.description}</p>
				</div>
			</div>

			<div className={styles.productpageright}>
				<div className={styles.rightinfo}>
					<p>
						Price: <span>${product.price}</span>
					</p>
					<p>
						Status <span>{product.instockamount ? "In Stocksss" : "None"}</span>
					</p>
					<p className={styles.quantity}>
						QTY
						<select>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					</p>
					<p>
						<button onClick={handleAddProductToCart}>Add to cart</button>
					</p>
				</div>
			</div>
		</div>
	)
}

export default ProductPage
