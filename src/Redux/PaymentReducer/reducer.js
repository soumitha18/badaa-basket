import { PAYMENT_SUCCESS, PAYMENT_REQUEST, PAYMENT_FAILURE } from "./actionTypes"

export const initState = {
    capture: false,
    err: false
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case PAYMENT_FAILURE:
            return {
                capture: false,
                err: true
            }
        case PAYMENT_REQUEST:
            return {
                err: false,
                capture: false
            }
        case PAYMENT_SUCCESS:
            return {
                err: false,
                capture: true
            }
        default:
            return state
    }
}

export default reducer