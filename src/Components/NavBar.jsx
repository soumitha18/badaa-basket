import React from "react";
import "./styles/navbar.modules.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { Link, useHistory } from "react-router-dom";
import { auth, login, signUp } from "../Redux/AuthReducer/action";
import { getSearchProduct } from "../Redux/ProductReducer/action"
import { getLocation } from "../Redux/LocationReducer/action"
import { SearchProductCard } from "./Pages/SearchProductCard";

export const NavBar = () => {
    const [location, setLocation] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [search, setSearch] = useState("")
    const [status, setStatus] = useState(true)

    const dispatch = useDispatch();
    const history = useHistory()

    const locations = useSelector(state => state.location.locations)
    const isAuth = useSelector((state) => state.auth.isAuth);
    const userName = useSelector((state) => state.auth.userName);
    const err = useSelector((state) => state.auth.error);
    const data = useSelector(state => state.product.searchData)

    const throttledVal = useThrottle(search, 500)

    useEffect(() => {
        if (search !== "") {
            dispatch(getSearchProduct(search))
        }
    }, [throttledVal])

    useEffect(() => {
        if (search === "") {
            setStatus(false)
        }
        else {
            setStatus(true)
        }
    }, [search])

    useEffect(() => {
        if (isAuth) {
            empty();
        }
    }, [isAuth]);

    const handleClick = (item) => {
        localStorage.setItem("product", JSON.stringify(item))
        history.push(`/product-item/${item.productName}`)
        setStatus(false)
        setSearch("")
    }

    const handleLocation = (e) => {
        dispatch(getLocation(e.target.value))
    };

    const responseFaceBook = (response) => {
        const obj = {
            email: response.name.split(" ").join("") + "@gmail.com",
            name: response.name,
        };
        dispatch(auth(obj))
    };

    const responseGoogle = (response) => {
        const obj = {
            email: response.profileObj.email,
            name: response.profileObj.name,
        };
        dispatch(auth(obj))
    };

    const handleLogin = () => {
        const obj = { email, password };
        dispatch(login(obj));
    };

    const handleRegister = () => {
        const obj = { name, email, password };
        dispatch(signUp(obj));
    };

    const empty = () => {
        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-2 p-3">
                    <Link to="/">
                        <img
                            src="https://www.bbassets.com/static/staticContent/bb_logo.png"
                            className="img-fluid"
                            alt="bada"
                            width="100%"
                        />
                    </Link>
                </div>
                <div className="col-8">
                    <div>
                        <span className="float-right">
                            <small className="mr-3">
                                <img
                                    src="https://www.flaticon.com/svg/static/icons/svg/633/633515.svg"
                                    alt="call"
                                    width="12px"
                                />{" "}
                1860 123 1000
              </small>
                            <small data-toggle="modal" data-target="#modalConfirmDelete">
                                <img
                                    src="https://www.flaticon.com/svg/static/icons/svg/684/684809.svg"
                                    alt="location"
                                    width="12px"
                                />
                                {location || `Mumbai`}
                            </small>
                        </span>
                    </div>
                    <div className="row" style={{ clear: "both" }}>
                        <div className="col-9">
                            <div className="input-group mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search for Products.."
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                />
                                <div className="input-group-prepend ">
                                    <span
                                        className="input-group-text searchButton"
                                        id="basic-addon1"
                                    >
                                        <i className="fas fa-search text-white p-1"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="position-absolute pr-2 text-left" style={{ zIndex: "10", width: "100%", minHeight: "0px",maxHeight:"330px", overflowY: "scroll", display: status ? "block" : "none" }}>
                                {
                                    data && data.map((item, i) => (
                                        <SearchProductCard item={item} i={i} handleClick={handleClick} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-2 mt-3">
                            <Link to="/bb-star">
                                <img
                                    src="https://www.bigbasket.com/media/uploads/banner_images/All_bbstar_DT_1_150x30_23rdOct.png"
                                    alt=""
                                    height="95%"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="text-center">
                        <small data-toggle="modal" data-target="#modalLRForm">
                            <img
                                src="https://www.flaticon.com/svg/static/icons/svg/167/167123.svg"
                                alt="User"
                                width="15px"
                            />{" "}
                            {userName || " login | sign up"}
                        </small>
                    </div>
                    <div
                        className="card ml-4 mt-2  pl-3 pt-3 pb-2 border-0"
                        style={{ background: "whitesmoke" }}
                    >
                        <img
                            src="https://www.flaticon.com/svg/static/icons/svg/3697/3697422.svg"
                            className="float-left"
                            alt="basket"
                            width="20px"
                        />
                        <small>
                            My Basket <b className="text-success">0</b> items
            </small>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-2 shopBy p-1">
                    SHOP BY CATEGORY <i className="fas fa-caret-down pl-2"></i>
                </div>
                <div className="col-10 border"></div>
            </div>
            <div
                className="modal fade"
                id="modalConfirmDelete"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-sm modal-notify modal-success"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-body">
                            <small>Select your city to start shopping</small>
                            <select className="w-100" onChange={(e) => handleLocation(e)}>
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
                                <input
                                    list="browsers"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="select area"
                                    className="w-100 mt-3"
                                />
                                <datalist id="browsers">
                                    <option value={locations[0]} />
                                    <option value={locations[1]} />
                                    <option value={locations[2]} />
                                    <option value={locations[3]} />
                                    <option value={locations[4]} />
                                </datalist>
                            </div>
                            <div className="text-center mt-3">
                                <span
                                    className="bg-success border-success text-light px-5 py-1"
                                    data-dismiss="modal"
                                >
                                    <small>Continue</small>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="modalLRForm"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog cascading-modal" role="document">
                    <div className="modal-content">
                        <div className="modal-c-tabs">
                            <ul
                                className="nav nav-tabs md-tabs tabs-2 bg-success darken-3"
                                role="tablist"
                            >
                                <li className="nav-item">
                                    <div
                                        className="nav-link active"
                                        data-toggle="tab"
                                        href="#panel7"
                                        role="tab"
                                    >
                                        <i className="fas fa-user mr-1"></i>Login
                  </div>
                                </li>
                                <li className="nav-item">
                                    <div
                                        className="nav-link"
                                        data-toggle="tab"
                                        href="#panel8"
                                        role="tab"
                                    >
                                        <i className="fas fa-user-plus mr-1"></i>Register
                  </div>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div
                                    className="tab-pane fade in show active"
                                    id="panel7"
                                    role="tabpanel"
                                >
                                    <div className="modal-body">
                                        <div className="md-form form-sm">
                                            <i className="fas fa-envelope prefix"></i>
                                            <input
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter Email"
                                                type="email"
                                                className="form-control form-control-sm validate"
                                            />
                                            {err.includes("email") && (
                                                <small className="text-danger">{err}</small>
                                            )}
                                        </div>
                                        <div className="md-form form-sm">
                                            <i className="fas fa-lock prefix"></i>
                                            <input
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Enter Password"
                                                type="password"
                                                className="form-control form-control-sm validate"
                                            />
                                            {err.includes("password") && (
                                                <small className="text-danger">{err}</small>
                                            )}
                                        </div>
                                        <div className="text-center">
                                            <button onClick={handleLogin} className="btn btn-success">
                                                Log in
                      </button>
                                            {!err.includes("email") && !err.includes("password") && (
                                                <small className="text-danger">{err}</small>
                                            )}
                                        </div>
                                        <div className="text-center text-secondary">
                                            OR sign with:
                    </div>
                                        <div className="text-center mt-2">
                                            <GoogleLogin
                                                clientId="25593677194-7vebfmo92m96cc9pg0rcjhgdjm5aq04p.apps.googleusercontent.com"
                                                buttonText="SIGN WITH GOOGLE"
                                                onSuccess={responseGoogle}
                                                onFailure={responseGoogle}
                                                className="px-5 mb-3"
                                            />
                                            <FacebookLogin
                                                appId="377334713463686"
                                                autoLoad={false}
                                                buttonText=""
                                                callback={responseFaceBook}
                                                icon="fa-facebook"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="panel8" role="tabpanel">
                                    <div className="modal-body">
                                        <div className="md-form form-sm">
                                            <i className="fas fa-user prefix"></i>
                                            <input
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Enter UserName"
                                                type="text"
                                                className="form-control form-control-sm validate"
                                            />
                                            {err.includes("name") && (
                                                <small className="text-danger">{err}</small>
                                            )}
                                        </div>
                                        <div className="md-form form-sm">
                                            <i className="fas fa-envelope prefix"></i>
                                            <input
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter Email"
                                                type="email"
                                                className="form-control form-control-sm validate"
                                            />
                                            {err.includes("email") && (
                                                <small className="text-danger">{err}</small>
                                            )}
                                        </div>
                                        <div className="md-form form-sm">
                                            <i className="fas fa-lock prefix"></i>
                                            <input
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Enter Password"
                                                type="password"
                                                className="form-control form-control-sm validate"
                                            />
                                            {err.includes("password") && (
                                                <small className="text-danger">{err}</small>
                                            )}
                                        </div>
                                        <div className="text-center form-sm">
                                            <button
                                                onClick={handleRegister}
                                                className="btn btn-success"
                                            >
                                                Sign up
                      </button>
                                            {!err.includes("email") &&
                                                !err.includes("password") &&
                                                !err.includes("name") && (
                                                    <small className="text-danger">{err}</small>
                                                )}
                                        </div>
                                        <div className="text-center text-secondary">
                                            OR sign with:
                    </div>
                                        <div className="text-center mt-2">
                                            <GoogleLogin
                                                clientId="25593677194-7vebfmo92m96cc9pg0rcjhgdjm5aq04p.apps.googleusercontent.com"
                                                buttonText="SIGN WITH GOOGLE"
                                                onSuccess={responseGoogle}
                                                onFailure={responseGoogle}
                                                className="px-5 mb-3"
                                            />
                                            <FacebookLogin
                                                appId="377334713463686"
                                                autoLoad={false}
                                                buttonText=""
                                                callback={responseFaceBook}
                                                icon="fa-facebook"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const useThrottle = (value, wait) => {
    const [throttledValue, setThrottledValue] = useState(value)
    const lastCall = useRef(Date.now())

    useEffect(() => {
        if (Date.now() - lastCall.current > wait) {
            lastCall.current = Date.now()
            setThrottledValue(value)
        }
    }, [value, wait])

    return throttledValue
}