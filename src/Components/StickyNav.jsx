import React from "react";
import "./styles/navbar.modules.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getSearchProduct } from "../Redux/ProductReducer/action"
import { SearchProductCard } from "./Pages/SearchProductCard";
import { BasketCard } from "./Pages/BasketCard"
import Axios from "axios";

export const StickyNav = () => {
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

    const isAuth = useSelector((state) => state.auth.isAuth);
    const user = useSelector((state) => state.auth.user);
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

    if (history.location.pathname === "/checkout") {
        return null
    }
    return (
        <div className="container-fluid m-0 p-0 sticky-top bg-white shadow">
            <div className="container py-0 my-0">
                <div className="row">
                    <div className="col-1 ">
                        <Link to="/">
                            <img
                                src="https://www.bbassets.com/static/v2344/uiv2/images/BB.png"
                                className="img-fluid py-2 mt-1"
                                alt="bada"
                                width="80%"
                            />
                        </Link>
                    </div>
                    <div className="col-1 mt-4 hoverDiv">
                        <span>SHOP</span><i className="fas fa-caret-down pl-2"></i>
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
                    <div className="col-8">
                        <div className="row" style={{ clear: "both" }}>
                            <div className="col-12">
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
                                    }{
                                        data && data.length === 0 && <div className="card p-2 mr-2 border-danger border-top-0 text-center"><small>No Items</small></div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div
                            className="card ml-2 pl-3 py-1 pr-2 border-0"
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
                                        <div>
                                            {
                                                isAuth && user.basket.length !== 0 && <div className="p-2 mx-2" style={{ background: "whitesmoke" }}>
                                                    <div className="row">
                                                        <div className="col-7 mr-0 pr-1 pt-1">
                                                            <div className="bg-white p-1 text-muted text-center"><small>**Actual Delivery Charges computed at checkout</small></div>
                                                        </div>
                                                        <div className="col-5 ml-0 pl-1">
                                                            <div className="bg-white p-2">
                                                                <p className="p-0 m-0"><small>Sub Total: <span className="float-right">Rs.{(user.basket.reduce((total, item) => total + Number(item.mrp) * Number(item.quantity), 0)).toFixed(2)}</span></small></p>
                                                                <p className="p-0 m-0"><small>Delivery Charge: <span className="float-right">**</span></small></p>
                                                            </div>
                                                            <div className="bg-success p-1 mt-1 text-center text-white">
                                                                <small><Link className="text-white" to="/my-account/basket">View Basket & Checkout</Link></small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
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