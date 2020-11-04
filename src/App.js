import React from "react"
import { NavBar } from "./Components/NavBar"
import { Home } from "./Components/Pages/Home"
import { Footer } from "./Components/Footer"
import SignInAndSignUP from "./Components/SignInAndSignUp"
// import { ProductItem } from "./Components/Pages/ProductItem"

function App() {
  return (
    <div>
      <NavBar />
      <SignInAndSignUP />
      {/* <Home /> */}
      {/* <ProductItem /> */}
      <Footer />
    </div>
  );
}

export default App;
