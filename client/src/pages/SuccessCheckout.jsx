import React, { useEffect, useState } from "react"
import axios from "axios"
import styles from "../styles/SuccessCheckout.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import confettiShow from "../utilities/confetti"
import { useDispatch } from "react-redux"
import { resetCart } from "../features/cart/cartSlice"

const SuccessCheckout = () => {
	const dispatch = useDispatch()
	const [getMessage, useGetMessage] = useState("")

	useEffect(() => {
		const getSuccessPage = async (req, res) => {
			//prettier-ignore
			const response = await axios.get("https://ecommerceapp-w6n9.onrender.com/payment/success/")
			console.log(response.data)
		}

		confettiShow()
		const timer = setTimeout(() => {
			confettiShow()
		}, 250)

		getSuccessPage()
		dispatch(resetCart())
		return () => clearTimeout(timer)
	}, [])
	return (
		<div className={styles.container}>
			<div className={styles.successinfo}>
				<FontAwesomeIcon icon={faCircleCheck} color="green" size="xl" />
				<p>Thank You For You Order!</p>
				<span>Check your email inbox for the receipt.</span>
				<Link to="/">Continue Shopping</Link>
			</div>
		</div>
	)
}

export default SuccessCheckout
