import React, { useEffect } from "react"
import styles from "../styles/SuccessCheckout.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import confettiShow from "../utilities/confetti"
import { useDispatch } from "react-redux"
import { resetCart } from "../features/cart/cartSlice"

const SuccessCheckout = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		confettiShow()
		setTimeout(() => {
			confettiShow()
		}, 250)
		setTimeout(() => {
			confettiShow()
		}, 500)

		dispatch(resetCart())
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
