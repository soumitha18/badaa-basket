import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { editing } from '../../../Redux/AuthReducer/action';

export default function MyBasket() {

    const isAuth = useSelector((state) => state.auth.isAuth);
    const user = useSelector((state) => state.auth.user);
    const history = useHistory()
    const dispatch = useDispatch()

    if (!isAuth) {
        history.push("/")
    }

    const handleCheckOut = () =>{
        history.push("/checkout")
    }

    const handleClick = (prod) => {
        let basket = user.basket.filter((ele) => ele.productName !== prod.productName)
        const userDetail = {
            ...user,
            basket
        }
        dispatch(editing(userDetail))
    }
    const handleQuantity = (i,val) => {
        // setVal(val => val + (value))
        if(user.basket[i].quantity === 1 && val === -1){
            let basket = user.basket.filter((ele) => ele.productName !== user.basket[i].productName)
            const userDetail = {
                ...user,
                basket
            }
            dispatch(editing(userDetail))
            return
        }
        user.basket[i].quantity = Number(user.basket[i].quantity) + val
        dispatch(editing(user))
    }

    const handleAllDelete = () => {
        let basket = []
        const userDetail = {
            ...user,
            basket
        }
        dispatch(editing(userDetail))
    }

    const total = (user && user.basket.reduce((total, item) => total + Number(item.mrp) * Number(item.quantity), 0)).toFixed(2)

    return (
        <>
            <div style={{ backgroundColor: "whitesmoke" }}>
                <div className="container bg-white">
                    <div className="p-4">
                        <h2 className="font-weight-light text-muted">Your Basket({user.basket.length} items)</h2>
                        <hr />
                        <button type="button" className="btn border border-danger"> <i class="fa fa-product-hunt mr-2 text-warning" aria-hidden="true"></i>VIEW AVAILABLE PROMOS</button>

                        <div className="my-3">
                            <div className="row p-1 text-center text-white">
                                <div className="col-5 p-2" style={{ backgroundColor: "#636360" }}><small>ITEM DESCRIPTION</small></div>
                                <div className="col-2 p-2" style={{ backgroundColor: "#636360" }}><small>UNIT PRICE</small></div>
                                <div className="col-2 p-2" style={{ backgroundColor: "#636360" }}><small>QUANTITY</small></div>
                                <div className="col-2 p-2" style={{ backgroundColor: "#636360" }}><small>SUBTOTAL</small></div>
                                <div className="col-1 p-2" style={{ backgroundColor: "#a5b357" }}><small>SAVINGS</small></div>
                            </div>
                            {
                                user.basket.map((item, i) => (
                                    <div className="row m-0 border-bottom">
                                        <div className="col-5 pl-5">
                                            <small className="text-muted">{item.category} {item.subCategory}</small>
                                            <p><b>{item.productName} {item.size}</b></p>
                                        </div>
                                        <div className="col-2 text-center pt-3">Rs.{item.mrp}</div>
                                        <div className="col-2 text-center pt-3">
                                                <button className="border-0 rounded-left px-2" onClick={()=>handleQuantity(i,-1)}>-</button>
                                                <input type="text" value={item.quantity} className="border py-0 text-center" style={{width:"25%", border:"1px solid gray"}}/>
                                                <button className="border-0 rounded-right" onClick={()=>handleQuantity(i,1)}>+</button>
                                            </div>
                                        <div className="col-2 text-center pt-3">Rs.{(item.mrp * item.quantity).toFixed(2)} <span onClick={() => handleClick(item)} className="float-right pr-2">x</span></div>
                                        <div className="col-1 text-center pt-3"></div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col-4">
                                        <div>
                                            <button type="button" className="btn text-muted px-2 rounded shadow-none" style={{ backgroundColor: "#fcfcfc", width: "150px", border: "1px solid green", fontSize: "14px" }} onClick={handleAllDelete}> <i class="fa fa-shopping-basket mr-2" aria-hidden="true"></i>EMPTY BASKET</button>
                                        </div>
                                        <div>
                                            <button type="button" className="btn shadow-sm" style={{ backgroundColor: "#fcfcfc", width: "230px", fontSize: "14px", marginTop: "150px" }}>CONTINUE SHOPPING</button>
                                        </div>
                                    </div>
                                    <div className="col-4">

                                    </div>
                                    <div className="col-4 ">
                                        <div className="border border-success text-success text-center" style={{ borderRadius: "5px", width: "130px", }}>
                                            <h6>Offer on RiteBite Max Protein Fruit & Seeds</h6>
                                            <span className="mt-5">Buy 3 RiteBite Max Protein Fruit & Seeds Bar, 35g and get..</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col border border-secondary">
                                <div className="row p-2">
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col-8">
                                                <span>Subtotal</span><br />
                                                <span>Delivery Charges<i class="fa fa-question-circle text-success ml-1" aria-hidden="true"></i></span>
                                            </div>
                                            <div className="col-4 text-center">
                                                <span>Rs. {total}</span><br />
                                                <span>**</span>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="h3">TOTAL<span className="float-right">Rs. {total}</span>
                                        </div>
                                        <div className="text-center mb-0">
                                            <small>*For this order: Accepted food coupon is Rs. {total}</small>
                                        </div>
                                    </div>
                                    <div className="col-2 border-left text-danger">
                                        <i class="fa fa-shopping-basket mt-3" aria-hidden="true"></i><br />
                                        <small>YOU SAVE</small><br />
                                        <small>RS. 33.30</small>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <button onClick={handleCheckOut} type="button" className="btn text-muted shadow-sm" style={{ backgroundColor: "#fcd277", width: "210px", height: "60px", fontSize: "22px", marginLeft: "300px" }}><small>CHECKOUT <i class="fa fa-arrow-circle-right ml-3" aria-hidden="true"></i></small></button>
                                </div>
                                <small>** Actual delivery charges computed at checkout time</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
