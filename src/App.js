import React from "react";
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import { Routes } from "./Components/Routes"
import { Demo } from "./Components/Pages/demo";

function App() {
  return (
    <div>
      <NavBar />
      <Demo />
      {/* <Routes /> */}
      <Footer />
    </div>
  );
}

export default App;
