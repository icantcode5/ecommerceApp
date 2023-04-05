import { useState, useEffect } from "react"
import { addProductToCart, reset } from "../features/cart/cartSlice"
import styles from "../styles/ProductPage.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"

const ProductPage = () => {
	const [QTY, setQTY] = useState(1)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { products } = useSelector((state) => state.products)

	//Grab Id from URL to display current product's info. URL id is a string.
	let { id } = useParams()
	id = parseInt(id)

	//set product variable to product object
	const product = products.filter((product) => {
		return product.id === id
	})[0]

	function handleAddProductToCart() {
		dispatch(addProductToCart([id, QTY]))
		navigate("/cart")
	}

	function handleSelectChange(event) {
		const { value } = event.target
		setQTY(parseInt(value))
	}

	return (
		<div className={styles.productpage}>
			<div className={styles.productpageleft}>
				<div className={styles.leftimage}>
					<img src={`${product.imageurl}`} alt="product name" />
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
						<select value={QTY} onChange={handleSelectChange}>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
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
