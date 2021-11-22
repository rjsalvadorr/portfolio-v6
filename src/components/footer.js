import * as React from "react"

import NavigationRow from "./navigation-row"

const Footer = () => (
  <div className="footer">
    <div className="footer-nav-background"></div>
    <div className="footer-container">
      <NavigationRow />
      <div className="footer-text-wrapper">
          <span className="footer-text">
            © RJ Salvador {new Date().getFullYear()}
          </span>
      </div>
    </div>
  </div>
);

export default Footer
