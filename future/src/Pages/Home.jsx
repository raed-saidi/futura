import Hero from "../Hero"
import Categories from "../Categories"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import { womenProducts } from "../data/womenProducts"
import { menProducts } from "../data/menProducts"
import { newArrivalsProducts } from "../data/newArrivalsProducts"

// Combine some products from each category for the home page
const featuredProducts = [...womenProducts.slice(0, 2), ...menProducts.slice(0, 2), ...newArrivalsProducts.slice(0, 4)]

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Products products={featuredProducts} />
      <Newsletter />
    </>
  )
}

export default Home

