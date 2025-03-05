import Products from "../components/Products"

function Men() {
  return (
    <div className="men-page">
      <div className="men-hero">
        <div className="container">
          <h1 className="men-title">Men's Collection</h1>
          <p className="men-subtitle">Bold designs for the modern man</p>
        </div>
      </div>
      <div className="container">
        <Products category="men" />
      </div>
    </div>
  )
}

export default Men

