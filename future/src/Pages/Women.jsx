import Products from "../components/Products"

function Women() {
  return (
    <div className="women-page">
      <div className="women-hero">
        <div className="container">
          <h1 className="women-title">Women's Collection</h1>
          <p className="women-subtitle">Elegance meets innovation in our curated selection</p>
        </div>
      </div>
      <div className="container">
        <Products category="women" />
      </div>
    </div>
  )
}

export default Women

