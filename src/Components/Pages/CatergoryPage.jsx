import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from './ProductCard'

export const CategoryPage = () => {
    const data = JSON.parse(localStorage.getItem("data"))
    const title = JSON.parse(localStorage.getItem("title"))
    const [product, setProduct] = useState([])
    let list = []
    if(data==="Fruits and vegetables"){
        list = ["Fresh Vegetables", "Herbs & Seasonings", "Fresh Fruits", "Organic Fruits & Vegetables", "Exotic Fruits & Veggies", "Cuts & Sprouts", "Flowers Bouquets, Bunches"]
    }
    if(data==="Foodgrains, Oils and Masala"){
        list = ["Dols & Pulses", "Atta, Flours & Sooji", "Rice & Rice Product", "Edible Oils & Gees", "Masalas & Spices", "Organics Staples", "Dry Fruits"]
    }
    console.log(list)
    useEffect(() => {
        console.log(title, data)
        Axios.get(`http://localhost:5000/getproducts?${title}=${data}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [title, data])

    const handleFetch = e => {
        console.log(e.target.id)
    }

    return (
        <div className="container">
            <div className="row text-muted">
                <div className="col-12">
                    <small>
                        <Link to="/" className="text-muted" >Home</Link>{` > ${title} > ${data}`}
                    </small>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-12">
                    <div
                        id="carouselExampleIndicators"
                        className="carousel slide p-0 m-0"
                        data-ride="carousel"
                    >
                        <ol className="carousel-indicators">
                            <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to="0"
                                className="active"
                            ></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src="https://www.bigbasket.com/media/uploads/banner_images/L1-NNP5767-1200x300-14thoct.jpg"
                                    className="d-block w-100 img-fluid"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://www.bigbasket.com/media/uploads/banner_images/L1-NNP5722-1200x300-14thoct.jpg"
                                    className="d-block w-100 img-fluid"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://www.bigbasket.com/media/uploads/banner_images/L1-NNP5740-1200x300-14thoct.jpg"
                                    className="d-block w-100 img-fluid"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 my-3">
                    <img src="https://www.bigbasket.com/media/uploads/flatpages/test-1/Fruits%20&%20vegetables.jpg" className="img-fluid" alt="" />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-2 border-right" onClick={(e) => handleFetch(e)}>
                    <div className=" border-bottom mt-3">
                        <span className="border-bottom border-success">Category</span>
                    </div>
                    <div>
                        <small>{data}</small>
                        <div className="ml-3">
                            {list && list.map(item=> <><small id={item}>{item}</small><br/></>)}
                        </div>
                    </div>
                    <div className=" border-bottom">
                        <span className="border-bottom border-success">Brand</span>
                    </div>
                    <div>
                        <small className="text-success">{data}</small>
                    </div>
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-12 my-3 d-flex justify-content-between">
                            <h4>{data}</h4>
                            <select name="" id=""  className="text-secondary">
                                <option value="">Popularity</option>
                                <option value="">Price- Low to High</option>
                                <option value="">Price- High to Low</option>
                                <option value="">Alphabetical</option>
                                <option value="">Rupee Saving - Low to High</option>
                                <option value="">Rupee Saving - High to Low</option>
                            </select>
                        </div>
                        {product && product.map((item, i) => <div className="col-3 px-1 m-0"><ProductCard key={i} prod={item} /></div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
