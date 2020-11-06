import React, { useState } from 'react'
import "./styles/navbar.modules.css"

export const Demo = () => {
    const [categoryState, setCategoryState] = useState("FV")
    const [subCategoryState, setSubCategoryState] = useState(0)
    const subCategoryObj = {
        FV: ["Fresh Vegetables", "Herbs & Seasonings", "Fresh Fruits", "Organic Fruits & Vegetables", "Exotic Fruits & Veggies", "Cuts & Sprouts", "Flowers Bouquets, Bunches"],
        FOM: ["Dols & Pulses", "Atta, Flours & Sooji", "Rice & Rice Product", "Edible Oils & Gees", "Masalas & Spices", "Organics Staples", "Dry Fruits"],
        BCB: ["Dairy", "Ice Cream & Desserts", "Breads & Buns", "Gourmet Bread", "Cookies, Rusk & Khari", "Cakes & Pastries", "Bakery Snacks"],
        B: ["Tea", "Energy & Soft Drinks", "Water", "Coffee", "Fruits Juice & Drinks", "Health Drink, Supplement"],
        SB: ["Chocolates & Candies", "Noodles,Pasta & Vermicelli", "Biscuits & Cookies", "Spreads, Sauces, Ketchup", "Breakfast Cereals", "Frozen Veggies & Snacks", "Ready To Cook & Eat", "Snacks & Namkeen", "Pickels & Chutney", "Indian Mithai"],
        BH: ["Makeup", "Health & Medicine", "Oral Care", "Feminine", "Bath & Hand Wash", "Hair Care", "Men's Grooming", "Skin Care", "Fragrances & Deos"],
        CH: ["Detergents & DishWash", "All Purpose Cleaners", "Car & Shoes Care", "Stationery", "Fresheners & Repellents", "Disposables, Garbage Bags", "Mops, Brushes & Scrubs", "Pooja Needs", "Bins & Bathrooms Ware", "Party & Festival Needs"],
        KGP: ["Appliances & Electricals", "Pet Food & Accessories", "Cookware & Non Stick", "Kitchen Accessories", "Bakeware", "Gardening", "Flask"],
        EMF: ["Eggs", "Poultry", "Fish & SeaFish", "Mutton & Lamb", "Marinades", "Other Meats"],
        GW: ["Oils", "Dairy & Cheese", "Cooking & Baking Needs", "Chocolates", "Pasta & Soup", "Cereals & Breakfast"],
        BC: ["Diapers", "Baby Food & Formula", "Baby Bath & Hygiene", "Mothers & Maternity", "Feeding & Nursing", "Baby Accessories"],
        ALL: []
    }
    const productObj = {
        FV: [
            ["Potato, Onion & Tomato", "Cucumber & Capsicum", "Beans, Brinjals & Okra", "Gourd, Pumpkin, Drumstick", "Leafy Vegetables", "Root Vegetables", "Cabbage & Cauliflower", "Specialty"],
            ["Lemon, Ginger & Garlic", "Indian & Exotic Herbs"],
            ["Mangoes", "Kiwi, Melon, Citrus Fruit", "Seasonal Fruits", "Banana, Sapota & Papaya", "Apples & Pomegranate"],
            ["Organic Vegetables", "Organic Fruits"],
            ["Exotic Fruits", "Exotic Vegetables"],
            []
        ],
        FOM: [[], [], []],
        BCB: [],
        B: [],
        SB: [],
        BH: [],
        CH: [],
        KGP: [],
        EMF: [],
        GW: [],
        BC: []
    }
    const productObjItem = productObj[categoryState]
    return (
        <div>
            <div className="border hoverDiv">Shop by Category
                <div className="innerHoverDiv">
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <div id="category">
                            <p onMouseOver={() => setCategoryState("FV")} style={{ background: categoryState === "FV" ? "whitesmoke" : null }}><small>Fruits & Vegetables</small></p>
                            <p onMouseOver={() => setCategoryState("FOM")} style={{ background: categoryState === "FOM" ? "whitesmoke" : null }}><small>Foodgrains, Oil & Masala</small></p>
                            <p onMouseOver={() => setCategoryState("BCB")} style={{ background: categoryState === "BCB" ? "whitesmoke" : null }}><small>Bakery, Cakes & Dairy</small></p>
                            <p onMouseOver={() => setCategoryState("B")} style={{ background: categoryState === "B" ? "whitesmoke" : null }}><small>Beverages</small></p>
                            <p onMouseOver={() => setCategoryState("SB")} style={{ background: categoryState === "SB" ? "whitesmoke" : null }}><small>Snacks & Branded Foods</small></p>
                            <p onMouseOver={() => setCategoryState("BH")} style={{ background: categoryState === "BH" ? "whitesmoke" : null }}><small>Beauty & Hygiene</small></p>
                            <p onMouseOver={() => setCategoryState("CH")} style={{ background: categoryState === "CH" ? "whitesmoke" : null }}><small>Cleaning & Household</small></p>
                            <p onMouseOver={() => setCategoryState("KGP")} style={{ background: categoryState === "KGP" ? "whitesmoke" : null }}><small>Kitchen, Garden & Pets</small></p>
                            <p onMouseOver={() => setCategoryState("EMF")} style={{ background: categoryState === "EMF" ? "whitesmoke" : null }}><small>Eggs, Meat & Fish</small></p>
                            <p onMouseOver={() => setCategoryState("GW")} style={{ background: categoryState === "GW" ? "whitesmoke" : null }}><small>Gourmet & World Food</small></p>
                            <p onMouseOver={() => setCategoryState("BC")} style={{ background: categoryState === "BC" ? "whitesmoke" : null }}><small>Baby Care</small>.</p>
                            <p onMouseOver={() => setCategoryState("ALL")} style={{ background: categoryState === "ALL" ? "whitesmoke" : null }}><small>View All</small></p>
                        </div>
                        <div id="subCategory">
                            <div>
                                {
                                    subCategoryObj[categoryState] && subCategoryObj[categoryState].map((item, i) => <p onMouseOver={() => setSubCategoryState(i)} style={{ background: subCategoryState === i ? "white" : null }} key={i}><small>{item}</small></p>)
                                }
                            </div>
                        </div>
                        <div id="product">
                            <div>
                                {
                                    productObjItem && productObjItem[subCategoryState] && productObjItem[subCategoryState].map((item, i) => <p key={i}><small>{item}</small></p>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
