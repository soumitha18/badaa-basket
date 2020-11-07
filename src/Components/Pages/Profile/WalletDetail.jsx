import React from 'react'
import "../../styles/ProfileDetail.modules.css";

export default function WalletDetail() {
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
                            <h5>RS. 0.0</h5>
                            <button style={{ backgroundColor: "#fab457", border: "grey", borderRadius: "5px", width: "130px", height: "35px", outline: "none", marginTop: "30px" }}>FUND WALLET</button>
                        </div>

                        <div className="ml-4 mt-2">
                            <h4>WALLET ACTIVITY</h4>
                            <div className="row p-3 border bg-light ">
                                <span>
                                    <label for="startDate">From</label>
                                    <input className="ml-2 mr-4" type="date" id="startDate" name="startDate" />
                                </span>
                                <span>
                                    <label for="endDate">To</label>
                                    <input className="ml-2 mr-4" type="date" id="endDate" name="endDate" />
                                </span>
                                <button type="button" class="btn btn-sm shadow-sm" style={{ backgroundColor: "#fcf1de" }}>Show Activity</button>
                            </div>
                        </div>
                        <div className="border p-1 ml-2 mt-4 px-3">
                            <p>No wallet activity available for the period!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
