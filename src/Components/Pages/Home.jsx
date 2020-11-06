import React, { useState, useEffect } from "react";
import "../styles/home.modules.css";
import { ProductCard } from "./ProductCard";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { getAllProduct } from "../../Redux/ProductReducer/action";

export const Home = () => {
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const product = useSelector(state => state.product.productData)

    useEffect(() => {
        dispatch(getAllProduct())
    }, [])

    useEffect(() => {
        setData(product)
    }, [product])

    return (
        <div>
            <div className="container-fluid">
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
                                src="https://www.bigbasket.com/media/uploads/banner_images/HP-NTP2465-1600x460-1stnov.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://www.bigbasket.com/media/uploads/banner_images/2011019_breakfast-store_460.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://www.bigbasket.com/media/uploads/banner_images/2011226_guavas-oranges_460_Noida.jpg"
                                className="d-block w-100"
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
            <div className="container my-5">
                <div className={`row`}>
                    <div className="col-2 p-2">
                        <div className="card  cartColor text-center ">
                            <img src="https://www.bigbasket.com/media/uploads/banner_images/All_Home-Kitchen_DT_1_190x60_25thOct.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-2 p-2">
                        <div className="card cartColor   text-center ">
                            <img src="https://www.bigbasket.com/media/uploads/banner_images/All_EggsMeatFish_DT_2_190x60_25thOct.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-2 p-2">
                        <div className="card  cartColor  text-center">
                            <img src="https://www.bigbasket.com/media/uploads/banner_images/All_BeautyStore_DT_3_190x60_25thOct.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-2 p-2">
                        <div className="card cartColor  text-center">
                            <Link to="/bb-star" ><img src="https://www.bigbasket.com/media/uploads/banner_images/All_bbStar_DT_4_190x60_25thOct.jpg" className="img-fluid" alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-2 p-2">
                        <div className="card cartColor text-center ">
                            <img src="https://www.bigbasket.com/media/uploads/banner_images/All_ComboStore_DT_5_190x60_25thOct.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-2 p-2">
                        <div className="card  cartColor text-center ">
                            <img src="https://www.bigbasket.com/media/uploads/banner_images/All_DOW_DT_6_190x60_25thOct.jpg" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div id="carouselExampleControls" className="carousel slide mt-3" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row my-3 px-2 d-flex flex-wrap" >

                                {data && data.filter((a, i) => i >= 0 && i < 4).map((item, i) => <div key={i} className="col-3"><ProductCard prod={item} /></div>)}

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row my-3 px-2 d-flex flex-wrap" >
                                {data && data.filter((a, i) => i >= 4 && i < 8).map((item, i) => <div key={i} className="col-3"><ProductCard prod={item} /></div>)}
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only text-danger">Next</span>
                    </a>
                </div>
                <div className="row my-5">
                    <div className="col-12">
                        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-interval="10000">
                                    <img src="https://www.bigbasket.com/media/uploads/banner_images/2011086_chocolate-giftpack_400.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" data-interval="2000">
                                    <img src="https://www.bigbasket.com/media/uploads/banner_images/All_EP_Diwali-Sale_400_2Nov.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" data-interval="3000">
                                    <img src="https://www.bigbasket.com/media/uploads/banner_images/All_DiwaliGM_1130x400_1stNov.jpg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12">
                        <h5 className="text-center">Bank Offers</h5>
                        <hr />
                        <div className="row">
                            <div className="col-3 mx-0">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/8f98bcdc-9a6d-48df-b65d-09c7d105e2a3/All_Citi_DT_1_480x360_1stNov.jpg" className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="col-3 mx-0">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/8f98bcdc-9a6d-48df-b65d-09c7d105e2a3/T1_All_RBL_DT_2_480x360_1stNov.jpg" className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="col-3 mx-0">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/8f98bcdc-9a6d-48df-b65d-09c7d105e2a3/T1_All_Yesbank_DT_3_480x360_1stNov.jpg" className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="col-3 mx-0">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/8f98bcdc-9a6d-48df-b65d-09c7d105e2a3/T1_All_HSBC_DT_4_480x360_1stNov.jpg" className="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12">
                        <h5 className="text-center">Most Popular</h5>
                        <hr />
                        <div className="row">
                            <div className="col-3 ">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/2eb02321-7cd8-49bc-85bd-f14f8f2b1ece/2011025_winter-skin-care_360.jpg" className="card-img-top img-fluid" alt="..." />
                                </div>
                            </div>
                            <div className="col-3 ">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/2eb02321-7cd8-49bc-85bd-f14f8f2b1ece/2011026_diyas-decor_360.jpg" className="card-img-top img-fluid" alt="..." />
                                </div>
                            </div>
                            <div className="col-3 mx-0">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/2eb02321-7cd8-49bc-85bd-f14f8f2b1ece/2011028_masks-gloves_360.jpg" className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="col-3 mx-0">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/2eb02321-7cd8-49bc-85bd-f14f8f2b1ece/2011027_sanitizers_360.jpg" className="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12">
                        <h5 className="text-center">Fruits and vegetables</h5>
                        <hr />
                        <div className="row">
                            <div className="col-6 cardImage ">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/ac41c737-d4aa-4980-8c6f-6e64b011bc7a/T1_All_Organic-Store_560x378_28thSep.jpg" className="card-img-top img-fluid" alt="..." />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-6 ">
                                        <div className="card">
                                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/ac41c737-d4aa-4980-8c6f-6e64b011bc7a/T1_All_Fruits_275x184_28thSep.jpg" className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="card">
                                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/ac41c737-d4aa-4980-8c6f-6e64b011bc7a/T1_All_Veggies_275x184_28thSep.jpg" className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-6 ">
                                        <div className="card">
                                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/ac41c737-d4aa-4980-8c6f-6e64b011bc7a/T1_All_Cuts-Sprouts_275x184_28thSep.jpg" className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="card">
                                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/ac41c737-d4aa-4980-8c6f-6e64b011bc7a/T1_All_Exotcs_275x184_28thSep.jpg" className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12">
                        <h5 className="text-center">Your Daily Staples</h5>
                        <hr />
                        <div className="row">
                            <div className="col-3 ">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/17fba1d6-96d6-4b1a-b351-1ddf064c3d12/T1_North_Atta-Flour_DT_1_480x360_25thOct.jpg" className="card-img-top img-fluid" alt="..." />
                                </div>
                            </div>
                            <div className="col-3 ">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/17fba1d6-96d6-4b1a-b351-1ddf064c3d12/T1_North_Rice-RiceProducts_DT_2_480x360_25thOct.jpg" className="card-img-top img-fluid" alt="..." />
                                </div>
                            </div>
                            <div className="col-3 mx-0">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/17fba1d6-96d6-4b1a-b351-1ddf064c3d12/T1_North_Cooking-OilsGhee_DT_3_480x360_25thOct.jpg" className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="col-3 mx-0">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/17fba1d6-96d6-4b1a-b351-1ddf064c3d12/T1_North_Salt-Sugar-Jaggery_DT_4_480x360_25thOct.jpg" className="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12">
                        <h5 className="text-center">T20 Snack Store-Up to 40% off</h5>
                        <hr />
                        <div className="row">
                            <div className="col-6 cardImage ">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/e8f0c241-b6e9-494c-9f5b-99c4bc175f67/T1_All_Chips-Namkeens_560x378_25thOct.jpg" className="card-img-top img-fluid" alt="..." />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-6 ">
                                        <div className="card">
                                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/e8f0c241-b6e9-494c-9f5b-99c4bc175f67/2011030_biscuits-cookies_184.jpg" className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="card">
                                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/e8f0c241-b6e9-494c-9f5b-99c4bc175f67/2011031_frozen-snacks-rte_184.jpg" className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-6 ">
                                        <div className="card">
                                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/e8f0c241-b6e9-494c-9f5b-99c4bc175f67/2011032_chocolates-candies_184.jpg" className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="card">
                                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/e8f0c241-b6e9-494c-9f5b-99c4bc175f67/2011034_sweets-corner_184.jpg" className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12">
                        <h5 className="text-center">Drinks & Beverages</h5>
                        <hr />
                        <div className="row">
                            <div className="col-3 ">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/68868c64-3280-48a0-8bdc-a084bbfb8d8b/2011035_tea_360.jpg" className="card-img-top img-fluid" alt="..." />
                                </div>
                            </div>
                            <div className="col-3 ">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/68868c64-3280-48a0-8bdc-a084bbfb8d8b/2011036_coffee_360.jpg" className="card-img-top img-fluid" alt="..." />
                                </div>
                            </div>
                            <div className="col-3 mx-0">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/68868c64-3280-48a0-8bdc-a084bbfb8d8b/2011038_juices-cold-drinks_360.jpg" className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="col-3 mx-0">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/68868c64-3280-48a0-8bdc-a084bbfb8d8b/2011037_health-drinks_360.jpg" className="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12">
                        <h5 className="text-center">Cleaning & Household</h5>
                        <hr />
                        <div className="row">
                            <div className="col-3 ">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/01b5040f-a959-4180-836b-49a5d0d10efe/2011049_liquid-detergents_360.jpg" className="card-img-top img-fluid" alt="..." />
                                </div>
                            </div>
                            <div className="col-3 ">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/01b5040f-a959-4180-836b-49a5d0d10efe/T1_All_disinfectant-spray-cleaners_DT_2_480x360_25thSep.jpg" className="card-img-top img-fluid" alt="..." />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/01b5040f-a959-4180-836b-49a5d0d10efe/2011050_floor-toilet_360.jpg" className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/01b5040f-a959-4180-836b-49a5d0d10efe/T1_All_Fresheners-Repellents_DT_4_480x360.jpg" className="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12">
                        <h5 className="text-center">Beauty and Hygiene</h5>
                        <hr />
                        <div className="row">
                            <div className="col-6 cardImage ">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/a76bd3a1-8753-48dc-bd41-97a47c966fb7/2011053_winter-skin-care_378.jpg" className="card-img-top img-fluid" alt="..." />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-6 ">
                                        <div className="card">
                                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/a76bd3a1-8753-48dc-bd41-97a47c966fb7/2011052_makeup-festive_184.jpg" className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="card">
                                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/a76bd3a1-8753-48dc-bd41-97a47c966fb7/2011054_deos-fragrances_184.jpg" className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-6 ">
                                        <div className="card">
                                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/a76bd3a1-8753-48dc-bd41-97a47c966fb7/2011057_antiseptic-herbal_184.jpg" className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="card">
                                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/a76bd3a1-8753-48dc-bd41-97a47c966fb7/2011059_women-wellness_184.jpg" className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12">
                        <h5 className="text-center">Home & Kitchen Essentials</h5>
                        <hr />
                        <div className="row">
                            <div className="col-2 ">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/145a6bce-3de3-49fc-9b00-db7f6fdd0718/2011043_under-rs-99_360.jpg" className="card-img-top img-fluid" alt="..." />
                                </div>
                            </div>
                            <div className="col-2 ">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/145a6bce-3de3-49fc-9b00-db7f6fdd0718/2011044_rs-100-249_360.jpg" className="card-img-top img-fluid" alt="..." />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/145a6bce-3de3-49fc-9b00-db7f6fdd0718/2011045_rs-250-399_360.jpg" className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/145a6bce-3de3-49fc-9b00-db7f6fdd0718/2011046_rs-400-599_360.jpg" className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/145a6bce-3de3-49fc-9b00-db7f6fdd0718/2011047_up-to-40-off_360.jpg" className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/145a6bce-3de3-49fc-9b00-db7f6fdd0718/2011048_40-to-70-off_360.jpg" className="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12">
                        <div id="carouselExampleInterval1" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-interval="10000">
                                    <img src="https://www.bigbasket.com/media/uploads/banner_images/All_BabyStore_DT_1_1130x400_25thOct.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" data-interval="2000">
                                    <img src="https://www.bigbasket.com/media/uploads/banner_images/All_PetStore_DT_2_1130x400_25thOct.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" data-interval="3000">
                                    <img src="https://www.bigbasket.com/media/uploads/banner_images/All_DairyStore_DT_3_1130x400_25thOct.jpg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleInterval1" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleInterval1" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12">
                        <h5 className="text-center">Brand Store</h5>
                        <hr />
                        <div className="row">
                            <div className="col-2 ">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/48d27325-80db-4e0f-98de-666a3924fc1c/All_Amul_480x360_28thSep.jpg" className="card-img-top img-fluid" alt="..." />
                                </div>
                            </div>
                            <div className="col-2 ">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/48d27325-80db-4e0f-98de-666a3924fc1c/All_Dettol_480x360_28thSep.jpg" className="card-img-top img-fluid" alt="..." />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/48d27325-80db-4e0f-98de-666a3924fc1c/All_Cocacola_480x360_28thSep.jpg" className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/48d27325-80db-4e0f-98de-666a3924fc1c/All_Loreal_480x360_28thSep.jpg" className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/48d27325-80db-4e0f-98de-666a3924fc1c/All_Patanjali_480x360_28thSep.jpg" className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="card">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/984e5725-12f8-4af1-bf0e-3d91b96c9096/48d27325-80db-4e0f-98de-666a3924fc1c/All_Durex_480x360_28thSep.jpg" className="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12">
                        <h5 className="text-center">Featured Recipes</h5>
                        <hr />
                        <div id="carouselExampleInterval2" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-interval="10000">
                                    <img src="https://www.bigbasket.com/media/uploads/banner_images/NNP6807-29oct20.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" data-interval="2000">
                                    <img src="https://www.bigbasket.com/media/uploads/banner_images/NNP6805-29oct20.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" data-interval="3000">
                                    <img src="https://www.bigbasket.com/media/uploads/banner_images/NNP6804-29oct20.jpg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleInterval2" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleInterval2" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 border border-dark">
                        <h4 className="pt-4 mt-3">bigbasket – online grocery store</h4>
                        <p>Did you ever imagine that the freshest of fruits and vegetables, top quality pulses and food grains, dairy products and hundreds of branded items could be handpicked and delivered to your home, all at the click of a button? India’s first comprehensive online megastore, bigbasket.com, brings a whopping 20000+ products with more than 1000 brands, to over 4 million happy customers. From household cleaning products to beauty and makeup, bigbasket has everything you need for your daily needs. bigbasket.com is convenience personified We’ve taken away all the stress associated with shopping for daily essentials, and you can now order all your household products and even buy groceries online without travelling long distances or standing in serpentine queues. Add to this the convenience of finding all your requirements at one single source, along with great savings, and you will realize that bigbasket- India’s largest online supermarket, has revolutionized the way India shops for groceries. Online grocery shopping has never been easier. Need things fresh? Whether it’s fruits and vegetables or dairy and meat, we have this covered as well! Get fresh eggs, meat, fish and more online at your convenience. Hassle-free Home Delivery options</p>
                        <p>We deliver to 25 cities across India and maintain excellent delivery times, ensuring that all your products from groceries to snacks branded foods reach you in time.</p>
                        <ul>
                            <li>Slotted Delivery: Pick the most convenient delivery slot to have your grocery delivered. From early morning delivery for early birds, to late-night delivery for people who work the late shift, bigbasket caters to every schedule.</li>
                            <li>Express Delivery: This super useful service can be availed by customers in cities like Bangalore, Mumbai, Pune, Chennai, Kolkata, Hyderabad and Delhi-NCR in which we deliver your orders to your doorstep in 90 Minutes.</li>
                            <li>BB Specialty stores: Missed out on buying that essential item from your favorite neighborhood store for tonight’s party? We’ll deliver it for you! From bakery, sweets and meat to flowers and chocolates, we deliver your order in 90 minutes, through a special arrangement with a nearby specialty store, verified by us.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
