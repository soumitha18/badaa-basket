import React from "react";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/Pages/Home";
import { Footer } from "./Components/Footer";
// import { ProductItem } from "./Components/Pages/ProductItem"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      {/* <ProductItem /> */}
      <Footer />
    </div>
  );
}

export default App;
