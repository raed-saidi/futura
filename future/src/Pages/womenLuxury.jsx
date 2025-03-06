import Products from "../components/Products"

function womenLuxury() {
  return (
    <div className="women-page luxury">
      <div className="women-hero luxury">
        <div className="container">
          <h1 className="women-title">Women's Luxury Brands</h1>
          <p className="women-subtitle">Indulge in our exclusive collection of luxury women's fashion</p>
        </div>
      </div>
      <div className="container">
        <Products category="women" brandType="luxury" />
      </div>
    </div>
  )
}

export default womenLuxury

