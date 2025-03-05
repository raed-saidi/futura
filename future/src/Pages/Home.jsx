import Hero from "../Hero";
import Categories from "../Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Products />
      <Newsletter />
    </>
  );
}

export default Home;