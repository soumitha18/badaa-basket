import React from 'react'
import { Route } from "react-router-dom"
import { Home } from "./Pages/Home"
import { BBStar } from "./Pages/BBStar"
import { ProductItem } from "./Pages/ProductItem"
import { CategoryPage } from './Pages/CatergoryPage'
import ProfileDetail from "./Pages/Profile/ProfileDetail"
import OrderDetail from "./Pages/Profile/OrderDetail"

export const Routes = () => {
    return (
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/bb-star" component={BBStar} />
            <Route path="/category" component={CategoryPage} />
            <Route path="/product-item/:name" component={ProductItem} />
            <Route path="/product/:name" component={CategoryPage} />
            <Route path="/my-account/profile" component={ProfileDetail} />
            <Route path="/my-account/orders" component={OrderDetail} />
        </div>
    )
}
