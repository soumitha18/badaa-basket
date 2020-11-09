import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { editing } from '../../Redux/AuthReducer/action'

export const ProductItem = () => {

    const data = JSON.parse(localStorage.getItem("product"))
    const [size, setSize] = useState(data.size[0])
    const [index, setIndex] = useState(0)
    const [val, setVal] = useState(1)
    const user = useSelector(state => state.auth.user)
  
    const dispatch = useDispatch()

    const handleClick = (i) => {
        setIndex(i)
        setSize(data.size[i])
    }

    const handleFetch = e => {
        console.log(e.target.id)
    }

    const discountedPrice = ((Number(data.mrp[index]) * (100 - Number(data.offer))) / 100).toFixed(2)
    const handleBasket = () => {
        const basket = {
            ...data,
            size: size,
            mrp: discountedPrice,
            quantity: val
        }
        user.basket.push(basket)
        dispatch(editing(user))
    }

    return (
        <div className="container">
            <div className="row text-muted">
                <div className="col-10">
                    <small>
                        <Link to="/" className="text-muted" >Home</Link>{` > ${data.category} > ${data.subCategory} > ${data.brandName} > ${data.productName}`}
                    </small>
                </div>
                <div className="col-2">
                    Share On <img src="https://www.flaticon.com/svg/static/icons/svg/145/145802.svg" alt="faceBook" width="20px" />
                    <img src="https://www.flaticon.com/svg/static/icons/svg/145/145812.svg" className="ml-1" alt="Twitter" width="20px" />
                    <img src="https://as2.ftcdn.net/jpg/02/76/20/05/500_F_276200518_j4wG6McWWgtJLaC9q4OxPRAfTdrbiMtH.jpg" className="ml-1" alt="Email" width="25px" />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-3 border-right" onClick={(e) => handleFetch(e)}>
                    <div className=" border-bottom mt-3">
                        <span className="border-bottom border-success">Category</span>
                    </div>
                    <div>
                        <small className={data.category === "Fruits and Vegetables" ? "text-success" : null}>Fruits and Vegetables</small>
                        <div className="ml-3">
                            <small id="Fresh vegetables" className={data.subCategory === "Fresh vegetables" ? "text-success" : null}>Fresh vegetable</small><br />
                            <small id="Herbs and seasonings" className={data.subCategory === "Herbs and seasonings" ? "text-success" : null}>Herbs and seasonings</small><br />
                            <small id="Fresh fruits" className={data.subCategory === "Fresh fruits" ? "text-success" : null}>Fresh fruits</small><br />
                            <small id="Organic Fruits and Vegetable" className={data.subCategory === "Organic Fruits and Vegetable" ? "text-success" : null}>Organic fruits and vegetable</small>
                        </div>
                    </div>
                    <div>
                        <small className={data.category === "Foodgrains, oils & Masala" ? "text-success" : null}>Foodgrains Oil and Masala</small>
                        <div className="ml-3">
                            <small id="Rice & rice products" className={data.subCategory === "Rice & Rice Products" ? "text-success" : null}>Rice & rice products</small><br />
                            <small id="Dry fruits" className={data.subCategory === "Dry fruits" ? "text-success" : null}>Dry fruits</small><br />
                            <small id="Masala" className={data.subCategory === "Masala" ? "text-success" : null}>Masala</small><br />
                            <small id="Salt, sugar & Jaggery" className={data.subCategory === "Salt, sugar & Jaggery" ? "text-success" : null}>Salt, sugar and Jaggery</small>
                        </div>
                    </div>
                    <div>
                        <small>Bakery , cakes and Dairy</small>
                        <div className="ml-3">
                            <small> Bread & bun</small><br />
                            <small>Icecream and desert</small><br />
                            <small> Cookies</small><br />
                            <small>Bakery snacks</small>
                        </div>
                    </div>
                    <div>
                        <small>Beverage & Drinks</small>
                        <div className="ml-3">
                            <small>Healthy drink and supplements</small><br />
                            <small>Tea & coffee</small><br />
                            <small>Energy and soft drinks</small><br />
                            <small>Fruit Juice</small>
                        </div>
                    </div>
                    <div className=" border-bottom">
                        <span className="border-bottom border-success">Brand</span>
                    </div>
                    <div>
                        <small className="text-success">{data.brandName}</small>
                    </div>
                </div>
                <div className="col-4 text-center  border-right">
                    <img src={data.imageUrl} alt="productImage" width="90%" />
                </div>
                <div className="col-5 border-right mt-3">
                    <small className="border-bottom border-dark">{data.brandName}</small>
                    <h5 className="mt-1 mb-3">{data.productName} - {size}</h5>
                    <small className="text-muted">MRP.<em style={{ textDecoration: "line-through" }}>Rs. {data.mrp[index]}</em> <b className="text-dark">Price: Rs.{discountedPrice}</b> <b className="text-danger">you save : {data.offer}%</b> (including all taxes) </small><br />
                    <span className="px-1 text-light" style={{ background: "#14a043" }}><small>{data.ratings}</small> <img src="https://www.flaticon.com/svg/static/icons/svg/1828/1828884.svg" alt="star" width="12px" /></span> {data.reviews} Reviews
                    <div className="mt-3 row mb-1">
                        <input type="text" value={val} onChange={e => setVal(e.target.value)} className="form-control col-2 ml-4 mt-1 p-4" />
                        <button className="btn btn-success col-5 mx-3" onClick={handleBasket}>ADD TO BASKET</button>
                        <button className="btn col-3 border-success">SAVE</button>
                    </div>
                    <small className="text-muted">Express: Today 5:00PM - 7:00PM</small>
                    <div>
                        <small>Pack Size</small>
                        {
                            data.size && data.size.map((item, i) => (
                                <div key={i} className={`row mt-3 rounded border ${index === i ? "border-success" : null}`} onClick={() => handleClick(i)}>
                                    <div className="col-3 p-2">
                                        {item}
                                    </div>
                                    <div className="col-7 p-2">
                                        <small className="text-muted">Rs.{discountedPrice} MRP:<em style={{ textDecoration: "line-through" }}>Rs. {data.mrp[i]}</em> <b className="text-danger">{data.offer}% Off</b></small>
                                    </div>
                                    <div className="col-2 float-right pl-5 pt-2">
                                        <img src={index === i ? "https://www.flaticon.com/svg/static/icons/svg/845/845646.svg" : "https://www.flaticon.com/svg/static/icons/svg/594/594852.svg"} alt="select" width={index === i ? "25px" : "20px"} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <h3>{data.productName} - {data.brandName}</h3>
                <hr />
                <p className="text-muted">About Product</p>
                <small>{data.description}</small>
            </div>
            <div className="my-4">
                <h3>Rating and Reviews</h3>
                <div className="p-1 text-light" style={{ background: "grey" }}>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/2389/2389220.svg" alt="reviews" width="15px" /> Only customers who purchase this product from bigbasket can rate and review
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className="border-left border-bottom px-5 py-3">
                            <h2 className="text-success">{data.ratings} <small>Stars</small></h2>
                            <small>{data.reviews} Reviews</small>
                            <hr />
                        </div>
                    </div>
                    <div className="col-9 border-left py-4">
                        <h5>Product Reviews</h5>
                        <hr />
                        <div className="border">
                            {
                                data.reviewList && data.reviewList.map((item, i) => (
                                    <div key={i} className="p-5 border">
                                        <h5>{item.text}HEllow</h5>
                                        <small className="text-muted">{item.user}fasdlifjks</small>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
