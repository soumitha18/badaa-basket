import React from "react"
import { ProductItem } from "./Components/Pages/ProductItem"

function App() {

  const data = {
    "productName": "Sugar",
    "imageUrl": "https://www.bigbasket.com/media/uploads/p/l/40019396_8-bb-popular-sugar.jpg",
    "brandName": "BB Popular",
    "ratings": 4.0,
    "reviews": 0,
    "reviewList": [],
    "subCategory": "Salt, sugar & Jaggery",
    "category": "Foodgrains, oils & Masala",
    "size": ["1 kg", "2 kg", "5 kg"],
    "mrp": [55, 110, 275],
    "offers": 20,
    "description": "Almonds come in many varieties and the BB Royal California badam or almonds are premiere choice of many customers at bigbasket. The sweet and nutty taste of the almonds is combined here with hygienically packing to ensure freshness of these Californian Almonds. "
  }
  return (
    <div>
      <ProductItem data={data} />
    </div>
  );
}

export default App;
