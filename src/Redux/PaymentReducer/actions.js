import { PAYMENT_FAILURE, PAYMENT_REQUEST, PAYMENT_SUCCESS } from "./actionTypes"

import axios from "axios"

export const paymentFailure = () => ({
    type: PAYMENT_FAILURE
})

export const paymentRequest = () => ({
    type: PAYMENT_REQUEST
})

export const paymentSuccess = () => ({
    type: PAYMENT_SUCCESS
})

export const payment = ({ total, to, totalDiscount, orders }) => async (dispatch) => {
    const API_URL = 'http://localhost:5000/'
    const orderUrl = `${API_URL}order?total=${total}`;
    const response = await axios.get(orderUrl);
    const { data } = response;

    const options = {
        name: "Badaa Basket",
        description: "Payment",
        order_id: data.id,
        handler: async (response) => {
            try {
                const paymentId = response.razorpay_payment_id;
                const url = `${API_URL}capture/${paymentId}`;
                const captureResponse = await axios.post(url, { total: total })
                const successObj = JSON.parse(captureResponse.data)
                const captured = successObj.captured;

                if (captured) {
                    axios.post("http://localhost:5000/email/send", { to, subject: `Badaa Basket`, message: `Thanks for Buying! your ordered ${orders} Items. Payment is successful Rs.${total} with Discount of Rs.${totalDiscount}` })
                        .then(() => dispatch(paymentSuccess()))
                        .catch(() => console.log("err"))
                }
            } catch (err) {
                dispatch(paymentFailure())
            }
        },
        theme: {
            color: "rgb(129, 212, 19)",
        },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
}