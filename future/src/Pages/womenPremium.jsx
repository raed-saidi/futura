import Products from "../components/Products"

function womenPremium() {
  return (
    <div className="women-page">
      <div className="women-hero">
        <div className="container">
          <h1 className="women-title">Women's Premium Brands</h1>
          <p className="women-subtitle">Discover our curated selection of premium women's fashion</p>
        </div>
      </div>
      <div className="container">
        <Products category="women" brandType="premium" />
      </div>
    </div>
  )
}

export default womenPremium

