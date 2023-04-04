import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import styles from "../styles/Navbar.module.css"
import { useSelector } from "react-redux"

const Navbar = ({ toggleSideDrawer }) => {
	const { cartItems } = useSelector((state) => state.cart)

	//prettier-ignore
	const numberOfItemsInCart = cartItems.reduce((curr, product) => curr + product.QTY ,0)

	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar__logo}>
				<h2>
					<Link to="/">TechReal</Link>
				</h2>
			</div>

			<ul className={styles.navbar__links}>
				<li>
					<Link to="/cart" className={styles.cart__link}>
						<i className="fas fa-shopping-cart"></i>
						<span className={styles.cartlogo__badge}>
							{numberOfItemsInCart}
						</span>
					</Link>
				</li>

				<li>
					<Link to="/products">Shop</Link>
				</li>
			</ul>

			<div className={styles.hamburger__menu} onClick={toggleSideDrawer}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	)
}

export default Navbar
