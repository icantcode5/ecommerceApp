import React from "react"
import { addProductToCart } from "../features/cart/cartSlice"
import styles from "../styles/ProductPage.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const ProductPage = (props) => {
	const dispatch = useDispatch()
	//Grab Id from URL to correctly add product to Cart
	const { id } = useParams()
	console.log(id)

	const { products } = useSelector((state) => state.products)
	console.log(products)

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
					<p className={styles.leftname}>{props.name}</p>
					<p>Price: $4.00</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
						impedit soluta ex placeat! Et, in.
					</p>
				</div>
			</div>

			<div className={styles.productpageright}>
				<div className={styles.rightinfo}>
					<p>
						Price: <span>$499</span>
					</p>
					<p>
						Status <span>In Stock</span>
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
