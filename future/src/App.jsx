import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Women from "./Pages/Women";
import WomenPremium from "./Pages/WomenPremium";
import WomenLuxury from "./Pages/WomenLuxury";
import Men from "./Pages/Men";
import MenPremium from "./Pages/MenPremium";
import MenLuxury from "./Pages/MenLuxury";
import NewArrivals from "./Pages/NewArrivals";
import NewArrivalsPremium from "./Pages/NewArrivalsPremium";
import NewArrivalsLuxury from "./Pages/NewArrivalsLuxury";
import ShoppingCart from "./components/ShoppingCart";
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./components/Chatbot";
import { CartProvider } from "./CartContext";
import { ThemeProvider } from "./ThemeContext";
import { LanguageProvider } from "./LanguageContext";
import AboutUs from "./Pages/AboutUs";
import WorkInProgress from "./Pages/WorkInProgress";

function App() {
  console.log("App is rendering!");

  return (
    <LanguageProvider>
      <ThemeProvider>
        <CartProvider>
          <Router>
            <div className="app-container">
              <Header />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/women" element={<Women />} />
                  <Route path="/women/premium" element={<WomenPremium />} />
                  <Route path="/women/luxury" element={<WomenLuxury />} />
                  <Route path="/men" element={<Men />} />
                  <Route path="/men/premium" element={<MenPremium />} />
                  <Route path="/men/luxury" element={<MenLuxury />} />
                  <Route path="/new" element={<NewArrivals />} />
                  <Route path="/new/premium" element={<NewArrivalsPremium />} />
                  <Route path="/new/luxury" element={<NewArrivalsLuxury />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/faq" element={<WorkInProgress />} />
                  <Route path="/shipping" element={<WorkInProgress />} />
                  <Route path="/contact" element={<WorkInProgress />} />
                  <Route path="/size-guide" element={<WorkInProgress />} />
                  <Route path="/privacy" element={<WorkInProgress />} />
                  <Route path="/terms" element={<WorkInProgress />} />
                  <Route path="/sale" element={<WorkInProgress />} />
                  <Route path="*" element={<WorkInProgress />} />
                </Routes>
              </main>
              <Footer />
              <ShoppingCart />
              <ScrollToTop />
              <Chatbot />
            </div>
          </Router>
        </CartProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
