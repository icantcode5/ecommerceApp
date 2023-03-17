import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../styles/Product.module.css"

function Product() {
  return (
    <div className={styles.product}>
      <img src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80' alt=''/>

      <div className={styles.product__info}>
        <p className={styles.product__name}> Lorem ipsum dolor sit amet consectetur</p>
        <p className={styles.product__description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione vel impedit aut iste, eius debitis non ab neque sequi dolorem optio, delectus soluta quas sit eos illum odit at unde?</p>
        <p className={styles.product__price}>$4.00</p>

        <Link to = {`/product/${1}`} className = {styles.product__link}> View</Link>
      </div>
    </div> 
  )
}

export default Product