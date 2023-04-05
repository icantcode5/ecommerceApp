import React, { useEffect } from "react"
import styles from "../styles/Home.module.css"
import Product from "../components/Product"
import { getAllProducts, reset } from "../features/products/productsSlice"
import { useDispatch, useSelector } from "react-redux"

export default function Home() {
	const dispatch = useDispatch()
	const { isError, products, message, isSuccess, isLoading } = useSelector(
		(state) => state.products
	)

	useEffect(() => {
		if (!products.length) {
			dispatch(getAllProducts())
		}

		if (isError) {
			console.log(message)
		}

		dispatch(reset())
	}, [])

	const allProducts = products.map((product) => {
		return (
			<Product
				key={product.id}
				name={product.name}
				description={product.description}
				price={product.price}
				id={product.id}
				img={product.imageurl}
			/>
		)
	})

	return (
		<div className={styles.home}>
			<h2 className={styles.home__title}>Latest Titles</h2>

			<div className={styles.home__products}>
				{isLoading ? (
					console.log("loading") //come back to this
				) : allProducts ? (
					allProducts
				) : (
					<h2>There are currently no products to select from, sorry.</h2>
				)}
			</div>
		</div>
	)
}
