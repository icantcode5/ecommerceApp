import { addProductToCart, reset } from "../features/cart/cartSlice"
import styles from "../styles/ProductPage.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"

const ProductPage = () => {
	const dispatch = useDispatch()
	//Grab Id from URL to display current product's info. URL id is a string.
	let { id } = useParams()
	id = parseInt(id)
	const navigate = useNavigate()

	const { cartItems } = useSelector((state) => state.cart)
	console.log(cartItems)
	const { products } = useSelector((state) => state.products)

	const product = products.filter((product) => {
		return product.id === id
	})[0]

	function handleAddProductToCart() {
		dispatch(addProductToCart([id, 1]))
		dispatch(reset())
		//Add QTY property to Cart item added to Cart
		//grab value from "select" element and insert it into QTY property.
		// navigate("/cart")
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
