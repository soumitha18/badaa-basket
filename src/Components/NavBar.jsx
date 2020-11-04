import React from 'react'
import './styles/navbar.modules.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { useState } from 'react';
import axios from "axios"

export const NavBar = () => {
    const [location, setLocation] = useState("")
    const [locations, setLocations] = useState([])
    const [name, setName] = useState("")

    const handleLocation = e => {
        axios.get(`http://localhost:5000/getlocation?location=${e.target.value}`)
            .then(res => setLocations(res.data.locations))
            .catch(err => console.log(err.response.data))
    }

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-2 p-3">
                    <img src="https://www.bbassets.com/static/staticContent/bb_logo.png" className="img-fluid" alt="bada" width="100%" />
                </div>
                <div className="col-8">
                    <div>
                        <span className="float-right">
                            <small className="mr-3">
                                <img src="https://www.flaticon.com/svg/static/icons/svg/633/633515.svg" alt="call" width="12px" /> 1860 123 1000
                        </small>
                            <small data-toggle="modal" data-target="#modalConfirmDelete">
                                <img src="https://www.flaticon.com/svg/static/icons/svg/684/684809.svg" alt="location" width="12px" />{location || `Mumbai`}
                            </small>
                        </span>
                    </div>
                    <div className="row" style={{ clear: "both" }}>
                        <div className="col-9">
                            <div className="input-group mt-3">
                                <input type="text" className="form-control" placeholder="Search for Products.." aria-label="Username" aria-describedby="basic-addon1" />
                                <div className="input-group-prepend ">
                                    <span className="input-group-text searchButton" id="basic-addon1"><i className="fas fa-search text-white p-1"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mt-3">
                            <img src="https://www.bigbasket.com/media/uploads/banner_images/All_bbstar_DT_1_150x30_23rdOct.png" alt="" height="95%" />
                        </div>
                    </div>

                </div>
                <div className="col-2">
                    <div className="text-center">
                        <small><img src="https://www.flaticon.com/svg/static/icons/svg/167/167123.svg" alt="User" width="15px" /> {name || " login | sign up"}</small>
                    </div>
                    <div className="card ml-4 mt-2  pl-3 pt-3 pb-2 border-0" style={{ background: "whitesmoke" }}>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/3697/3697422.svg" className="float-left" alt="basket" width="20px" /><small>My Basket <b className="text-success">0</b> items</small>
                    </div>
                </div>
                {/* <div className="col-2">
                    <img src="https://www.bbassets.com/static/staticContent/bb_logo.png" className="img-fluid" alt="bada" width="100%" />
                </div>
                <div className="col-7 inputDiv mt-4">
                    <span className="float-right navTollFree">
                        <small className="mr-3">
                            <img src="https://www.flaticon.com/svg/static/icons/svg/633/633515.svg" alt="call" width="12px" /> 1860 123 1000
                        </small>
                        <small data-toggle="modal" data-target="#modalConfirmDelete">
                            <img src="https://www.flaticon.com/svg/static/icons/svg/684/684809.svg" alt="location" width="12px" />{location || `Mumbai`}
                        </small>
                    </span>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search for Products.." aria-label="Username" aria-describedby="basic-addon1" />
                        <div className="input-group-prepend ">
                            <span className="input-group-text searchButton" id="basic-addon1"><i className="fas fa-search text-white p-1"></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-2 mt-4">
                    <img src="https://www.bigbasket.com/media/uploads/banner_images/All_bbstar_DT_1_150x30_23rdOct.png" className="img-fluid" alt="" />
                </div> */}
            </div>
            <div className="row">
                <div className="col-2 shopBy p-1">
                    SHOP BY CATEGORY <i className="fas fa-caret-down pl-2"></i>
                </div>
                <div className="col-10 border">
                    
                </div>
            </div>
            <div className="modal fade" id="modalConfirmDelete" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-sm modal-notify modal-success" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <small>Select your city to start shopping</small>
                            <select className="w-100" onChange={e => handleLocation(e)}>
                                <option value="agra">Agra</option>
                                <option value="ambala">Ambala</option>
                                <option value="anad">Anand</option>
                                <option value="bangalore">Bangalore</option>
                                <option value="bhopal">Bhopal</option>
                                <option value="chennai">Chennai</option>
                                <option value="coimbatore">Coimbatore</option>
                                <option value="delhi">Delhi</option>
                                <option value="eluru">Eluru</option>
                                <option value="hosur">Hosur</option>
                                <option value="hyderabad">Hyderabad</option>
                                <option value="indore">Indore</option>
                                <option value="jaipur">Jaipur</option>
                                <option value="kanpur">Kanpur</option>
                                <option value="kochi">Kochi</option>
                                <option value="kolkata">Kolkata</option>
                                <option value="lucknow">Lucknow</option>
                                <option value="meerut">Meerut</option>
                                <option value="mumbai">Mumbai</option>
                                <option value="mysore">Mysore</option>
                                <option value="nagpur">Nagpur</option>
                                <option value="patna">Patna</option>
                                <option value="surat">Surat</option>
                                <option value="tiruppur">Tiruppur</option>
                                <option value="vijayawada">Vijayawada</option>
                                <option value="visakhapatnam">Visakhapatnam</option>
                            </select>
                            <div>
                                <input list="browsers" value={location} onChange={e => setLocation(e.target.value)} placeholder="select area" className="w-100 mt-3" />
                                <datalist id="browsers">
                                    <option value={locations[0]} />
                                    <option value={locations[1]} />
                                    <option value={locations[2]} />
                                    <option value={locations[3]} />
                                    <option value={locations[4]} />
                                </datalist>
                            </div>
                            <div className="text-center mt-3">
                                <span className="bg-success border-success text-light px-5 py-1" data-dismiss="modal"><small>Continue</small></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
