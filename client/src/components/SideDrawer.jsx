import React from 'react'
import styles from "../styles/SideDrawer.module.css"

const SideDrawer = ({show}) => {
  let showing = null
  if(show){
    showing = styles.sidedrawershow
  }

  return (
     <div className={`${styles.sidedrawer} ${showing}`}>SideDrawer</div>
  )
}

export default SideDrawer