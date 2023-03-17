import React from 'react'
import styles from "../styles/Home.module.css"
import Product from "../components/Product"

export default function Home() {
  return (
    <div
     className={styles.home}>
      <h2 className={styles.home__title}>Latest Titles</h2>

      <div className={styles.home__products}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
     </div>
  )
}
