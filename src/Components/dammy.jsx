import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { useState } from 'react';
import axios from "axios"

export const Dam = () => {
    const [location, setLocation] = useState("")
    const [locations, setLocations] = useState([])

    const handleLocation = e => {
        axios.get(`http://localhost:5000/getlocation?location=${e.target.value}`)
            .then(res => setLocations(res.data.locations))
            .catch(err => console.log(err.response.data))
    }
    console.log(locations)
    return (
        <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalConfirmDelete">{location}</button>


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
                                <input list="browsers" placeholder="select area" className="w-100 mt-3" />
                                <datalist id="browsers">
                                    {
                                        locations & locations.map((item, i) => <option key={i} value={item}>{item}</option>)
                                    }
                                </datalist>
                            </div>
                            <div className="text-center">
                                <span className="btn btn-success text-light" data-dismiss="modal">Continue</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
