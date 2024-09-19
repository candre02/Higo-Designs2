// import files
import React from "react";
// import pages
import About from "./pages/About.js";
import Shop from "./pages/Shop.js";
import Services from "./pages/Services.js";
import HigoDesigns from "./pages/HigoDesigns.js";
import Payment from "./pages/Payment.js";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import chakraProvider element
import { ChakraProvider } from "@chakra-ui/react";
// import elements
import Footer from "./components/Footer.js"
import NavBar from "./components/NavBar";



// app function
function App() {
  return (

      <ChakraProvider>
        <Router basename="/Higo-Designs2">
          <div className="App">
            <NavBar />
            <Routes>
              <Route exact path="/" element={<HigoDesigns />} />
              <Route exact path="/about" element={<About/>} />
              <Route exact path="/shop" element={<Shop/>} />
              <Route exact path="/services" element={<Services/>} />
              {/* <Route exact path="/payment" element={<Payment/>} /> */}
            </Routes>
            <Footer />
          </div>
        </Router>
      </ChakraProvider>
  )
}

// export app
export default App;