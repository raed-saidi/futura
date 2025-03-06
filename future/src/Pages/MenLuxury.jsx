import Products from "../components/Products"

function MenLuxury() {
  return (
    <div className="men-page luxury">
      <div className="men-hero luxury">
        <div className="container">
          <h1 className="men-title">Men's Luxury Brands</h1>
          <p className="men-subtitle">Indulge in our exclusive collection of luxury men's fashion</p>
        </div>
      </div>
      <div className="container">
        <Products category="men" brandType="luxury" />
      </div>
    </div>
  )
}

export default MenLuxury

