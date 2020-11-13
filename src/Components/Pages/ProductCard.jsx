import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { editing } from '../../Redux/AuthReducer/action'
import '../styles/productCard.modules.css'

export const ProductCard = ({ prod }) => {
    const [index, setIndex] = useState(0)
    const [addBtn, setAddBtn] = useState(true)
    const user = useSelector(state => state.auth.user)
    const isAuth = useSelector(state => state.auth.isAuth)
    const [val, setVal] = useState(1)

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setIndex(e.target.value)
    }
    const handleClick = () => {
        localStorage.setItem("product", JSON.stringify(prod))
    }
    const discountedPrice = ((prod.mrp[index] * (100 - Number(prod.offer))) / 100).toFixed(2)

    const handleBasket = () => {
        setAddBtn(false)
        const basket = {
            ...prod,
            size: prod.size[index],
            mrp: discountedPrice,
            originalMrp: prod.mrp[index],
            quantity: val
        }
        user.basket.push(basket)
        dispatch(editing(user))
    }

    const handleQuantity = (value) => {
        let index

        for (let i = 0; i < user.basket.length; i++) {
            if (user.basket[i].productName === prod.productName) {
                index = i
            }
        }

        if (user.basket[index].quantity === 1 && value === -1) {
            let basket = user.basket.filter((ele) => ele.productName !== user.basket[index].productName)
            const userDetail = {
                ...user,
                basket
            }
            dispatch(editing(userDetail))
            setAddBtn(true)
            return
        }
        user.basket[index].quantity = Number(user.basket[index].quantity) + value
        dispatch(editing(user))
        setVal(user.basket[index].quantity)
    }
    useEffect(() => {
        if (isAuth) {
            let data = user.basket.find(item => item.productName === prod.productName)
            if (data) {
                setVal(data.quantity)
                setAddBtn(false)
            }
            else {
                setVal(1)
                setAddBtn(true)
            }
        }

    }, [user, prod])

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
                                <select onChange={handleChange} className="custom-select">
                                    {prod.size && prod.size.map((item, i) => <option key={i} value={i}>{item} - Rs.{prod.mrp[i]}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 ml-4 pb-2 bg-light">
                                <small><span className="text-muted">MRP <span style={{ textDecoration: "line-through" }}>Rs. {prod.mrp[index]} </span></span><span> Rs.{discountedPrice}</span></small>
                                <div className="row">
                                    <div className="col-1">
                                        <i className="fas fa-truck truck"></i>
                                    </div>
                                    <div className="col-10 text-muted" style={{ lineHeight: 1 }}><small>Standard Delivery: Today 5:00PM - 8:00PM</small></div>
                                </div>
                                {addBtn ?
                                    <div className="row mt-2">
                                        <div className="col-7 ml-n2">
                                            <div className="input-group flex-nowrap  ">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text m-n1 " id="addon-wrapping"><small className="text-muted">Qty</small></span>
                                                </div>
                                                <input type="text" className="form-control m-n1 text-center" value={val} onChange={(e) => setVal(Number(e.target.value))} />
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <button className="addBtn m-n1" onClick={isAuth ? handleBasket : null} data-toggle={isAuth ? null : "modal"} data-target={isAuth ? null : "#modalLRForm"}>ADD <i className="fas fa-shopping-basket"></i></button>
                                        </div>
                                    </div> :
                                    <div className="row mt-2">
                                        <div className="col-12 d.flex text-center">
                                            <button onClick={() => handleQuantity(-1)} className="border-0">-</button>
                                            <input type="text" value={val} className="qtyInput border-0 text-center" />
                                            <button onClick={() => handleQuantity(1)} className="border-0">+</button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
