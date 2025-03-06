import Products from "../components/Products"

function MenPremium() {
  return (
    <div className="men-page">
      <div className="men-hero">
        <div className="container">
          <h1 className="men-title">Men's Premium Brands</h1>
          <p className="men-subtitle">Discover our curated selection of premium men's fashion</p>
        </div>
      </div>
      <div className="container">
        <Products category="men" brandType="premium" />
      </div>
    </div>
  )
}

export default MenPremium

