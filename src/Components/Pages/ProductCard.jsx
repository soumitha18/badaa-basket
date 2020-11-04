import React, {useState} from 'react'
import '../styles/productCard.modules.css'

// const prod = {
//     "productName": "Onion",
//     "imageUrl": "https://www.bigbasket.com/media/uploads/p/l/10000148_28-fresho-onion.jpg",
//     "brandName": "Fresho",
//     "ratings": 3.2,
//     "reviews": 0,
//     "reviewList": [],
//     "subCategory": "Fresh Vegetables",
//     "category": "Fruits and vegetables",
//     "size": ["1 kg", "2 kg"],
//     "mrp": [92.50, 185],
//     "offers": 28,
//     "description": "Onion is a vegetable which is almost like a staple in Indian food. This is also known to be one of the essential ingredients of raw salads. They come in different colours like white, red or yellow and are quite in demand in cold salads and hot soups. You can dice, slice or cut it in rings and put it in burgers and sandwiches. Onions emit a sharp flavour and fragrance once they are fried; it is due to the sulphur compound in the vegetable"
// }
export const ProductCard = ({prod}) => {
    const [price, setPrice] = useState(prod.mrp[0])
    const [val, setVal] = useState(1)
    
    const handleClick = () => {
        localStorage.setItem("product", JSON.stringify(prod))
    }
    const discountedPrice = ((price*(100 -  Number(prod.offer)))/100).toFixed(2)
    console.log(prod)
    return (
        <div className="m-2 mainCard" onClick={handleClick}>
            <div class="card " style={{width: "16rem"}} >
                <img src={prod.imageUrl} class="card-img-top img-fluid px-4 pt-4" alt="productImage"/>
                {prod.offer !== 0? <button type="button" class="offer">
                    <div className="float-right pr-3">Get {prod.offer}% off</div>
                </button>: "" }
                <div class="card-body">
                    <small className="text-muted">{prod.brandName}</small>
                    <p>{prod.productName}</p>

                    <div>
                        <div className="row">
                            <div className="col-12">
                            <select name="" id="" onChange={(e)=>setPrice(prod.mrp[e.target.value])} className="custom-select">
                                {prod.size && prod.size.map((item,i) => <option value={i}>{item} - Rs.{prod.mrp[i]}</option>)}
                            </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 ml-4 pb-2 bg-light">
                                <small><span className="text-muted">MRP <span style={{textDecoration: "line-through"}}>Rs. {price} </span></span><span> Rs.{discountedPrice}</span></small>
                                <div className="row">
                                    <div className="col-1">
                                      <i class="fas fa-truck truck"></i> 
                                    </div>
                                    <div className="col-10" style={{lineHeight:1}}><small>Standard Delivery: Today 5:00PM - 8:00PM</small></div>
                                </div>
                                <div className="row">
                                    <div className="col-7 ml-n2">
                                        <div class="input-group flex-nowrap">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="addon-wrapping"><samll className="text-muted">Qty</samll></span>
                                            </div>
                                            <input type="text" className="form-control"  value={val} onChange={(e)=>setVal(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <button className="addBtn">ADD <i class="fas fa-shopping-basket"></i></button>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
