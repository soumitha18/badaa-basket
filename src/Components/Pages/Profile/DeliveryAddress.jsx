import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { editing } from '../../../Redux/AuthReducer/action';
import "../../styles/ProfileDetail.modules.css";

export default function DeleveryAddress() {

    const user = useSelector((state) => state.auth.user);
    console.log(user)
    console.log(user.ad)
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [number, setNumber] = useState(user.number)
    const [HouseNo, setHouseNo] = useState(user.address.HouseNo)
    const [ApartmentName, setApartmentName] = useState(user.address.ApartmentName)
    const [Street, setStreet] = useState(user.address.Street)
    const [Landmark, setLandmark] = useState(user.address.Landmark)
    const [AreaDetails, setAreaDetails] = useState(user.address.AreaDetails)
    const [City, setCity] = useState(user.address.City)
    const [PinCode, setPinCode] = useState(user.address.PinCode)
    const [NickName, setNickName] = useState(user.address.NickName)


    const isAuth = useSelector(state => state.auth.isAuth)
    const history = useHistory()
    const dispatch = useDispatch()

    if (!isAuth) {
        history.push("/")
    }

    const editAddress = () => {
        let obj = {
            ...user,
            name,
            email,
            number,
            address: {
                HouseNo,
                ApartmentName,
                Street,
                Landmark,
                AreaDetails,
                City,
                PinCode,
                NickName
            },
        }
        dispatch(editing(obj))
        history.push("/my-account/profile")
    }


    return (
        <div className="my-3">
            <div className="container">
                <div><small><Link to="/" className="text-muted">Home</Link>{` > `}<Link to="/my-account/profile" className="text-muted">Profile</Link>{` > `}Address Book</small></div>
                <hr />
                <div className="row mt-2">
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

                    <div className="col-9">
                        <div>
                            <h3 className="font-weight-bolder secondary">Add Address</h3>
                        </div>

                        <form className="border border-dark p-5">
                            <div>
                                <h5 className="font-weight-bold ">Personal Details</h5>
                                <div className="row">
                                    <div className="row mt-1 ml-2 mr-4" style={{ width: "40%" }}>
                                        <label for="FirstName" class="col-form-label text-muted"><small>First Name</small><span className="text-danger">*</span></label>
                                        <input class="form-control form-control-sm border-right-0 border-top-0 border-left-0" onChange={e => setName(e.target.value)} value={name} style={{ borderBottom: "1px solid green", outline: "none" }} id="FirstName" type="text" required></input>
                                    </div>
                                    <div className="row mt-1 ml-5" style={{ width: "40%" }}>
                                        <label for="email" class="col-form-label text-muted"><small>Email</small><span className="text-danger">*</span></label>
                                        <input class="form-control form-control-sm border-right-0 border-top-0 border-left-0" onChange={e => setEmail(e.target.value)} value={email} style={{ borderBottom: "1px solid green", outline: "0px" }} id="email" type="text" required></input>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="row mt-1 ml-2" style={{ width: "40%" }}>
                                        <label for="MobileNumber" class="col-form-label text-muted"><small>Mobile Number</small><span className="text-danger">*</span></label>
                                        <input class="form-control form-control-sm border-right-0 border-top-0 border-left-0" onChange={e => setNumber(e.target.value)} value={number} style={{ borderBottom: "1px solid green", outline: "0px" }} id="LastName" type="text" required></input>
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h5 className="font-weight-bold">Address Details</h5>
                                <div className="row">
                                    <div className="row mt-1 ml-2 mr-4" style={{ width: "40%" }}>
                                        <label for="HouseNo" class="col-form-label text-muted"><small>House no.</small><span className="text-danger">*</span></label>
                                        <input class="form-control form-control-sm border-right-0 border-top-0 border-left-0" onChange={e => setHouseNo(e.target.value)} value={HouseNo} style={{ borderBottom: "1px solid green", outline: "none" }} id="HouseNo" type="text" required></input>
                                    </div>
                                    <div className="row mt-1 ml-5" style={{ width: "40%" }}>
                                        <label for="ApartmentName" class="col-form-label text-muted"><small>Apartment name</small><span className="text-danger">*</span></label>
                                        <input class="form-control form-control-sm border-right-0 border-top-0 border-left-0" onChange={e => setApartmentName(e.target.value)} value={ApartmentName} style={{ borderBottom: "1px solid green", outline: "0px" }} id="ApartmentName" type="text" required></input>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="row mt-1 ml-2 mr-4" style={{ width: "40%" }}>
                                        <label for="Street" class="col-form-label text-muted"><small>Street details to locate you</small></label>
                                        <input class="form-control form-control-sm border-right-0 border-top-0 border-left-0" onChange={e => setStreet(e.target.value)} value={Street} style={{ borderBottom: "1px solid green", outline: "none" }} id="Street" type="text" required></input>
                                    </div>
                                    <div className="row mt-1 ml-5" style={{ width: "40%" }}>
                                        <label for="Landmark" class="col-form-label text-muted"><small>Landmark for easy reach out</small></label>
                                        <input class="form-control form-control-sm border-right-0 border-top-0 border-left-0" onChange={e => setLandmark(e.target.value)} value={Landmark} style={{ borderBottom: "1px solid green", outline: "0px" }} id="Landmark" type="text" required></input>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="row mt-1 ml-2 mr-4" style={{ width: "40%" }}>
                                        <label for="AreaDetails" class="col-form-label text-muted"><small>Area Details</small><span className="text-danger">*</span></label>
                                        <input class="form-control form-control-sm border-right-0 border-top-0 border-left-0" onChange={e => setAreaDetails(e.target.value)} value={AreaDetails} style={{ borderBottom: "1px solid green", outline: "none" }} id="AreaDetails" type="text" required></input>
                                    </div>
                                    <div className="row mt-1 ml-5" style={{ width: "40%" }}>
                                        <label for="City" class="col-form-label text-muted"><small>City</small><span className="text-danger">*</span></label>
                                        <input class="form-control form-control-sm border-right-0 border-top-0 border-left-0" onChange={e => setCity(e.target.value)} value={City} style={{ borderBottom: "1px solid green", outline: "0px" }} id="City" type="text" required></input>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="row mt-1 ml-2" style={{ width: "40%" }}>
                                        <label for="PinCode" class="col-form-label text-muted"><small>Pin Code</small><span className="text-danger">*</span></label>
                                        <input class="form-control form-control-sm border-right-0 border-top-0 border-left-0" onChange={e => setPinCode(e.target.value)} value={PinCode} style={{ borderBottom: "1px solid green", outline: "none" }} id="PinCode" type="text" required></input>
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <span className="text-muted">Choose a nick name</span> <br />
                                <button type="button" class="m-1 bg-white p-1" style={{ border: "1px solid grey", borderRadius: "5px" }}>Home</button>
                                <button type="button" class="m-1 bg-white p-1" style={{ border: "1px solid grey", borderRadius: "5px" }}>Office</button>
                                <button type="button" class="m-1 bg-white p-1" style={{ border: "1px solid grey", borderRadius: "5px" }}>Other</button>
                            </div>

                            <div className="row">
                                <div className="row mt-1 ml-2" style={{ width: "40%" }}>
                                    <label for="NickName" class="col-form-label text-muted"><small>Nick name this address as</small></label>
                                    <input class="form-control form-control-sm border-right-0 border-top-0 border-left-0" onChange={e => setNickName(e.target.value)} value={NickName} style={{ borderBottom: "1px solid green", outline: "none" }} id="NickName" type="text" required></input>
                                </div>
                            </div>

                            <div className="ml-3 my-3">
                                <input class="form-check-input" type="checkbox" value="false" id="Check" required />
                                    Make this as my default delivery address
                            </div>

                            <div className="row">
                                <button type="submit" className="btn text-white" onClick={editAddress} style={{ backgroundColor: "#b2cf42", height: "60px", width: "480px", fontWeight: "bold", marginLeft: "65%" }}>Add Address</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}
