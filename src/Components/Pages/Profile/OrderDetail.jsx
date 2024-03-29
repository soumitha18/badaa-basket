import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import "../../styles/ProfileDetail.modules.css";


export default function OrderDetail() {

    const isAuth = useSelector((state) => state.auth.isAuth);
    const user = useSelector((state) => state.auth.user);
    const history = useHistory()

    if (!isAuth) {
        history.push("/")
    }

    const total = (user && user.order.reduce((total, item) => total + Number(item.mrp) * Number(item.quantity), 0)).toFixed(2)
    const totalDiscount = (user && user.order.reduce((total, item) => total + Number(item.originalMrp - item.mrp) * Number(item.quantity), 0)).toFixed(2)

    return (
        <div>
            <div className="container my-3">
                <div className="my-3"><small><Link to="/" className="text-muted">Home</Link>{` > `}<Link to="/my-account/profile" className="text-muted">Profile</Link>{` > `}Orders</small></div>
                <div className="row">
                    <div className="col-3"><small>
                        <h6 className="border-bottom mt-1" style={{ textDecoration: "underline", textDecorationColor: "#86d615", textDecorationThickness: "2px" }}>PERSONAL DETAILS</h6>
                        <div className="mt-1 text-muted ml-3" style={{ display: "flex", flexDirection: "column" }}>
                            <Link to="/my-account/profile-edit" className="hEffect my-1 text-muted">-Edit Profile</Link>
                            <Link to="/my-account/delivery-address" className="hEffect my-1 text-muted">-Delivery Addresses</Link>
                            <span className="my-2">Email Addresses</span>
                        </div>
                        <h6 className="border-bottom mt-1" style={{ textDecoration: "underline", textDecorationColor: "#86d615", textDecorationThickness: "2px" }}>SHOP FROM</h6>
                        <div className="text-muted ml-3" style={{ display: "flex", flexDirection: "column" }}>
                            <span className="my-2">Smart Basket</span>
                            <span className="my-2">Shopping List</span>
                            <span className="my-2">Past Order</span>
                        </div>
                        <h6 className="border-bottom" style={{ textDecoration: "underline", textDecorationColor: "#86d615", textDecorationThickness: "2px" }}>MY ACCOUNT</h6>
                        <div className="text-muted">
                            <div className="my-3">Customer Service</div>
                            <div className="my-3 text-success">My Orders</div>
                            <div className="my-3">My Wallet</div>
                            <div className="my-3">My Gift Cards</div>
                            <div className="my-3">My Payments</div>
                            <div className="my-3">Refer & Earn</div>
                            <div className="my-3">Locate on Map</div>
                            <div className="my-3">Alerts & Notification</div>
                            <div className="my-3">Spend Trends</div>
                        </div>
                    </small>
                    </div>
                    <div className="col-9 ">
                        <div className="row border-left d-flex">
                            <div className="mr-auto p-2">
                                <h2> My Orders</h2>
                            </div>
                            <div className="p-2">
                                <button type="button" className="btn btn-outline-secondary"> <i className="fa fa-question-circle" aria-hidden="true"></i>HELP</button>
                            </div>
                            <div className="p-2 d-none">
                                <button type="button" className="btn" style={{ cursor: "no-drop", backgroundColor: "#86d615", width: "200px" }}>PAY NOW</button>
                            </div>
                        </div>
                        {user && user.order && user.order.length === 0 ?
                        <div className="my-3 text-center" >
                            <small> "No Orders" </small>
                        </div> :
                        <div className="row border-left">
                            <div className="mt-4 ml-2">
                                <input type="checkbox" aria-label="Checkbox for following text input" />
                            </div>

                            <div className="row ml-2 border">
                                <div>
                                    <div style={{ width: "50px", height: "65px", border: "1px solid black", backgroundColor: "black", display: "flex" }}><i class="fa fa-truck fa-2x mt-3 ml-2 text-white" aria-hidden="true"></i></div>
                                </div>
                                <div className="mx-3 d-flex flex-row">
                                    <i class="fa fa-clock-o mt-4" aria-hidden="true"></i>
                                    <div className="d-flex flex-column text-center mt-3 ml-2">
                                        <small>TOMORROW</small>
                                        <small>08:00AM - 11:00AM</small>
                                    </div>
                                </div>
                                <div className="border-right"></div>
                                <div>
                                    <div className="d-flex ml-5 mr-5 text-success">
                                        <i class="fa fa-check-circle mt-3" aria-hidden="true"></i>
                                        <span className="mt-2">_______</span>
                                        <i class="fa fa-circle-thin mt-3" aria-hidden="true"></i>
                                        <span className="mt-2">_______</span>
                                        <i class="fa fa-circle-thin mt-3" aria-hidden="true"></i>
                                        <span className="mt-2">_______</span>
                                        <i class="fa fa-circle-thin mt-3" aria-hidden="true"></i>
                                        <span className="mt-2">_______</span>
                                        <i class="fa fa-circle-thin mt-3" aria-hidden="true"></i>
                                    </div>
                                    <div className="d-flex ml-5">
                                        <small className="mt-2">Placed</small>
                                        <small className="m-2">Inprocess</small>
                                        <small className="m-2">Packed</small>
                                        <small className="m-2">On the way</small>
                                        <small className="m-2">Delivered</small>

                                    </div>
                                </div>
                                <div className="ml-5 mr-5" id="accordionExample">
                                    <button type="button" className="border mt-3 text-muted" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: "white", outline: "none" }}>View {user.order.length} items<i class="fa fa-sort-desc h5" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>}

                        <div className="ml-3 border" id="collapseOne" class="collapse hide" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="row ml-4 mt-4 d-flex d-flex justify-content-around">
                                <div>
                                    <span>Shipment type: Standard delivery</span>
                                </div>
                                <div >
                                    <span>Order-id: {user._id}</span>
                                </div>
                                <div >
                                    <span>Order Placed: {new Date().toDateString()}</span>
                                </div>
                            </div>
                            <hr className="text-center w-75" />

                            <div className="row d-flex ml-4 justify-content-around">
                                <div className="col-3 p-2 mt-3">
                                    <h6 className="font-weight-bold">Items</h6>
                                    {user.order && user.order.map(item => <div key={item.productName}><small>{item.productName}</small></div>)}
                                </div>
                                <div className="col-3 p-2 mt-3">
                                    <h6 className="font-weight-bold">Delivery Address</h6>
                                    <small className="text-muted">{user.name}</small> <br/>
                                    <small className="text-muted">{user.email}</small><br/>
                                    <small className="text-muted">{user.number}</small><br/>
                                </div>
                                <div className="col-4 bg-light mt-2" >
                                    <h5>Order Summery</h5>
                                    <div className="row d-flex justify-content-around">
                                        <span>Delevery charge </span> <span> Rs. 00</span>
                                    </div>
                                    <div className="row d-flex justify-content-around">
                                        <span>Used from Wallet </span> <span> Rs. 00</span>
                                    </div>
                                    <div className="row d-flex justify-content-around">
                                        <span>Order Amount </span> <span> Rs. {total}</span>
                                    </div>
                                    <div className="row d-flex justify-content-around">
                                        <span>Savings </span> <span className="text-success"> Rs. {totalDiscount}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="row ml-4 my-3">
                                {/* <h6 className="mt-4">More With The Order</h6> */}
                            </div>
                            <div className="row d-flex text-center ml-4">
                                <div className="p-2 border border-dark w-25">
                                    <h5>Add-on Order</h5>
                                    <span className="text-muted" >Add more Item without extra delivery charge</span>
                                </div>
                                <div className="p-2 ml-2  border border-dark" >
                                    <h5>Change Slot</h5>
                                    <span className="text-muted">Change Delivery slot</span>
                                </div>
                                <div className="p-2 ml-2 border border-dark" >
                                    <h5>Cancel Order</h5>
                                    <span className="text-muted" >Cancel this order</span>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-end">
                                <button className="border-0 bg-white mr-3 text-primary">View more detail</button>
                            </div>

                        </div>

                        <div className="text-center ml-3" >
                            <div className="text-center" style={{ height: "60px", width: "100%", backgroundColor: "#eef2ed" }}>
                                <div >
                                    <button type="button" disabled className="mt-2" style={{ backgroundColor: "white", width: "200px", height: "45px", border: "1px solid #30c416", outline: "none" }} >APPLY VOUCHER<br /><small className="text-muted m-1">Save more on this order</small></button>
                                </div>
                            </div>
                        </div>

                        {/* <div className="text-center my-3" >
                            <span className="">_________________________________________________</span>
                            <small className="mt-5 m-3">PAST ORDERS</small>
                            <span className="">__________________________________________________</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    )
}
