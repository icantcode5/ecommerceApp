import React from 'react'
import { Link } from "react-router-dom"
import styles from "../styles/Navbar.module.css"

const Navbar = ({toggleSideDrawer}) => {



  return (
    <nav className={styles.navbar}>
      
      <div className={styles.navbar__logo}>
        <h2>PERN Shopping Cart</h2>
      </div>

      <ul className={styles.navbar__links}>
        <li>
          <Link to ="/cart" className={styles.cart__link}>
           <i className="fas fa-shopping-cart"></i>
           <span className={styles.cartlogo__badge}>0</span>
          </Link>
        </li>

        <li>
          <Link to = "/">
            Shop
          </Link>
        </li>
      </ul>


      <div className={styles.hamburger__menu} onClick = {toggleSideDrawer}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar