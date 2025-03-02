import Header from "./Header"
import Hero from "./Hero"
import Categories from "./Categories"
import Products from "./Products"
import Newsletter from "./Newsletter"
import Footer from "./Footer"


function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Hero />
        <Categories />
        <Products />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App

