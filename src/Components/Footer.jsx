import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import "../Components/styles/style.modules.css"

export const Footer = () => {

    const history = useHistory()

    if (history.location.pathname === "/checkout") {
        return null
    }
    return (
        <>
            <div className="container mx-auto justify-content-center">
                <small>
                    <div className="row">
                        <div className="col-3">
                            <h5 className="text-success">bigbasket</h5>
                            <Link to="/" className="list" >About Us</Link><br />
                            <Link to="/" className="list" >In News</Link><br />
                            <Link to="/" className="list" >Green bigbasket</Link><br />
                            <Link to="/" className="list" >Privacy Policy</Link><br />
                            <Link to="/" className="list" >Terms and Conditions</Link><br />
                            <Link to="/" className="list" >Careers At bigbasket</Link><br />
                            <Link to="/" className="list" >bb Instant</Link><br />
                            <Link to="/" className="list" >bb Daily</Link><br />
                        </div>
                        <div className="col-3">
                            <h5 className="text-success">Help</h5>
                            <Link to="/" className="list" >FAQs</Link><br />
                            <Link to="/" className="list" >Contact Us</Link><br />
                            <Link to="/" className="list" >bb Wallet FAQs</Link><br />
                            <Link to="/" className="list" >bb Wallet T&Cs</Link><br />
                            <Link to="/" className="list" >Vendor Connect</Link><br />
                            <Link to="/" className="list" >E-Invoice Compliance for bigbasket Vendors</Link><br />
                        </div>
                        <div className="col-3">
                            <h5 className="text-success">Download Our App</h5>
                            <img className="mb-2 mt-2" src="https://www.bbassets.com/static/v2340/custPage/build/content/img/Google-App-store-icon.png" alt="google play" />
                            <img src="https://www.bbassets.com/static/v2340/custPage/build/content/img/Apple-App-store-icon.png" alt="apple store" />
                        </div>
                        <div className="col-3">
                            <h5 className="text-success">Get Social With Us</h5>
                            <div className="row">
                                <div className="col-3">
                                    <div className="circleFb">
                                        <i className="fa fa-facebook fa-2x m-3" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="circleP">
                                        <i className="fa fa-pinterest-p fa-2x m-3" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="circleT">
                                        <i className="fa fa-twitter fa-2x m-3" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="circleI">
                                        <i className="fa fa-instagram fa-2x m-3" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img className="mt-3 ml-5" src="https://seal.beyondsecurity.com/verification-images/www.bigbasket.com/vulnerability-scanner-2.gif" alt="security" />
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-3 text-success">
                            <h6>POPULAR CATEGORIES:</h6>
                        </div>
                        <div className="col-9">
                            <Link to="/" className="list" >Washing Powders,</Link>
                            <Link to="/" className="list" >Milk,</Link>
                            <Link to="/" className="list" >Tea,</Link>
                            <Link to="/" className="list" >Liquid Soaps & Bars,</Link>
                            <Link to="/" className="list" >Toor Dal,</Link>
                            <Link to="/" className="list" >Ghee,</Link>
                            <Link to="/" className="list" >Washing Bars,</Link>
                            <Link to="/" className="list" >Other Fruits,</Link>
                            <Link to="/" className="list" >Butter & Cream,</Link>
                            <Link to="/" className="list" >Basmati Rice,</Link>
                            <Link to="/" className="list" >Cheese,</Link>
                            <Link to="/" className="list" >Fresh Chicken,</Link>
                            <Link to="/" className="list" >Toothpaste,</Link>
                            <Link to="/" className="list" >Toilet Cleaners,</Link>
                            <Link to="/" className="list" >Glucose,</Link>
                            <Link to="/" className="list" >Marie & Milk Biscuits,</Link>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-3 text-success">
                            <h6>POPULAR BRANDS:</h6>
                        </div>
                        <div className="col-9">
                            <Link to="/" className="list" >Fresho,</Link>
                            <Link to="/" className="list" >bb Royal,</Link>
                            <Link to="/" className="list" >Surf Excel,</Link>
                            <Link to="/" className="list" >Amul,</Link>
                            <Link to="/" className="list" >Nestle,</Link>
                            <Link to="/" className="list" >Saffola,</Link>
                            <Link to="/" className="list" >Britannia,</Link>
                            <Link to="/" className="list" >Harpic,</Link>
                            <Link to="/" className="list" >Lizol,</Link>
                            <Link to="/" className="list" >Colgate,</Link>
                            <Link to="/" className="list" >Dettol,,</Link>
                            <Link to="/" className="list" >Dabur,</Link>
                            <Link to="/" className="list" >Tata I Shakti,</Link>
                            <Link to="/" className="list" >Fresho Meats,</Link>
                            <Link to="/" className="list" >Tropicana,</Link>
                            <Link to="/" className="list" >danone,</Link>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-3 text-success">
                            <h6>CITIES WE SERVE:</h6>
                        </div>
                        <div className="col-9">
                            <span to="/" style={{ color: "grey" }}>Bangalore,</span>
                            <span to="/" style={{ color: "grey" }}>Hyderabad,</span>
                            <span to="/" style={{ color: "grey" }}>Mumbai,</span>
                            <span to="/" style={{ color: "grey" }}>Pune,</span>
                            <span to="/" style={{ color: "grey" }}>Chennai,</span>
                            <span to="/" style={{ color: "grey" }}>Delhi,</span>
                            <span to="/" style={{ color: "grey" }}>Mysore,</span>
                            <span to="/" style={{ color: "grey" }}>Coimbatore,</span>
                            <span to="/" style={{ color: "grey" }}>Vijayawada-Guntur,</span>
                            <span to="/" style={{ color: "grey" }}>Kolkata,</span>
                            <span to="/" style={{ color: "grey" }}>Ahmedabad-Gandhinagar,</span>
                            <span to="/" style={{ color: "grey" }}>Nashik,</span>
                            <span to="/" style={{ color: "grey" }}>Lucknow-Kanpur,</span>
                            <span to="/" style={{ color: "grey" }}>Gurgaon,</span>
                            <span to="/" style={{ color: "grey" }}>Vadodara,</span>
                            <span to="/" style={{ color: "grey" }}>Visakhapatnam,</span>
                            <span to="/" style={{ color: "grey" }}>Surat,</span>
                            <span to="/" style={{ color: "grey" }}>Nagpur,</span>
                            <span to="/" style={{ color: "grey" }}>Patna,</span>
                            <span to="/" style={{ color: "grey" }}>Indore,</span>
                            <span to="/" style={{ color: "grey" }}>Chandigarh Tricity,</span>
                            <span to="/" style={{ color: "grey" }}>Jaipur,</span>
                            <span to="/" style={{ color: "grey" }}>Bhopal,</span>
                            <span to="/" style={{ color: "grey" }}>Noida-Ghaziabad,</span>
                            <span to="/" style={{ color: "grey" }}>Kochi,</span>
                        </div>
                    </div>

                    <div className="row my-3">
                        <div className="col-3 text-success">
                            <h6>PAYMENT OPTIONS:</h6>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                <h6 style={{ width: "100px", color: "grey" }} >CASH ON DELIVERY</h6>
                                <img width="80px" height="50px" className="ml-3" src="https://cdn.iconscout.com/icon/free/png-512/visa-3-226460.png" alt="Mobikwik" />
                                <img width="80px" height="50px" className="ml-3" src="https://img.icons8.com/color/2x/paytm.png" alt="Mobikwik" />
                                <img width="80px" height="50px" className="ml-3" src="https://bit.ly/3oUumEY" alt="Mobikwik" />
                                <img width="80px" height="50px" className="ml-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTy4orRzKutwYaskYzKapTsB4dA7DngD1prog&usqp=CAU" alt="Mobikwik" />
                                <img width="80px" height="50px" className="ml-3" src="https://bit.ly/2I5GCRK" alt="Mobikwik" />
                                <img width="80px" height="50px" className="ml-3" src="data:image/png;base64,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" alt="Mobikwik" />
                            </div>
                        </div>
                    </div>
                </small>
            </div>
        </>
    )
}
