import React from 'react'

export default function MyBasket() {
    return (
        <>
            <div style={{ backgroundColor: "whitesmoke" }}>
                <div className="container bg-white">
                    <div className="p-4">
                        <h2 className="font-weight-light text-muted">Your Basket(01 item)</h2>
                        <hr />
                        <button type="button" className="btn" style={{ backgroundColor: "#fcfcfc", width: "230px", border: "1px solid #ff7b00", fontSize: "14px" }}> <i class="fa fa-product-hunt mr-2 text-warning" aria-hidden="true"></i>VIEW AVAILABLE PROMOS</button>

                        <div className="mt-5">
                            <table class="table">
                                <thead class="thead" style={{ backgroundColor: "#636360", color: "white" }} >
                                    <tr>
                                        <th scope="col-6" className="w-50">ITEM DESCRIPTION</th>
                                        <th scope="col-2">UNIT PRICE</th>
                                        <th scope="col-2">QUANTITY</th>
                                        <th scope="col-2">SUBTOTAL</th>
                                        <th style={{ backgroundColor: "#a5b357", color: "black" }} scope="col-2">SAVINGS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="bg-light" >
                                            <span>Fruits & Vegetables</span>
                                            <small className="text-muted ml-2">01 item: Rs. 270.00</small>
                                        </td>
                                        <td className="bg-light text-muted"></td>
                                        <td className="bg-light text-muted"></td>
                                        <td className="bg-light text-muted"></td>
                                        <td className="bg-light text-muted"></td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div className="flex-1 mr-3 h3">
                                                <i class="fa fa-motorcycle" aria-hidden="true"></i>
                                            </div>
                                            <div className="flex-1">
                                                <small className="text-muted">FRESHO</small><br />
                                                <span className="h6">Banana - Yelakki 1 kg</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span>Rs.135.00</span><br />
                                            <small style={{ textDecoration: "line-through" }}>Rs. 168.75</small>
                                        </td>
                                        <td>1</td>
                                        <td>Rs.135.00</td>
                                        <td className="text-danger border-left">Rs. 33.75</td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr />
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col-4">
                                        <div>
                                            <button type="button" className="btn text-muted" style={{ backgroundColor: "#fcfcfc", width: "150px", border: "1px solid green", fontSize: "14px" }}> <i class="fa fa-shopping-basket mr-2" aria-hidden="true"></i>EMPTY BASKET</button>
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
                                <div className="row">
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col-8">
                                                <span>Subtotal</span><br />
                                                <span>Delivery Charges<i class="fa fa-question-circle text-success ml-1" aria-hidden="true"></i></span>
                                            </div>
                                            <div className="col-4">
                                                <span>Rs.135.00</span><br />
                                                <span>**</span>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-8">
                                                <h3>TOTAL</h3>
                                            </div>
                                            <div className="col-4">
                                                <h3>Rs.135.00</h3>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <p>*For this order: Accepted food coupon is Rs. 135.00</p>
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
                                    <button type="button" className="btn text-muted shadow-sm" style={{ backgroundColor: "#fcd277", width: "210px", height: "60px", fontSize: "22px", marginLeft: "300px" }}>CHECKOUT <i class="fa fa-arrow-circle-right ml-3" aria-hidden="true"></i></button>
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
