import React, { useState } from 'react'

export const SearchProductCard = ({ item, i, handleClick }) => {
    const [val, setVal] = useState(1)
    return (
        <div className="card p-2" key={i}>
            <div className="row">
                <div className="col-1">
                    <img src={item.imageUrl} alt={item.productName} width="40px" />
                </div>
                <div className="col-4" onClick={() => handleClick(item)}>
                    <small className="text-muted">{item.brandName}<br />
                        <b>{item.productName}</b></small>
                </div>
                <div className="col-2 p-0">
                    <small><b>{item.size[0]}</b></small>
                </div>
                <div className="col-1 p-0">
                    <small><b>{item.mrp[0]}/-</b></small>
                </div>
                <div className="col-2 px-1 pt-1">
                    <div className="input-group flex-nowrap">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrapping"><samll className="text-muted">Qty</samll></span>
                        </div>
                        <input type="text" value={val} onChange={e => setVal(e.target.value)} className="form-control" />
                    </div>
                </div>
                <div className="col-2 px-1">
                    <button className="addBtn">ADD <i className="fas fa-shopping-basket"></i></button>
                </div>
            </div>
        </div>
    )
}
