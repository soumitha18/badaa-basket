import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import "../../styles/ProfileDetail.modules.css";

export default function Customer() {

    const isAuth = useSelector((state) => state.auth.isAuth);
    const history = useHistory()

    if (!isAuth) {
        history.push("/")
    }

    return (
        <div className="my-3" style={{ backgroundColor: "whitesmoke" }}>
            <div className="container bg-white">
                <div className="my-3"><small><Link to="/" className="text-muted">Home</Link>{` > `}<Link to="/my-account/profile" className="text-muted">Profile</Link>{` > `}Customer</small></div>
                <div className="row">
                    <div className="col-3 border-right"><small>
                        <h5 className="hEffect mb-3">MY ACCOUNT</h5>
                        <div className="hEffect my-1">Personal Details</div>
                        <div className="mt-1 ml-3 text-muted" style={{ display: "flex", flexDirection: "column" }}>
                            <span className="hEffect my-1">-Edit Profile</span>
                            <span className="hEffect my-1">-Delivery Addresses</span>
                            <span className="hEffect my-1">-Email Addresses</span>
                        </div>
                        <div className="hEffect my-1">Shop From</div>
                        <div className="text-muted ml-3" style={{ display: "flex", flexDirection: "column" }}>
                            <span className="hEffect my-1">-Smart Basket</span>
                            <span className="hEffect my-1">-Shopping List</span>
                            <span className="hEffect" >Past Order</span>
                        </div>
                        <div className="hEffect my-3">My Orders</div>
                        <div className="hEffect my-3 text-success">Customer Service</div>
                        <div className="hEffect my-3">My Membership</div>
                        <div className="hEffect my-3">My Wallet</div>
                        <div className="hEffect my-3">My Gift Cards</div>
                        <div className="hEffect my-3">My Payments</div>
                        <div className="hEffect my-3">Alerts & Notification</div></small>
                    </div>
                    <div className="col-9">
                        <div className="ml-4">
                            <div className="mb-4 mt-5">
                                <span className="h2 font-weight-light">Customer Service</span>
                            </div>

                            <h5>Regarding Orders</h5>
                            <div className="row" style={{ display: "flex" }}>
                                <div className="d-flex m-3 divHover p-2" style={{ flex: "1" }}>
                                    <div>
                                        <i class="fa fa-calendar-times fa-2x pt-2 mr-3" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <span>Change Delivery Slot</span><br />
                                        <small>Click here to change delivery slot</small>
                                    </div>
                                </div>

                                <div className="d-flex m-3 divHover p-2" style={{ flex: "1" }}>
                                    <div>
                                        <i class="fa fa-sync fa-2x pt-2 mr-3" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <span>Returns & Exchanges</span><br />
                                        <small>Click here to exchange/return your deliver product</small>
                                    </div>
                                </div>
                            </div>

                            <div className="row w-50" style={{ display: "flex" }}>
                                <div className="d-flex my-2 ml-2 p-2 divHover" style={{ flex: "1" }}>
                                    <div>
                                        <i class="fa fa-window-close fa-2x pt-2 mr-3 ml-2" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <span>Cancel Orders</span><br />
                                        <small>Click here to cancel your active order</small>
                                    </div>
                                </div>
                            </div>

                            <h5 className="mt-5">Regarding Payments</h5>
                            <div className="row" style={{ display: "flex" }}>
                                <div className="d-flex m-3 divHover p-2" style={{ flex: "1" }}>
                                    <div>
                                        <i class="fa fa-money-check fa-2x pt-2 mr-3" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <span>Pay for an Order</span><br />
                                        <small>Click here to pay for your unpaid active order</small>
                                    </div>
                                </div>

                                <div className="d-flex m-3 divHover p-2" style={{ flex: "1" }}>
                                    <div>
                                        <i class="fas fa-shopping-basket fa-2x pt-2 mr-3" aria-hidden="true"></i>
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
