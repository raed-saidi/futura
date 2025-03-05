import Products from "../components/Products"

function NewArrivals() {
  return (
    <div className="new-arrivals-page">
      <div className="new-arrivals-hero">
        <div className="container">
          <h1 className="new-arrivals-title">New Arrivals</h1>
          <p className="new-arrivals-subtitle">Be the first to discover our latest innovations</p>
        </div>
      </div>
      <div className="container">
        <Products category="new" />
      </div>
    </div>
  )
}

export default NewArrivals

