// import axios from "axios"
import {Routes, Route} from "react-router-dom"
import { useState } from "react"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import Navbar from "./components/Navbar"
import Backdrop from "./components/Backdrop"
import SideDrawer from "./components/SideDrawer"


function App() {
  const [sideToggle, setSideToggle] = useState(false)

  function toggleSideDrawer(){
    setSideToggle(prev => !prev)
  }

  return (
    <>
    <Navbar toggleSideDrawer = {toggleSideDrawer}/>
    <SideDrawer show = {sideToggle} />
    <Backdrop show = {sideToggle}/>
    <Routes>
      <Route  path = "/" element = {<Home />}/>
      <Route  path = "/products" element = {<Home />}/>
      <Route  path = "/product/:id" element = {<Product />}/>
      <Route  path = "/cart" element = {<Cart />}/>
    </Routes>
    </>
  )
}

export default App