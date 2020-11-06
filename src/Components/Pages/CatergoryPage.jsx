import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from './ProductCard'

export const CategoryPage = () => {
    const data = JSON.parse(localStorage.getItem("product"))
    const [product, setProduct] = useState([])

    const handleFetch = e => {
        console.log(e.target.id)
    }

    return (
        <div className="container">
            <div className="row text-muted">
                <div className="col-12">
                    <small>
                        <Link to="/" className="text-muted" >Home</Link>{` > ${data.category} > ${data.subCategory}`}
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
                <div className="col-10 d-flex flex-wrap">
                    <div className="row">
                        {product && product.map((item, i) => <div className="col-3 px-1  m-0"><ProductCard key={i} prod={item} /></div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
