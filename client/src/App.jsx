// import axios from "axios"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Home from "./pages/Home"
import CartPage from "./pages/CartPage"
import ProductPage from "./pages/ProductPage"
import Navbar from "./components/Navbar"
import Backdrop from "./components/Backdrop"
import SideDrawer from "./components/SideDrawer"
import Test from "./pages/Test"
import SuccessCheckout from "./pages/SuccessCheckout"

function App() {
	const [sideToggle, setSideToggle] = useState(false)

	function toggleSideDrawer() {
		setSideToggle(true)
	}

	function hideSideDrawer() {
		setSideToggle(false)
	}

	return (
		<>
			<Navbar toggleSideDrawer={toggleSideDrawer} />
			<SideDrawer show={sideToggle} hideSideDrawer={hideSideDrawer} />
			<Backdrop show={sideToggle} hideSideDrawer={hideSideDrawer} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products/:id" element={<ProductPage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/success" element={<SuccessCheckout />} />
			</Routes>
		</>
	)
}

export default App
