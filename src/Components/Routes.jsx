import React from 'react'
import { Route } from "react-router-dom"
import { Home } from "./Pages/Home"
import { BBStar } from "./Pages/BBStar"
import { ProductItem } from "./Pages/ProductItem"
import { CategoryPage } from './Pages/CatergoryPage'

export const Routes = () => {
    return (
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/bb-star" component={BBStar} />
            <Route path="/category" component={CategoryPage} />
            <Route path="/product-item/:name" component={ProductItem} />
        </div>
    )
}
