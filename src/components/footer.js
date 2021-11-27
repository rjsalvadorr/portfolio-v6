import * as React from "react"

import NavigationToolbar from "./navigation-row"

const Footer = ({ isHome, isPost }) => (
  <div className="footer">
    <div className="footer-nav-background"></div>
    <div className="footer-container">
      <NavigationToolbar />
      <div className="footer-text-wrapper">
          <span className="footer-text">
            © {new Date().getFullYear()} &nbsp;<span className="text-fade">//</span> &nbsp;R. J. Salvador
          </span>
      </div>
    </div>
  </div>
);

export default Footer
