import React from 'react'
import styles from "../styles/Backdrop.module.css"

const Backdrop = ({show}) => {
  
  return (
   show && <div className={styles.backdrop}></div>
  )
}

export default Backdrop