import { GET_LOCATION_FAILURE, GET_LOCATION_REQUEST, GET_LOCATION_SUCCESS } from "./actionTypes"

export const initState = {
    locations: [],
    error: ""
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_LOCATION_REQUEST:
            return {
                ...state,
                error: ""
            }
        case GET_LOCATION_FAILURE:
            return {
                ...state,
                error: "Something went wrong"
            }
        case GET_LOCATION_SUCCESS:
            return {
                ...state,
                error: "",
                locations: action.payload
            }
        default:
            return state;
    }
}

export default reducer