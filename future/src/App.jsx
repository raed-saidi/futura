import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Women from "./pages/Women";
import WomenPremium from "./pages/WomenPremium";
import WomenLuxury from "./pages/WomenLuxury";
import Men from "./pages/Men";
import MenPremium from "./pages/MenPremium";
import MenLuxury from "./pages/MenLuxury";
import NewArrivals from "./pages/NewArrivals";
import NewArrivalsPremium from "./pages/NewArrivalsPremium";
import NewArrivalsLuxury from "./pages/NewArrivalsLuxury";
import AboutUs from "./pages/AboutUs";
import WorkInProgress from "./pages/WorkInProgress";
import ShoppingCart from "./components/ShoppingCart";
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./components/Chatbot";
import { CartProvider } from "./CartContext";
import { ThemeProvider } from "./ThemeContext";
import { LanguageProvider } from "./LanguageContext";
import { FilterProvider } from "./FilterContext";


function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <CartProvider>
          <FilterProvider>
            <Router>
              <div className="app-container">
                <Header />
                <main className="main-content">
                  <Routes>
                    <Route path="/" element={<Home />} />

                    {/* Women's routes */}
                    <Route path="/women" element={<Women />} />
                    <Route path="/women/premium" element={<WomenPremium />} />
                    <Route path="/women/luxury" element={<WomenLuxury />} />

                    {/* Men's routes */}
                    <Route path="/men" element={<Men />} />
                    <Route path="/men/premium" element={<MenPremium />} />
                    <Route path="/men/luxury" element={<MenLuxury />} />

                    {/* New Arrivals routes */}
                    <Route path="/new" element={<NewArrivals />} />
                    <Route path="/new/premium" element={<NewArrivalsPremium />} />
                    <Route path="/new/luxury" element={<NewArrivalsLuxury />} />

                    {/* About Us route */}
                    <Route path="/about" element={<AboutUs />} />

                    {/* Work in Progress catch-all route */}
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
          </FilterProvider>
        </CartProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App

