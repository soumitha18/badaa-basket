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
import { auth, login, signUp, logout } from "../Redux/AuthReducer/action";
import { getSearchProduct } from "../Redux/ProductReducer/action"
import { getLocation } from "../Redux/LocationReducer/action"
import { SearchProductCard } from "./Pages/SearchProductCard";
import { BasketCard } from "./Pages/BasketCard"
import Axios from "axios";

export const NavBar = () => {
    const [location, setLocation] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [search, setSearch] = useState("")
    const [status, setStatus] = useState(true)

    const dispatch = useDispatch();
    const history = useHistory()

    const [categoryState, setCategoryState] = useState("FV")
    const [subCategoryState, setSubCategoryState] = useState(0)
    const subCategoryObj = {
        FV: ["Fresh Vegetables", "Herbs & Seasonings", "Fresh Fruits", "Organic Fruits & Vegetables", "Exotic Fruits & Veggies", "Cuts & Sprouts", "Flowers Bouquets, Bunches"],
        FOM: ["Dals & Pulses", "Atta, Flours & Sooji", "Rice & Rice Product", "Edible Oils & Gees", "Masalas & Spices", "Organics Staples", "Dry Fruits"],
        BCB: ["Dairy", "Ice Cream & Desserts", "Breads & Buns", "Gourmet Bread", "Cookies, Rusk & Khari", "Cakes & Pastries", "Bakery Snacks"],
        B: ["Tea", "Energy & Soft Drinks", "Water", "Coffee", "Fruits Juice & Drinks", "Health Drink, Supplement"],
        SB: ["Chocolates & Candies", "Noodles,Pasta & Vermicelli", "Biscuits & Cookies", "Spreads, Sauces, Ketchup", "Breakfast Cereals", "Frozen Veggies & Snacks", "Ready To Cook & Eat", "Snacks & Namkeen", "Pickels & Chutney", "Indian Mithai"],
        BH: ["Makeup", "Health & Medicine", "Oral Care", "Feminine", "Bath & Hand Wash", "Hair Care", "Men's Grooming", "Skin Care", "Fragrances & Deos"],
        CH: ["Detergents & DishWash", "All Purpose Cleaners", "Car & Shoes Care", "Stationery", "Fresheners & Repellents", "Disposables, Garbage Bags", "Mops, Brushes & Scrubs", "Pooja Needs", "Bins & Bathrooms Ware", "Party & Festival Needs"],
        KGP: ["Appliances & Electricals", "Pet Food & Accessories", "Cookware & Non Stick", "Kitchen Accessories", "Bakeware", "Gardening", "Flask"],
        EMF: ["Eggs", "Poultry", "Fish & SeaFish", "Mutton & Lamb", "Marinades", "Other Meats"],
        GW: ["Oils", "Dairy & Cheese", "Cooking & Baking Needs", "Chocolates", "Pasta & Soup", "Cereals & Breakfast"],
        BC: ["Diapers", "Baby Food & Formula", "Baby Bath & Hygiene", "Mothers & Maternity", "Feeding & Nursing", "Baby Accessories"],
        ALL: []
    }
    const images = {
        FV: "https://www.bigbasket.com/media/uploads/banner_images/NNP6785-NNP6792-30oct20.jpg",
        FOM: "https://www.bigbasket.com/media/uploads/banner_images/NPL5137-40-4nov20.jpg",
        BCB: "https://www.bigbasket.com/media/uploads/banner_images/L1-NPL4584-220x460-6thnov.jpg",
        B: "https://www.bigbasket.com/media/uploads/banner_images/L1-NPL4636-220x460-6thnov.jpg",
        SB: "https://www.bigbasket.com/media/uploads/banner_images/L1-NPL4637-220x460-6thnov.jpg",
        BH: "https://www.bigbasket.com/media/uploads/banner_images/NB-NNP6286-220x460-28thoct.jpg",
        CH: "https://www.bigbasket.com/media/uploads/banner_images/L1-NPL4581-220x460-6thnov.jpg",
        KGP: "https://www.bigbasket.com/media/uploads/banner_images/NNP2912-220X220-4thnov.jpg",
        EMF: "https://www.bigbasket.com/media/uploads/banner_images/L1-NPL4586-220x460-6thnov.jpg",
        GW: "https://www.bigbasket.com/media/uploads/banner_images/NPL5020-22-27oct20.jpg",
        BC: "",
        ALL: ""
    }

    const productObj = {
        FV: [
            ["Potato", "Onion", "Tomato", "Cucumber & Capsicum", "Beans, Brinjals & Okra", "Gourd, Pumpkin, Drumstick", "Leafy Vegetables", "Root Vegetables", "Cabbage & Cauliflower", "Specialty"],
            ["Lemon, Ginger & Garlic", "Indian & Exotic Herbs"],
            ["Mangoes", "Kiwi, Melon, Citrus Fruit", "Seasonal Fruits", "Banana, Sapota & Papaya", "Apples & Pomegranate"],
            ["Organic Vegetables", "Organic Fruits"],
            ["Exotic Fruits", "Exotic Vegetables"],
            []
        ],
        FOM: [
            ["Toor Channa & Moong Dal", "Urad & Other Dals", "Cereals & Millets"],
            ["Sooji, Maida & Besan", "Atta Whole Wheat", "Rice & others Flour"],
            ["Sugar & Jaggery", "Salts", "Sugarfree Sweeteners"],
            ["Basmati Rice", "Raw Rice"],
            ["Soya & Mustard Oils", "Ghee & Vanaspati"]
        ],
        BCB: [
            ["Milk", "CUrd", "Butter & Margarine", "Buttermilk & Lassi", "Condensed, Powdered Milk", "Paneer, Tofu & Cream", "Chees", "Flavoured, soya Milk", "Yogurt & Shrnkhand"],
            ["Milk,WHite & Sandwich", "Brown, Wheat & Miltigrain", "Buns, Pavs & Pizza Base"],
            ["Chees & Garlic Bread", "Breadcrumbs & Croutons", "Bread Sticks & Lavash"],
            ["Rusks", "Bakery Biscuitsn, Cookies", "Khari & Cream Rolls", "Premium Cookies"],
            ["Tea Cakes & Slice Cakes", "Muffins & Cup Cakes", "Birthday & Party Cakes", "Pastrues & Brownies"],
            ["Ice Creams"],
            ["Gourmet Bread", "panini, Focaccia & Pita", "Croissants,Bagels", "Bagels & Baguette"]
        ],
        B: [
            ["Kids(5+Yrs)", "Diabetic Drinks", "Children(2-5 Yrs)", "Men & Women", "Glucose Powder, Tablets"],
            ["Packaged Water", "Spring Water"],
            ["Soda & Cocktail Milk", "Cold Drinks", "Sports & Energy Drinks", "Non Alcoholic Drinks"],
            ["Leaf & Dust Tea", "Green Tea", "Exotic & Flavoured Tea", "Tea Bags"],
            ["Instant Coffee", "Ground Coffee"],
            ["Unsweetened, Cold Press", "Juices", "Syrups & Concentrates"]
        ],
        SB: [
            ["Chocolates", "Toffee, Candy & Lollypop", "Mints & Chewing Gum", "Gift Boxes"],
            ["Instant Noodles", "Cup Noodles", "Instant Pasta", "Vermicell", "Hakka Noodles", "Pasta & Marcaroni"],
            ["Marie, Health, Digestive", "Salted Biscuits", "Cream Biscuits & Wafers", "Glucose & Milk Biscuits", "Coockies"],
            ["Oats & Porridge", "Kids Cereal", "Flakes", "Muesli", "Granola & Cereal Bars"],

        ],
        BH: [
            ["Face", "Nails", "Makeup Accessories", "Eyes", "Lips", "Makeup Kits & Gifts Sets"],
            ["Sanitary Napkins", "Intimate Wash & Care", "Panty Liners", "Hair Removal", "Tampons & Menstrual Cups"],
            ["Mouthwash", "Toothpaste", "Toothbrush", "Floss & Tongue Cleaner"]
        ],
        CH: [
            ["Dishwash Liquids & Pastes", "DishwashBars & Powders", "Detergent Powder, Liquid", "Fabric Pre, Post Wash", "Detergent Bars"],
            ["Disinfectant Spray & Cleaners", "Toliet Cleaners", "Floor & Other Cleaners", "Kitchen, Glass & Drain", "Metal, Furniture Cleaner", "Imported Cleaners"],
            ["Wet Wipe, Pocket Tissues", "Kitchen Rolls", "Garbage Bags", "Toilet Paper", "Aluminium Foil, Clingwrap", "Paper Napkin, Tissue Box"]
        ],
        KGP: [
            ["Battery & Electrical", "CFL & Led Bulbs"],
            ["Lighters", "Knives & Peelers", "Choppers & Graters", "Kitchen Tools & Other Accessories", "Strainer,Ladle,Spatula"],
            ["Pet Meals & Treats", "Pet Toys", "Pet Collars & Leashes", "Pet Cleaning & Grooming", "Pet Feefing Support"]
        ],
        EMF: [
            ["Farm Eggs", "Organic Eggs", "Protien Eggs", "Country Eggs"],
            ["Frozen Chicken", "Fresh Chicken", "Turkey"],
            ["Chicken Sausagas", "Lamb", "Turley & Duck", "Pork & Ham"]
        ],
        GW: [
            ["Extra Virgin Olive Oil", "Pure, Pomace Olive Oil", "Canola & Rapeseed Oil", "Balsamic & Cider Vinegar", "Organic & Cold Press Oil", "Regular & White Vinegar", "Wine & Rice Vinegar"],
            ["Flavoured & Greeks Yogurt", "Tofu", "International Cheese", "Creame & Cheese Spreads", "Milk & Soya Drinks", "Gourmet Ice Creame", "Butter & Cream"],
            ["Pastas & Spaghetti", "Imported Noodles", "Jasmine & Sushi Rice", "Imported Soups"]
        ],
        BC: [
            ["Diapers", "Baby Wipes", "Nappies & Rash Cream"],
            ["Inant Formula", "Baby Food", "Organic Baby Food"],
            ["Baby Oil & Shampoo", "Baby Bath", "Baby Powder", "Baby Laundry", "Baby Creams & Lotions", "Baby Health", "Baby Buds", "Baby Oral Care", "Baby Gifts Sets"]
        ]
    }
    const productObjItem = productObj[categoryState]

    const locations = useSelector(state => state.location.locations)
    const isAuth = useSelector((state) => state.auth.isAuth);
    const user = useSelector((state) => state.auth.user);
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

    useEffect(() => {
        localStorage.setItem("userProfile", JSON.stringify(user))
    }, [user])

    const handleClick = (item) => {
        localStorage.setItem("product", JSON.stringify(item))
        history.push(`/product-item/${item.productName}`)
        setStatus(false)
        setSearch("")
    }

    const handleClickCategory = (e) => {
        if (e.target.id === "") {
            return
        }
        const [data, title] = e.target.id.split(":")
        if (title === "productName") {
            Axios.get(`http://localhost:5000/getproducts?${title}=${data}`)
                .then(res => {
                    localStorage.setItem("product", JSON.stringify(res.data[0]))
                    history.push(`/product-item/${data}`)
                })
                .catch(err => console.log(err))
        }
        else {
            localStorage.setItem("title", JSON.stringify(title))
            localStorage.setItem("data", JSON.stringify(data))
            const path = `${title}/${data}`
            history.push(`/product/${path}`)
        }
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

    const handleLogout = () => {
        dispatch(logout())
    }

    const empty = () => {
        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div className="container">
            <div className="row">
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
                            <div className="position-absolute pr-2 text-left" style={{ zIndex: "10", width: "100%", minHeight: "0px", maxHeight: "330px", overflowY: "scroll", display: status ? "block" : "none" }}>
                                {
                                    data && data.map((item, i) => (
                                        <SearchProductCard key={i} item={item} i={i} handleClick={handleClick} />
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
                    <div className={`text-center ${isAuth ? "userHover" : null} `}>
                        <small data-toggle={isAuth ? null : "modal"} data-target={isAuth ? null : "#modalLRForm"}>
                            <i className="fa fa-user text-muted pr-1"></i>
                            {isAuth ? <Link to="/my-account/profile" className="text-dark text-center">{user.name}</Link> : " login | sign up"}
                        </small>
                        <small>
                            <div className="userHover-content">
                                <Link to="/my-account/profile" className="px-2 py-1 border-bottom">My Account</Link>
                                <Link to="/my-account/basket" className="px-2 py-1 border-bottom">My Basket<span className="float-right font-weight-bolder">{user.basket && user.basket.length} item</span></Link>
                                <Link to="/my-account/orders" className="px-2 py-1 border-bottom">My Orders</Link>
                                <Link to="/bb-star" className="px-2 py-1 border-bottom">My MemberShip</Link>
                                <Link to="/my-account/wallet" className="px-2 py-1 border-bottom">Wallet<span className="float-right font-weight-bolder">Rs. {user.wallet}</span></Link>
                                <Link to="/my-account/ask-us" className="px-2 py-1 border-bottom">Ask US</Link>
                                <Link to="/my-account/customer-service" className="px-2 py-1 border-bottom">Customer Service</Link>
                                <div onClick={handleLogout} className="px-2 py-1">Logout</div>
                            </div>
                        </small>
                    </div>
                    <div
                        className="card ml-2 mt-2 pl-3 py-2 pr-2 border-0"
                        style={{ background: "whitesmoke" }}
                    >
                        <div className="row">
                            <div className="col-4">
                                <i className="fa fa-shopping-basket fa-2x pt-2" style={{ color: "red" }}></i>
                            </div>
                            <div className="col-8 cartHover">
                                <small>My Basket <b className="text-success">{(user.basket && user.basket.length) || 0}</b> items</small>
                                <div className="cartInnerHover">
                                    <div>
                                        {
                                            user.basket && user.basket.map((item, i) => <BasketCard key={i} index={i} item={item} />)
                                        }{
                                            (!user.name || (user.basket && user.basket.length === 0)) && <div className="m-3 p-4 text-center text-muted"><small>Your Basket is Empty! Start Shopping Now!</small></div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-2 shopBy p-1  hoverDiv">
                    <small><b>SHOP BY CATEGORY</b></small> <i className="fas fa-caret-down pl-2 float-right"></i>
                    <div className="innerHoverDiv" onClick={(e) => handleClickCategory(e)}>
                        <div style={{ display: 'flex', flexDirection: "row" }}>
                            <div className="category">
                                <p onMouseOver={() => setCategoryState("FV")} style={{ background: categoryState === "FV" ? "whitesmoke" : null }}><small id="Fruits and vegetables:category">Fruits & Vegetables</small></p>
                                <p onMouseOver={() => setCategoryState("FOM")} style={{ background: categoryState === "FOM" ? "whitesmoke" : null }}><small id="Foodgrains, Oils and Masala:category">Foodgrains, Oil & Masala</small></p>
                                <p onMouseOver={() => setCategoryState("BCB")} style={{ background: categoryState === "BCB" ? "whitesmoke" : null }}><small id="Bakery, Cakes & Dairy:category">Bakery, Cakes & Dairy</small></p>
                                <p onMouseOver={() => setCategoryState("B")} style={{ background: categoryState === "B" ? "whitesmoke" : null }}><small id="Beverages:category">Beverages</small></p>
                                <p onMouseOver={() => setCategoryState("SB")} style={{ background: categoryState === "SB" ? "whitesmoke" : null }}><small id="Snacks & Branded Foods:category">Snacks & Branded Foods</small></p>
                                <p onMouseOver={() => setCategoryState("BH")} style={{ background: categoryState === "BH" ? "whitesmoke" : null }}><small id="Beauty & Hygiene:category">Beauty & Hygiene</small></p>
                                <p onMouseOver={() => setCategoryState("CH")} style={{ background: categoryState === "CH" ? "whitesmoke" : null }}><small id="Cleaning & Household:category">Cleaning & Household</small></p>
                                <p onMouseOver={() => setCategoryState("KGP")} style={{ background: categoryState === "KGP" ? "whitesmoke" : null }}><small id="Kitchen, Garden & Pets:category">Kitchen, Garden & Pets</small></p>
                                <p onMouseOver={() => setCategoryState("EMF")} style={{ background: categoryState === "EMF" ? "whitesmoke" : null }}><small id="Eggs, Meat & Fish:category">Eggs, Meat & Fish</small></p>
                                <p onMouseOver={() => setCategoryState("GW")} style={{ background: categoryState === "GW" ? "whitesmoke" : null }}><small id="Gourmet & World Food:category">Gourmet & World Food</small></p>
                                <p onMouseOver={() => setCategoryState("BC")} style={{ background: categoryState === "BC" ? "whitesmoke" : null }}><small id="Baby Care:category">Baby Care</small></p>
                                <p onMouseOver={() => setCategoryState("ALL")} style={{ background: categoryState === "ALL" ? "whitesmoke" : null }}><small id="all">View All</small></p>
                            </div>
                            <div className="subCategory">
                                <div>
                                    {
                                        subCategoryObj[categoryState] && subCategoryObj[categoryState].map((item, i) => <p onMouseOver={() => setSubCategoryState(i)} style={{ background: subCategoryState === i ? "white" : null }} key={i}><small id={`${item}:subCategory`}>{item}</small></p>)
                                    }
                                </div>
                            </div>
                            <div className="product">
                                <div>
                                    {
                                        productObjItem && productObjItem[subCategoryState] && productObjItem[subCategoryState].map((item, i) => <p key={i}><small id={`${item}:productName`}>{item}</small></p>)
                                    }
                                </div>
                            </div>
                            <div className="image">
                                {
                                    images[categoryState] && <img src={images[categoryState]} alt={categoryState} width="100%" />
                                }
                            </div>
                        </div>
                    </div>
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
                                        <i className="fas fa-user mr-1"></i>Login</div>
                                </li>
                                <li className="nav-item">
                                    <div
                                        className="nav-link"
                                        data-toggle="tab"
                                        href="#panel8"
                                        role="tab"
                                    >
                                        <i className="fas fa-user-plus mr-1"></i>Register</div>
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
                                            <button onClick={handleLogin} className="btn btn-success">Log in</button>
                                            {!err.includes("email") && !err.includes("password") && (
                                                <small className="text-danger">{err}</small>
                                            )}
                                        </div>
                                        <div className="text-center text-secondary">OR sign with:</div>
                                        <div className="text-center mt-2" data-dismiss="modal">
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
                                            >Sign up</button>
                                            {!err.includes("email") &&
                                                !err.includes("password") &&
                                                !err.includes("name") && (
                                                    <small className="text-danger">{err}</small>
                                                )}
                                        </div>
                                        <div className="text-center text-secondary">OR sign with:</div>
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