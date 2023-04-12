const express = require("express")
const router = express.Router()
const paymentController = require("../controllers/payment")

router.post("/create", paymentController.checkoutCart)
router.get("/success", paymentController.getSuccessPage)

module.exports = router
