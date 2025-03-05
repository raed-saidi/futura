function Newsletter() {
    return (
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-container">
            <div className="newsletter-grid">
              <div className="newsletter-text">
                <h2 className="newsletter-title">Join Our Newsletter</h2>
                <p className="newsletter-description">
                  Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
                </p>
              </div>
              <div className="newsletter-form-container">
                <div className="newsletter-form">
                  <input type="email" placeholder="Enter your email" className="newsletter-input" />
                  <button className="button white">Subscribe</button>
                </div>
                <p className="newsletter-disclaimer">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Newsletter
  
  