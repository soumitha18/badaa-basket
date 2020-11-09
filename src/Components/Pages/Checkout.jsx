import React from 'react'

export const Checkout = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                        <img src="https://www.bigbasket.com/static/v2344/common/img/bb_logo.png" alt="bb_logo" />
                        <h5 className="font-weight-bold text-muted mt-4">1800 1234 1234</h5>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-12 my-2">
                                <div class="card rounded-0 shadow-none border">
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-3 text-light">
                                                <i class="fas fa-map-marker-alt"></i> Delivery Address
                                            </div>
                                            <div className="col-6 text-light">
                                                <p>Default Address</p>
                                            </div>
                                            <div className="col-3">
                                                <button className="px-4 py-1 bg-transparent border border-dark float-right"><small className="px-3" >CHANGE</small></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 my-2">
                                <div class="card rounded-0 shadow-none border">
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-4 text-light">
                                                <i class="fas fa-gift"></i> Is this a gift order?
                                            </div>
                                            <div className="col-5 text-light">
                                            </div>
                                            <div className="col-3">
                                                <button className="px-4 py-1 bg-transparent border border-dark float-right"><small >ADD MESSAGE</small></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 my-2">
                                <div class="card rounded-0 shadow-none border">
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-12 text-secondary">
                                                <i class="fas fa-calendar-alt h5"></i> <span className="pl-2 font-weight-bold mt-1">Delivery Options</span>
                                            </div>
                                            <div className="col-10 mx-4">
                                                <div className="row">
                                                    <div className="col-5">
                                                        <input type="radio" checked /> <span className="font-weight-bold">Default Delivery Options</span>
                                                    </div>
                                                    <div className="col-7">
                                                        <small>1 Shipment, Delivery charge: <span className="font-weight-bold text-success ">FREE</span> </small>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 mt-2">
                                                <div class="card rounded-0 shadow-none bg-light">
                                                    <div class="card-body">
                                                        <div className="row">
                                                            <div className="col-4 text-secondary">
                                                                <i class="fas fa-truck"></i><small> Shipment 1: Standard Delivery</small>
                                                            </div>
                                                            <div className="col-3 text-secondary">
                                                                <small>12 items @ 2124.42</small><br />
                                                                <small>Delivery charge: <span className="font-weight-bold text-success ">FREE</span> </small>
                                                            </div>
                                                            <div className="col-5">
                                                                <select name="" id="" className="form-control rounded-0 ">
                                                                    <option value=""> TOMORROW 08:00 AM - 11:00 AM</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <button className="btn btn-success rounded-0 px-4 py-3 mx-0 mt-4 shadow-none float-right "><h5 >PROCEED TO PAYMENT</h5></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 my-2">
                                <div class="card rounded-0 shadow-none border">
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-4 text-light">
                                                <i class="far fa-credit-card"></i> Payment Options
                                            </div>
                                            <div className="col-5 text-light">
                                            </div>
                                            <div className="col-3">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <div>
                                <h5 className="font-weight-bold">Apply Voucher</h5>
                            </div>
                            <div>
                                <div class="card rounded-0 shadow-none bg-light">
                                    <div class="card-body">
                                        <div class="input-group mb-2">
                                            <input type="text" class="form-control" placeholder="Enter voucher code" />
                                            <div class="input-group-prepend">
                                                <div class="input-group-text btn-secondary">Apply</div>
                                            </div>
                                        </div>
                                        {/* <input type="text" placeholder="Enter voucher code" style={{ border: "none", padding: "10px", outline: "none" }} />
                                        <button className="btn btn-secondary rounded-0 ml-n3 shadow-none border">Apply</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-12">
                                <h5 className="font-weight-bold">Order Summary</h5>
                            </div>
                            <div className="col-12">
                                <div class="card rounded-0 shadow-none bg-light">
                                    <div class="card-body">
                                        <div class="card shadow-none rounded-0 border">
                                            <div class="card-body">
                                                Basket Value
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
