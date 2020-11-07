import React from 'react'
import "../../styles/ProfileDetail.modules.css";

export default function Customer() {
    return (
        <div style={{ backgroundColor: "whitesmoke" }}>
            <div className="container bg-white">
                <div className="row">
                    <div className="col-3 border-right">
                        <h5 className="hEffect mb-3">MY ACCOUNT</h5>
                        <div className="hEffect my-1">Personal Details</div>
                        <div className="mt-1 text-muted" style={{ display: "flex", flexDirection: "column" }}>
                            <span className="hEffect my-1">-Edit Profile</span>
                            <span className="hEffect my-1">-Delivery Addresses</span>
                            <span className="hEffect my-1">-Email Addresses</span>
                        </div>
                        <div className="hEffect my-1">Shop From</div>
                        <div className="text-muted" style={{ display: "flex", flexDirection: "column" }}>
                            <span className="hEffect my-1">-Smart Basket</span>
                            <span className="hEffect my-1">-Shopping List</span>
                            <span className="hEffect" >-Past Order</span>
                        </div>
                        <div className="hEffect my-3">My Orders</div>
                        <div className="hEffect my-3">Customer Service</div>
                        <div className="hEffect my-3">My Membership</div>
                        <div className="hEffect my-3">My Wallet</div>
                        <div className="hEffect my-3">My Gift Cards</div>
                        <div className="hEffect my-3">My Payments</div>
                        <div className="hEffect my-3">Alerts & Notification</div>
                    </div>
                    <div className="col-9">
                        <div className="ml-4">
                            <div className="mb-4 mt-5">
                                <span className="h2 font-weight-light">Customer Service</span>
                            </div>

                            <h5>Regarding Orders</h5>
                            <div className="row" style={{ display: "flex" }}>
                                <div className="d-flex bg-light m-3" style={{ flex: "1" }}>
                                    <div>
                                        <i class="fa fa-shopping-basket h1 mr-3 ml-2" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <span>Change Delivery Slot</span><br />
                                        <small>Click here to change delivery slot</small>
                                    </div>
                                </div>

                                <div className="d-flex bg-light m-3" style={{ flex: "1" }}>
                                    <div>
                                        <i class="fa fa-shopping-basket h1 mr-3 ml-2" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <span>Returns & Exchanges</span><br />
                                        <small>Click here to exchange/return your deliver product</small>
                                    </div>
                                </div>
                            </div>

                            <div className="row w-50" style={{ display: "flex" }}>
                                <div className="d-flex bg-light my-2 ml-2" style={{ flex: "1" }}>
                                    <div>
                                        <i class="fa fa-shopping-basket h1 mr-3 ml-2" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <span>Cancel Orders</span><br />
                                        <small>Click here to cancel your active order</small>
                                    </div>
                                </div>
                            </div>

                            <h5 className="mt-5">Regarding Payments</h5>
                            <div className="row" style={{ display: "flex" }}>
                                <div className="d-flex bg-light m-3" style={{ flex: "1" }}>
                                    <div>
                                        <i class="fa fa-shopping-basket h1 mr-3 ml-2" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <span>Pay for an Order</span><br />
                                        <small>Click here to pay for your unpaid active order</small>
                                    </div>
                                </div>

                                <div className="d-flex bg-light m-3" style={{ flex: "1" }}>
                                    <div>
                                        <i class="fa fa-shopping-basket h1 mr-3 ml-2" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <span>Forgot eVoucher</span><br />
                                        <small>Click here to apply voucher for an active order</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
