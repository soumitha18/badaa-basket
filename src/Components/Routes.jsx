import React from 'react'
import { Route, useHistory } from "react-router-dom"
import { Home } from "./Pages/Home"
import { BBStar } from "./Pages/BBStar"
import { ProductItem } from "./Pages/ProductItem"
import { CategoryPage } from './Pages/CatergoryPage'
import ProfileDetail from "./Pages/Profile/ProfileDetail"
import OrderDetail from "./Pages/Profile/OrderDetail"
import Customer from "./Pages/Profile/Customer"
import WalletDetail from "./Pages/Profile/WalletDetail"
import MyBasket from "./Pages/Profile/MyBasket"
import { NavBar } from './NavBar'
import { Footer } from './Footer'

export const Routes = () => {
   
    return (
        <div>
            <Route path="/" component={NavBar} />
            <Route path="/" exact component={Home} />
            <Route path="/bb-star" component={BBStar} />
            <Route path="/category" component={CategoryPage} />
            <Route path="/product-item/:name" component={ProductItem} />
            <Route path="/product/:name" component={CategoryPage} />
            <Route path="/my-account/profile" component={ProfileDetail} />
            <Route path="/my-account/orders" component={OrderDetail} />
            <Route path="/my-account/customer-service" component={Customer} />
            <Route path="/my-account/wallet" component={WalletDetail} />
            <Route path="/my-account/basket" component={MyBasket} />
            <Route path="/" component={Footer} />
        </div>
    )
}
