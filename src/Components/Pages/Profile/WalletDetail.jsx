import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import "../../styles/ProfileDetail.modules.css";

export default function WalletDetail() {

    const isAuth = useSelector((state) => state.auth.isAuth);
    const user = useSelector((state) => state.auth.user);
    const history = useHistory()

    if (!isAuth) {
        history.push("/")
    }

    return (
        <div className="my-3" style={{ backgroundColor: "whitesmoke" }}>
            <div className="container bg-white">
                <div className="my-3"><small><Link to="/" className="text-muted">Home</Link>{` > `}<Link to="/my-account/profile" className="text-muted">Profile</Link>{` > `}Wallet</small></div>
                <div className="row">
                    <div className="col-3 border-right"><small>
                        <h5 className="hEffect mb-3">MY ACCOUNT</h5>
                        <div className="hEffect my-1">Personal Details</div>
                        <div className="mt-1 text-muted ml-3" style={{ display: "flex", flexDirection: "column" }}>
                            <Link to="/my-account/profile-edit" className="hEffect my-1 text-muted">-Edit Profile</Link>
                            <Link to="/my-account/delivery-address" className="hEffect my-1 text-muted">-Delivery Addresses</Link>
                            <span className="hEffect my-1">-Email Addresses</span>
                        </div>
                        <div className="hEffect my-1">Shop From</div>
                        <div className="text-muted ml-3" style={{ display: "flex", flexDirection: "column" }}>
                            <span className="hEffect my-1">-Smart Basket</span>
                            <span className="hEffect my-1">-Shopping List</span>
                            <span className="hEffect" >-Past Order</span>
                        </div>
                        <div className="hEffect my-3">My Orders</div>
                        <div className="hEffect my-3">Customer Service</div>
                        <div className="hEffect my-3">My Membership</div>
                        <div className="hEffect my-3 text-success">My Wallet</div>
                        <div className="hEffect my-3">My Gift Cards</div>
                        <div className="hEffect my-3">My Payments</div>
                        <div className="hEffect my-3">Alerts & Notification</div></small>
                    </div>
                    <div className="col-9">
                        <div className="ml-4 mb-5">
                            <span className="h2 font-weight-light mr-4 p-2">My Wallet</span>
                        </div>

                        <div className="ml-4">
                            <p className="w-50">
                                The bigbasket Wallet is a pre-paid credit account that is associated with your bigbasket account. This prepaid account allows you to pay a lump sum amount once to bigbasket and then shop multiple times without having to pay each time.

                                 <button type="button" class="btn btn-white btn-sm" style={{ color: "#0d80de", outline: "none", border: "none" }}>read more...</button>
                            </p>
                        </div>

                        <div className="border p-4 ml-4">
                            <h5>Current Balance</h5>
                            <h5>RS. {user.wallet}</h5>
                            <button style={{ backgroundColor: "#fab457", border: "grey", borderRadius: "5px", width: "130px", height: "35px", outline: "none", marginTop: "30px" }}>FUND WALLET</button>
                        </div>

                        <div className="ml-4 mt-2">
                            <h4>WALLET ACTIVITY</h4>
                            <div className="row p-3 border bg-light ">
                                <span className="col-4 pt-2">
                                    <label for="startDate">From</label>
                                    <input className="ml-2 mr-4" type="date" id="startDate" name="startDate" />
                                </span>
                                <span className="col-4 pt-2">
                                    <label for="endDate">To</label>
                                    <input className="ml-2 mr-4" type="date" id="endDate" name="endDate" />
                                </span>
                                <span className="col-4">
                                    <button type="button" class="btn btn-sm shadow-sm" style={{ backgroundColor: "#fcf1de" }}>Show Activity</button>
                                </span>
                            </div>
                        </div>
                        <div className="border m-3 p-3">
                            <p className="p-0 m-0">No wallet activity available for the period!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
