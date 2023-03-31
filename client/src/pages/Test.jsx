import React, { useEffect, useState } from "react"
import axios from "axios"

function Test() {
	const [text, setText] = useState("")
	useEffect(() => {
		async function getMessage() {
			const response = await axios.get("http://localhost:5000")
			setText(response.data)
		}

		getMessage()
	}, [])

	return <h1>{text}</h1>
}

export default Test
