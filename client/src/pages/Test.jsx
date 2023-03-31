import React, { useEffect, useState } from "react"
import axios from "axios"

function Test() {
	const [text, setText] = useState("")
	useEffect(() => {
		async function getMessage() {
			// if (import.meta.env.PROD) {
			// 	const response = await axios.get(
			// 		"https://ecommerceapp-w6n9.onrender.com/"
			// 	)
			// 	setText(response.data)
			// } else {
			// 	const response = await axios.get("http://localhost:5000")
			// 	setText(response.data)
			// }
			const response = await axios.get(
				"https://ecommerceapp-w6n9.onrender.com/"
			)
			setText(response.data)
		}
		getMessage()
	}, [])

	return <h1>{text}</h1>
}

export default Test
