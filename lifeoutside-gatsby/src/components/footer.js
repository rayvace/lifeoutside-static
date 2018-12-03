import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="site-footer-inner has-top-divider">
        <ul className="footer-links list-reset">
          <li>
            <a href="mailto:hello@trylifeoutside.com">Contact</a>
          </li>
          <li>
            <Link to="/terms">Terms</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>
        </ul>
        <div className="footer-copyright">&copy; 2018 Life Outside, all rights reserved</div>
      </div>
    </div>
  </footer>
)

export default Footer
