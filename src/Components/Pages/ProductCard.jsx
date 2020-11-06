import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/productCard.modules.css'

export const ProductCard = ({ prod }) => {
    const [price, setPrice] = useState(prod.mrp[0])
    const [val, setVal] = useState(1)

    const handleClick = () => {
        localStorage.setItem("product", JSON.stringify(prod))
    }
    const discountedPrice = ((price * (100 - Number(prod.offer))) / 100).toFixed(2)

    return (
        <div className="my-2 mainCard" onClick={handleClick}>
            <div className="card "   >
                <Link to={`/product-item/${prod.productName}`} ><img src={prod.imageUrl} className="card-img-top img-fluid px-4 pt-4" alt="productImage" /></Link>
                {prod.offer !== 0 ? <button type="button" className="offer">
                    <div className="float-right pr-3">Get {prod.offer}% off</div>
                </button> : ""}
                <div className="card-body">
                    <small className="text-muted">{prod.brandName}</small>
                    <p>{prod.productName}</p>
                    <div>
                        <div className="row">
                            <div className="col-12">
                                <select name="" id="" onChange={(e) => setPrice(prod.mrp[e.target.value])} className="custom-select">
                                    {prod.size && prod.size.map((item, i) => <option key={i} value={i}>{item} - Rs.{prod.mrp[i]}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 ml-4 pb-2 bg-light">
                                <small><span className="text-muted">MRP <span style={{ textDecoration: "line-through" }}>Rs. {price} </span></span><span> Rs.{discountedPrice}</span></small>
                                <div className="row">
                                    <div className="col-1">
                                        <i className="fas fa-truck truck"></i>
                                    </div>
                                    <div className="col-10 text-muted" style={{ lineHeight: 1 }}><small>Standard Delivery: Today 5:00PM - 8:00PM</small></div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-7 ml-n2">
                                        <div className="input-group flex-nowrap  ">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text m-n1 " id="addon-wrapping"><samll className="text-muted">Qty</samll></span>
                                            </div>
                                            <input type="text" className="form-control m-n1" value={val} onChange={(e) => setVal(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <button className="addBtn m-n1">ADD <i className="fas fa-shopping-basket"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
