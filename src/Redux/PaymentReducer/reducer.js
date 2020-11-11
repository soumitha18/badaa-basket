import { PAYMENT_SUCCESS, PAYMENT_REQUEST, PAYMENT_FAILURE, HANDLE_CAPTURE } from "./actionTypes"

export const initState = {
    capture: false,
    err: false
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case PAYMENT_FAILURE:
            return {
                ...state,
                capture: false,
                err: true
            }
        case PAYMENT_REQUEST:
            return {
                ...state,
                err: false,
                capture: false
            }
        case PAYMENT_SUCCESS:
            return {
                ...state,
                err: false,
                capture: true
            }
        case HANDLE_CAPTURE:
            return {
                ...state,
                capture: false
            }
        default:
            return state
    }
}

export default reducer