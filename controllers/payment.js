const Stripe = require("stripe")
//prettier-ignore
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

module.exports = {
	checkoutCart: async (req, res) => {
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
				success_url: `${req.headers.origin}/success`,
				cancel_url: `${req.headers.origin}/cart`,
			}

			const session = await stripe.checkout.sessions.create(data)
			res.status(200).json(session)
		} catch (error) {
			console.log(error.message)
		}
	},
}
