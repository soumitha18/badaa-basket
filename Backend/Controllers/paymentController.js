const { v4: uuidv4 } = require('uuid')
const Razorpay = require('razorpay');
const dotenv = require('dotenv');
const request = require("request")

dotenv.config();

const instance = new Razorpay({
    key_id: process.env.RAZOR_PAY_KEY_ID,
    key_secret: process.env.RAZOR_PAY_KEY_SECRET
})

const getOrder = (req, res) => {
    console.log(req.query.total)
    try {
        const options = {
            amount: req.query.total * 100,
            currency: 'INR',
            receipt: uuidv4(),
            payment_capture: 0
        }
        instance.orders.create(options, (err, order) => {
            if (err) {
                return res.status(500).json(err)
            }
            return res.status(200).json(order)
        })
    } catch (err) {
        return res.status(500).send(err)
    }
}

const capturePayment = (req, res) => {
    try {
        console.log(req.body.total)
        return request(
            {
                method: "POST",
                url: `https://${process.env.RAZOR_PAY_KEY_ID}:${process.env.RAZOR_PAY_KEY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
                form: {
                    amount: req.body.total * 100,
                    currency: "INR",
                },
            },
            async function (err, response, body) {
                if (err) {
                    return res.status(500).json({
                        message: "Something Went Wrong1",
                    });
                }
                return res.status(200).json(body);
            });
    } catch (err) {
        return res.status(500).json({
            message: "Something Went Wrong2",
        });
    }
}

module.exports = { getOrder, capturePayment }