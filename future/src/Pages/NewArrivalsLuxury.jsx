import Products from "../components/Products"

function NewArrivalsLuxury() {
  return (
    <div className="new-arrivals-page luxury">
      <div className="new-arrivals-hero luxury">
        <div className="container">
          <h1 className="new-arrivals-title">New Luxury Arrivals</h1>
          <p className="new-arrivals-subtitle">Explore our exclusive new luxury collections</p>
        </div>
      </div>
      <div className="container">
        <Products category="new" brandType="luxury" />
      </div>
    </div>
  )
}

export default NewArrivalsLuxury

