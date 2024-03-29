import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from 'react-router-dom'
import { editing } from "../../Redux/AuthReducer/action"
import { handleCapture, payment } from '../../Redux/PaymentReducer/action'

export const Checkout = () => {

    const user = useSelector(state => state.auth.user)
    const total = Math.round(user && user.basket.reduce((total, item) => total + Number(item.mrp) * Number(item.quantity), 0))
    const totalDiscount = Math.round(user && user.basket.reduce((total, item) => total + Number(item.originalMrp - item.mrp) * Number(item.quantity), 0))
    const history = useHistory()
    const dispatch = useDispatch()
    const capture = useSelector(state => state.payment.capture)

    const handleClick = () => {
        dispatch(payment({ total, to: user.email, orders: user.basket.length, totalDiscount }))
    }

    useEffect(() => {
        if (capture) {
            user.order = user.basket
            user.basket = []
            dispatch(editing(user))
            alert("Payment Successful! Email Sent to you!")
            dispatch(handleCapture())
            history.push("/my-account/orders")
        }
    }, [capture])


    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                        <Link to="/"><img src="/bb.png" alt="bb_logo" /></Link>
                        <h5 className="font-weight-bold text-muted mt-4">1800 1234 1234</h5>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-12 my-2">
                                <div class="card rounded-0 shadow-none border">
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-3 text-light">
                                                <i class="fas fa-map-marker-alt"></i> Delivery Address
                                            </div>
                                            <div className="col-6 text-light">
                                                <p>Default Address</p>
                                            </div>
                                            <div className="col-3">
                                                <button className="px-4 py-1 bg-transparent border border-dark float-right"><small className="px-3" >CHANGE</small></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 my-2">
                                <div class="card rounded-0 shadow-none border">
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-4 text-light">
                                                <i class="fas fa-gift"></i> Is this a gift order?
                                            </div>
                                            <div className="col-5 text-light">
                                            </div>
                                            <div className="col-3">
                                                <button className="px-4 py-1 bg-transparent border border-dark float-right"><small >ADD MESSAGE</small></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 my-2">
                                <div class="card rounded-0 shadow-none border">
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-12 text-secondary">
                                                <i class="fas fa-calendar-alt h5"></i> <span className="pl-2 font-weight-bold mt-1">Delivery Options</span>
                                            </div>
                                            <div className="col-10 mx-4">
                                                <div className="row">
                                                    <div className="col-5">
                                                        <input type="radio" checked /> <span className="font-weight-bold">Default Delivery Options</span>
                                                    </div>
                                                    <div className="col-7">
                                                        <small>1 Shipment, Delivery charge: <span className="font-weight-bold text-success ">FREE</span> </small>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 mt-2">
                                                <div class="card rounded-0 shadow-none bg-light">
                                                    <div class="card-body">
                                                        <div className="row">
                                                            <div className="col-4 text-secondary">
                                                                <i class="fas fa-truck"></i><small> Shipment 1: Standard Delivery</small>
                                                            </div>
                                                            <div className="col-3 text-secondary">
                                                                <small>{user.basket.length} items @ {total}</small><br />
                                                                <small>Delivery charge: <span className="font-weight-bold text-success ">FREE</span> </small>
                                                            </div>
                                                            <div className="col-5">
                                                                <select name="" id="" className="form-control rounded-0 ">
                                                                    <option value=""> TOMORROW 08:00 AM - 11:00 AM</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <button className="btn btn-success rounded-0 px-4 py-3 mx-0 mt-4 shadow-none float-right" onClick={handleClick}><h5 >PROCEED TO PAYMENT</h5></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 my-2">
                                <div class="card rounded-0 shadow-none border">
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-4 text-light">
                                                <i class="far fa-credit-card"></i> Payment Options
                                            </div>
                                            <div className="col-5 text-light">
                                            </div>
                                            <div className="col-3">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <div>
                                <h5 className="font-weight-bold">Apply Voucher</h5>
                            </div>
                            <div>
                                <div class="card rounded-0 shadow-none bg-light">
                                    <div class="card-body">
                                        <div class="input-group mb-2">
                                            <input type="text" class="form-control" placeholder="Enter voucher code" />
                                            <div class="input-group-prepend">
                                                <div class="input-group-text btn-secondary">Apply</div>
                                            </div>
                                        </div>
                                        {/* <input type="text" placeholder="Enter voucher code" style={{ border: "none", padding: "10px", outline: "none" }} />
                                        <button className="btn btn-secondary rounded-0 ml-n3 shadow-none border">Apply</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-12">
                                <h5 className="font-weight-bold">Order Summary</h5>
                            </div>
                            <div className="col-12">
                                <div class="card rounded-0 shadow-none bg-light">
                                    <div class="card-body">
                                        <div class="card shadow-none rounded-0 border">
                                            <div className="card-body">
                                                <div class="card-text mb-0 pb-0">Basket Value<span className="float-right">Rs {total}</span></div>
                                                <div class="card-text my-1 py-1">Delivery Charge<span className="float-right">Rs 0.00</span></div>
                                                <hr />
                                                <div class="card-text m-0 p-0 px-2">Total Amount<span className="float-right">Rs {total}</span></div>
                                                <div className="card-text px-2">
                                                    Total Savings : <span className="float-right">{totalDiscount}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
