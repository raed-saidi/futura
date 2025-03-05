function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-heading">Shop</h3>
            <ul className="footer-links">
              <li>
                <a href="/women" className="footer-link">
                  Women
                </a>
              </li>
              <li>
                <a href="/men" className="footer-link">
                  Men
                </a>
              </li>
              <li>
                <a href="/new" className="footer-link">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="/sale" className="footer-link">
                  Sale
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li>
                <a href="/about" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="footer-link">
                  Careers
                </a>
              </li>
              <li>
                <a href="/stores" className="footer-link">
                  Store Locator
                </a>
              </li>
              <li>
                <a href="/sustainability" className="footer-link">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Support</h3>
            <ul className="footer-links">
              <li>
                <a href="/help" className="footer-link">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/returns" className="footer-link">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="/shipping" className="footer-link">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Connect</h3>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">© 2025 FUTURA. All rights reserved.</p>
            <div className="legal-links">
              <a href="/privacy" className="legal-link">
                Privacy Policy
              </a>
              <a href="/terms" className="legal-link">
                Terms of Service
              </a>
              <a href="/cookies" className="legal-link">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;