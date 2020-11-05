import Axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { useState } from "react"
import { useHistory } from 'react-router'

export const Demo = () => {
    const [search, setSearch] = useState("")
    const throttledVal = useThrottle(search, 1000)
    const [data, setData] = useState([])
    const history = useHistory()
    const [status, setStatus] = useState(true)

    useEffect(() => {
        if (search !== "") {
            Axios.get(`http://localhost:5000/searchproduct?name=${search}`)
                .then(res => {
                    setStatus(true)
                    setData(res.data)
                })
                .catch(err => console.log(err.response.data))
        }
    }, [throttledVal])

    useEffect(() => {
        if (search === "") {
            setStatus(false)
        }
    }, [search])

    const handleClick = (item) => {
        localStorage.setItem("product", JSON.stringify(item))
        history.push(`/product-item/${item.productName}`)
        setStatus(false)
    }

    return (
        <div className="text-center my-5">
            <input type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} /><button>Search</button>
            <div className="position-absolute px-2 text-left" style={{ zIndex: "10", marginLeft: "32%", width: "35%", height: "330px", overflow: "scroll", display: status ? "block" : "none" }}>
                {
                    data && data.map((item, i) => (
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
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-2 px-1">
                                    <button className="btn btn-success py-2 px-4">ADD</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

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