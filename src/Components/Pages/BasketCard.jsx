import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editing } from '../../Redux/AuthReducer/action'

export const BasketCard = ({ item, index }) => {
    const user = useSelector(state => state.auth.user)

    const dispatch = useDispatch()

    const handleRemove = () => {
        let basket = user.basket.filter((ele) => ele.productName !== item.productName)
        const userDetail = {
            ...user,
            basket
        }
        dispatch(editing(userDetail))   
    }

    const handleQuantity = (value) => {
        if(user.basket[index].quantity === 1 && value === -1){
            handleRemove()
            return
        }
        user.basket[index].quantity = Number(user.basket[index].quantity) + (value)
        dispatch(editing(user))
    }


    return (
        <div className="p-2 m-2">
            <div className="row">
                <div className="col-2">
                    <img src={item.imageUrl} alt="imageProduct" width="100%" />
                </div>
                <div className="col-5">
                    <small className="text-muted">{item.category}</small><br />
                    <small>{item.subCategory} {item.productName} {item.size}</small><br />
                    <small className="text-muted">{item.quantity}x{item.mrp}</small>
                </div>
                <div className="col-2 m-0 p-0 pt-3">
                    <button  className="bg-white rounded-circle border" onClick={() => handleQuantity(-1)}> - </button> {item.quantity} <button className="bg-white rounded-circle border" onClick={() => handleQuantity(1)}> + </button>
                </div>
                <div className="col-2 p-0 m-0 pt-2 text-center">
                    <small>Rs. {(Number(item.mrp) * Number(item.quantity)).toFixed(2)}</small><br />
                    <small className="text-success" style={{ fontSize: "10px" }}>saved Rs.{ (item.originalMrp - item.mrp).toFixed(2) }</small>
                </div>
                <div className="col-1">
                    <span onClick={handleRemove} className="float-right pr-2" >x</span>
                </div>
            </div>
        </div>
    )
}
