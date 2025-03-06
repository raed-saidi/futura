import Products from "../components/Products"

function NewArrivalsPremium() {
  return (
    <div className="new-arrivals-page">
      <div className="new-arrivals-hero">
        <div className="container">
          <h1 className="new-arrivals-title">New Premium Arrivals</h1>
          <p className="new-arrivals-subtitle">Be the first to discover our latest premium collections</p>
        </div>
      </div>
      <div className="container">
        <Products category="new" brandType="premium" />
      </div>
    </div>
  )
}

export default NewArrivalsPremium

