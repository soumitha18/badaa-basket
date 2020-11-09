import React from "react";
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import { Routes } from "./Components/Routes"
import { Checkout } from "./Components/Pages/Checkout"

function App() {
  return (
    <div>
      <NavBar />
      <Routes />
      <Footer />
      {/* <Checkout/> */}
    </div>
  );
}

export default App;
