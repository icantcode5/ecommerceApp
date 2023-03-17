import React from 'react'
import styles from "../styles/Backdrop.module.css"

const Backdrop = ({show, hideSideDrawer}) => {
  
  return (
   show && <div className={styles.backdrop} onClick = {hideSideDrawer}></div>
  )
}

export default Backdrop