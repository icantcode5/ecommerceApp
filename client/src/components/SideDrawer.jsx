import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../styles/SideDrawer.module.css"

const SideDrawer = ({show, hideSideDrawer}) => {
  let showing = null
  show ? showing  = styles.sidedrawershow : ""

  return (

     <div className={`${styles.sidedrawer} ${showing}`}>
      <ul onClick={hideSideDrawer}>
        <li>
          <Link to = "/cart">
            <i className="fas fa-shopping-cart"></i>
            <span className={styles.sidedrawerbadge}>0</span>
          </Link>
        </li>
        <li>
            <Link to = "/">
              Shop
            </Link>
        </li>
      </ul>
     </div>
    
  )
}

export default SideDrawer