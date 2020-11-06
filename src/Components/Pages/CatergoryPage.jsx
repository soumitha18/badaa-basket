import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from './ProductCard'

export const CategoryPage = () => {
    const data = JSON.parse(localStorage.getItem("data"))
    const title = JSON.parse(localStorage.getItem("title"))
    const [product, setProduct] = useState([])

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
                        <small>Fruits and Vegetables</small>
                        <div className="ml-3">
                            <small id="Fresh vegetables">Fresh vegetable</small><br />
                            <small id="Herbs and seasonings">Herbs and seasonings</small><br />
                            <small id="Fresh fruits">Fresh fruits</small><br />
                            <small id="Organic Fruits and Vegetable">Organic fruits and vegetable</small>
                        </div>
                    </div>
                    <div>
                        <small>Foodgrains Oil and Masala</small>
                        <div className="ml-3">
                            <small id="Rice & rice products">Rice & rice products</small><br />
                            <small id="Dry fruits">Dry fruits</small><br />
                            <small id="Masala">Masala</small><br />
                            <small id="Salt, sugar & Jaggery">Salt, sugar and Jaggery</small>
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
                        <small className="text-success">{data}</small>
                    </div>
                </div>
                <div className="col-10">
                    <div className="row">
                        {product && product.map((item, i) => <div className="col-3 px-1 m-0"><ProductCard key={i} prod={item} /></div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
