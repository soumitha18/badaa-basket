import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editing } from '../../Redux/AuthReducer/action'

export const SearchProductCard = ({ item, i, handleClick, setSearch }) => {
    const [val, setVal] = useState(1)
    const user = useSelector(state => state.auth.user)
    const isAuth = useSelector(state => state.auth.isAuth)

    const dispatch = useDispatch()

    const discountedPrice = ((Number(item.mrp[0]) * (100 - Number(item.offer))) / 100).toFixed(2)

    const handleBasket = () => {
        let data = user.basket.findIndex(elem => elem.productName === item.productName)
        if (data >= 0) {
            user.basket[data].quantity = Number(user.basket[data].quantity) + Number(val)
        }
        else {
            const basket = {
                ...item,
                size: item.size[0],
                mrp: discountedPrice,
                originalMrp: item.mrp[0],
                quantity: val
            }
            user.basket.push(basket)
        }
        dispatch(editing(user))
        setSearch("")
    }

    return (
        <div className="card p-2" key={i}>
            <div className="row">
                <div className="col-1">
                    <img src={item.imageUrl} alt={item.productName} width="40px" />
                </div>
                <div className="col-4" onClick={() => handleClick(item)}>
                    <small className="text-muted">{item.brandName}<br />
                        <b>{item.productName}</b></small>
                </div>
                <div className="col-1 p-0 pt-2 text-muted">
                    <small>{item.size[0]}</small>
                </div>
                <div className="col-2 text-center text-muted p-0 pt-2">
                    <small>{discountedPrice}/-</small>
                </div>
                <div className="col-2 px-1 pt-1">
                    <div className="input-group flex-nowrap">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrapping"><small className="text-muted">Qty</small></span>
                        </div>
                        <input type="text" value={val} onChange={e => setVal(e.target.value)} className="form-control" />
                    </div>
                </div>
                <div className="col-2 px-1">
                    <button className="addBtn" onClick={isAuth ? handleBasket : null} data-toggle={isAuth ? null : "modal"} data-target={isAuth ? null : "#modalLRForm"}>ADD <i className="fas fa-shopping-basket"></i></button>
                </div>
            </div>
        </div>
    )
}
