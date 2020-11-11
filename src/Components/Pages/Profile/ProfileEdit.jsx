import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { editing } from '../../../Redux/AuthReducer/action';
import "../../styles/ProfileDetail.modules.css";

export default function ProfileEdit() {
    const user = useSelector((state) => state.auth.user);
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [number, setNumber] = useState(user.number)
    const isAuth = useSelector(state => state.auth.isAuth)
    const history = useHistory()
    const dispatch = useDispatch()

    if (!isAuth) {
        history.push("/")
    }

    const editUser = () => {
        let obj = {
            ...user,
            name,
            email,
            number
        }
        dispatch(editing(obj))
        history.push("/my-account/profile")
    }

    return (
        <div>
            <div className="container">
                <div className="my-3"><small><Link to="/" className="text-muted">Home</Link>{` > `}<Link to="/my-account/profile" className="text-muted">Profile</Link>{` > `}Edit Profile</small></div>
                <hr />
                <div className="row mt-4">
                    <div className="col-3 border-right"><small>
                        <h6 className="border-bottom mt-1" style={{ textDecoration: "underline", textDecorationColor: "#86d615", textDecorationThickness: "2px" }}>PERSONAL DETAILS</h6>
                        <div className="mt-1 text-muted ml-3" style={{ display: "flex", flexDirection: "column" }}>
                            <span className="my-2">Edit Profile</span>
                            <span className="my-2">Delivery Addresses</span>
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
                            <div className="my-3">My Orders</div>
                            <div className="my-3">My Wallet</div>
                            <div className="my-3">My Gift Cards</div>
                            <div className="my-3">My Payments</div>
                            <div className="my-3">Refer & Earn</div>
                            <div className="my-3">Locate on Map</div>
                            <div className="my-3">Alerts & Notification</div>
                            <div className="my-3">Spend Trends</div>
                        </div></small>
                    </div>

                    <div className="col-8 ml-4">
                        <div>
                            <h3 className="text-muted">Edit Profile Details</h3>
                            <hr />
                        </div>

                        <div className="row border p-2" style={{ backgroundImage: "linear-gradient(180deg,#ededed,#ffffff)" }}>
                            <div className="h4 font-weight-light hEffect">Personal Details</div>
                        </div>

                        <div className="row border">
                            <form className="ml-5 p-4 col">
                                <div className="row">
                                    <label for="Salutation" class="col-sm-3 col-form-label">Salutation:<span className="text-danger ml-1">*</span></label>
                                    <select id="Salutation" class="form-control form-control-sm w-25">
                                        <option>select</option>
                                        <option>Mr.</option>
                                        <option>Mrs.</option>
                                        <option>Ms.</option>
                                    </select>
                                </div>
                                <div className="row my-2">
                                    <label for="FirstName" class="col-sm-3 col-form-label">Name:<span className="text-danger ml-1">*</span></label>
                                    <input class="form-control form-control-sm w-50" onChange={e => setName(e.target.value)} value={name} id="FirstName" type="text" required></input>
                                </div>

                                <div className="row my-2">
                                    <label for="EmailAddress" class="col-sm-3 col-form-label">Email Address:<span className="text-danger ml-1">*</span></label>
                                    <input class="form-control form-control-sm w-50" onChange={e => setEmail(e.target.value)} value={email} id="EmailAddress" type="email" placeholder="Email Address" required></input>
                                </div>
                                <div className="row my-2">
                                    <label for="MobileNumber" class="col-sm-3 col-form-label">Mobile Number:</label>
                                    <div class="input-group mb-2 w-50">
                                        <div class="input-group-text">+91</div>
                                        <input type="text" class="form-control" onChange={e => setNumber(e.target.value)} value={number} id="MobileNumber" placeholder="Mobile Number" />
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="row w-75 mt-4">
                            <p>We would like to be in touch, and update you of our ongoing developments, including new product launches, promotions, offers and services.</p>
                            <div className="ml-3">
                                <input class="form-check-input" type="checkbox" value="false" id="Check" required />
                                    Agree to terms and conditions
                            </div>
                        </div>

                        <div className="">
                            <button type="submit" className="btn pt-2" style={{ backgroundColor: "#f0bf65", borderRadius: "10px", height: "35px", fontWeight: "bold" }} onClick={editUser}>SAVE CHANGES</button>
                            <button type="button" className="btn ml-3 pt-2" style={{ backgroundColor: "#ebe9e6", borderRadius: "10px", height: "35px", fontWeight: "bold" }}>CANCEL</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
