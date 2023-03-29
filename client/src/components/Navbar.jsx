import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import styles from "../styles/Navbar.module.css"
import { useSelector } from "react-redux"

const Navbar = ({ toggleSideDrawer }) => {
	const { cartItems } = useSelector((state) => state.cart)

	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar__logo}>
				<h2>PERN Shopping Cart</h2>
			</div>

			<ul className={styles.navbar__links}>
				<li>
					<Link to="/cart" className={styles.cart__link}>
						<i className="fas fa-shopping-cart"></i>
						<span className={styles.cartlogo__badge}>{cartItems.length}</span>
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
