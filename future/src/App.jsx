import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Women from "./pages/Women"
import Men from "./pages/Men"
import NewArrivals from "./pages/NewArrivals"
import ShoppingCart from "./components/ShoppingCart"
import ScrollToTop from "./components/ScrollToTop"
import Chatbot from "./components/Chatbot"
import { CartProvider } from "./CartContext"
import { ThemeProvider } from "./ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <div className="app-container">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/women" element={<Women />} />
                <Route path="/men" element={<Men />} />
                <Route path="/new" element={<NewArrivals />} />
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
  )
}

export default App

