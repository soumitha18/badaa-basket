import React from 'react'
import { Route } from "react-router-dom"
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
import { StickyNav } from "./StickyNav"
import { Footer } from './Footer'
import { Checkout } from './Pages/Checkout'
import ProfileEdit from './Pages/Profile/ProfileEdit'
import DeliveryAddress from "./Pages/Profile/DeliveryAddress"
import { useEffect } from 'react'
import { useState } from 'react'

export const Routes = () => {
    const [scroll, setScroll] = useState(0)

    const listenToScrollEvent = () => {
        document.addEventListener("scroll", () => {
            requestAnimationFrame(() => {
                calculateScrollDistance();
            });
        });
    }

    const calculateScrollDistance = () => {
        const scrollTop = window.pageYOffset; // how much the user has scrolled by
        const winHeight = window.innerHeight;
        const docHeight = getDocHeight();

        const totalDocScrollLength = docHeight - winHeight;
        const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)
        setScroll(scrollPostion)
    }

    const getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }

    useEffect(() => {
        listenToScrollEvent()
    })

    return (
        <div>
            {
                scroll <= 1 ? <Route path="/" component={NavBar} /> : <Route path="/" component={StickyNav} />
            }
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
            <Route path="/checkout" component={Checkout} />
            <Route path="/my-account/profile-edit" component={ProfileEdit} />
            <Route path="/my-account/delivery-address" component={DeliveryAddress} />
            <Route path="/" component={Footer} />
        </div>
    )
}
