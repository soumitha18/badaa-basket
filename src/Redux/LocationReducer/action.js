import {
    GET_LOCATION_SUCCESS, GET_LOCATION_FAILURE, GET_LOCATION_REQUEST
} from "./actionTypes"

import axios from "axios"

export const getLocationRequest = () => ({
    type: GET_LOCATION_REQUEST
})

export const getLocationFailure = () => ({
    type: GET_LOCATION_FAILURE
})

export const getLocationSuccess = (payload) => ({
    type: GET_LOCATION_SUCCESS,
    payload
})

export const getLocation = (location) => (dispatch) => {
    dispatch(getLocationRequest())
    axios.get(`http://localhost:5000/getlocation?location=${location}`)
        .then(res => dispatch(getLocationSuccess(res.data.locations)))
        .catch(() => dispatch(getLocationFailure()))
}