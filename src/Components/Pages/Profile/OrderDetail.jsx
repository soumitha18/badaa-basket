import React from 'react'
import "../../styles/ProfileDetail.modules.css";

export default function OrderDetail() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h6 className="border-bottom mt-1" style={{ textDecoration: "underline", textDecorationColor: "#86d615", textDecorationThickness: "2px" }}>PERSONAL DETAILS</h6>
                        <div className="mt-1 text-muted" style={{ display: "flex", flexDirection: "column" }}>
                            <span className="my-2">Edit Profile</span>
                            <span className="my-2">Delivery Addresses</span>
                            <span className="my-2">Email Addresses</span>
                        </div>
                        <h6 className="border-bottom mt-1" style={{ textDecoration: "underline", textDecorationColor: "#86d615", textDecorationThickness: "2px" }}>SHOP FROM</h6>
                        <div className="text-muted" style={{ display: "flex", flexDirection: "column" }}>
                            <span className="my-2">Smart Basket</span>
                            <span className="my-2">Shopping List</span>
                            <span className="my-2">Past Order</span>
                        </div>
                        <h6 className="border-bottom" style={{ textDecoration: "underline", textDecorationColor: "#86d615", textDecorationThickness: "2px" }}>MY ACCOUNT</h6>
                        <div className="text-muted">
                            <div className="my-3">Customer Service</div>
                            <div className="my-3">My Orders</div>
                            <div className="my-3">My Wallet</div>
                            <div className="my-3">My Gift Cards</div>
                            <div className="my-3">My Payments</div>
                            <div className="my-3">Refer & Earn</div>
                            <div className="my-3">Locate on Map</div>
                            <div className="my-3">Alerts & Notification</div>
                            <div className="my-3">Spend Trends</div>
                        </div>
                    </div>
                    <div className="col-9 ">
                        <div className="row border-left d-flex">
                            <div className="mr-auto p-2">
                                <h2> My Orders</h2>
                            </div>
                            <div className="p-2">
                                <button type="button" className="btn btn-outline-secondary"> <i className="fa fa-question-circle" aria-hidden="true"></i>HELP</button>
                            </div>
                            <div className="p-2">
                                <button type="button" className="btn" style={{ cursor: "no-drop", backgroundColor: "#86d615", width: "200px" }}>PAY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
