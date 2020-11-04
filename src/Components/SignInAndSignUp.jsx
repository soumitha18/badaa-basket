import React from 'react'

export default function SignInAndSignUp() {
    return (
        <>
            <div className="modal fade" id="modalLRForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog cascading-modal" role="document">
                    <div className="modal-content">
                        <div className="modal-c-tabs mx-auto">
                            <ul className="nav" style={{ marginLeft: "140px" }} role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link text-success " data-toggle="tab" href="#panel7" role="tab">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-success active" data-toggle="tab" href="#panel8" role="tab">Register</a>
                                </li>
                            </ul>
                            <hr style={{ width: "150px", marginTop: "0" }} />

                            <div className="tab-content">
                                <div className="tab-pane fade in show active" id="panel7" role="tabpanel">
                                    <div className="modal-body mb-1">
                                        <div className="md-form form-sm mb-5">
                                            <input type="email" id="modalLRInput10" placeholder="Email" className="form-control border-top-0 border-right-0 border-left-0 validate" />
                                        </div>
                                        <div className="md-form form-sm mb-4">
                                            <input type="password" id="modalLRInput11" placeholder="Password" className="form-control border-top-0 border-right-0 border-left-0 validate" />
                                        </div>
                                        <div className="text-center mt-2">
                                            <button style={{ width: "400px", height: "60px" }} className="btn btn-success">Log in</button>
                                        </div>

                                    </div>
                                </div>
                                <div className="tab-pane fade" id="panel8" role="tabpanel">
                                    <div className="modal-body">
                                        <div className="md-form form-sm mb-5">
                                            <input type="text" id="modalLRInput12" style={{ outline: "none" }} placeholder="User Name" className="form-control border-top-0 border-right-0 border-left-0 validate" />
                                        </div>

                                        <div className="md-form form-sm mb-5">
                                            <input type="email" id="modalLRInput13" style={{ outline: "none" }} placeholder="Email-Id" className="form-control border-top-0 border-right-0 border-left-0 validate" />
                                        </div>

                                        <div className="md-form form-sm mb-5">
                                            <input type="text" id="modalLRInput14" style={{ outline: "none" }} placeholder="Mobile Number" className="form-control border-top-0 border-right-0 border-left-0 validate" />
                                        </div>

                                        <div className="md-form form-sm mb-4">
                                            <input type="password" id="modalLRInput15" style={{ outline: "none" }} placeholder="Password" className="form-control border-top-0 border-right-0 border-left-0 validate" />
                                        </div>

                                        <div className="text-center form-sm mt-2">
                                            <button style={{ width: "400px", height: "60px" }} className="btn btn-success">Signup Using Email</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <a href="" className="btn btn-default btn-rounded my-3" data-toggle="modal" data-target="#modalLRForm">LogIn/Register</a>
            </div>
        </>
    )
}
