import React from 'react'
import './styles/navbar.modules.css'

export const NavBar = () => {
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-2">
                    <img src="https://www.bbassets.com/static/staticContent/bb_logo.png" className="img-fluid" alt=""/>
                </div>
                <div className="col-7 inputDiv mt-4">
                    <span className="float-right navTollFree"><small>1860 123 1000</small></span>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Search for Products.." aria-label="Username" aria-describedby="basic-addon1"/>
                        <div class="input-group-prepend ">
                            <span class="input-group-text searchButton" id="basic-addon1"><i className="fas fa-search text-white p-1"></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-2 mt-4">
                    <img src="https://www.bigbasket.com/media/uploads/banner_images/All_bbstar_DT_1_150x30_23rdOct.png" className="img-fluid" alt=""/>
                </div>
            </div>
            <div className="row">
                <div className="col-2 shopBy p-2">
                    SHOP BY CATEGORY <i class="fas fa-caret-down pl-2"></i>
                </div>
                <div className="col-10 border">

                </div>
            </div>
        </div>
    )
}
