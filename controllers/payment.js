const Stripe = require("stripe")
//prettier-ignore
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const express = require("express")
const app = express()

if (process.env.NODE_ENV === "production") {
	app.use(express.static("./client/dist"))
}

module.exports = {
	checkoutCart: async (req, res) => {
		let domain
		if (process.env.NODE_ENV === "production") {
			domain = "https://ecommerceapp-w6n9.onrender.com"
		} else {
			domain = "http://localhost:5173"
		}
		const cartItems = req.body
		try {
			const data = {
				submit_type: "pay",
				mode: "payment",
				payment_method_types: ["card"],
				billing_address_collection: "auto",
				// shipping_options : []
				line_items: cartItems.map((product) => {
					return {
						price_data: {
							currency: "usd",
							product_data: {
								name: product.name,
								images: [product.imageurl],
							},
							unit_amount: product.price * 100,
						},
						adjustable_quantity: {
							enabled: true,
							minimum: 1,
						},
						quantity: product.QTY,
					}
				}),
				success_url: `${domain}/cart`,
				cancel_url: `${domain}/cart`,
			}

			const session = await stripe.checkout.sessions.create(data)
			res.status(200).json(session)
		} catch (error) {
			console.log(error.message)
		}
	},

	getSuccessPage: async (req, res) => {
		console.log("getSuccessPage hit!!!")
		res.json({ message: "Successfully checked out!!!" })
	},
}
