import React from 'react'
import { useState } from 'react'

export const BasketCard = ({ item }) => {
    const [val, setVal] = useState(item.quantity)
    return (
        <div className="p-2 m-2">
            <div className="row">
                <div className="col-2">
                    <img src={item.imageUrl} alt="imageProduct" width="100%" />
                </div>
                <div className="col-5">
                    <small className="text-muted">{item.category}</small><br />
                    <small>{item.subCategory} {item.productName} {item.size}</small><br />
                    <small className="text-muted">{val}x{item.mrp}</small>
                </div>
                <div className="col-2 m-0 p-0 pt-3">
                    <button className="buttonBasket rounded-circle border" onClick={() => setVal(val => val - 1)}>-</button> {val} <button className="buttonBasket rounded-circle border" onClick={() => setVal(val => val + 1)}>+</button>
                </div>
                <div className="col-2 pt-2 text-center">
                    <small>Rs. {(Number(item.mrp) * Number(val)).toFixed(2)}</small><br />
                    <small className="text-success" style={{ fontSize: "10px" }}>saved Rs.{ }</small>
                </div>
                <div className="col-1">
                    <span className="float-right pr-2" >x</span>
                </div>
            </div>
        </div>
    )
}
