import * as React from "react"

import NavigationRow from "./navigation-row"

const Footer = () => (
  <div className="footer">
    <NavigationRow />
    <div className="footer-text-wrapper">
        <span className="footer-text">
          © RJ Salvador {new Date().getFullYear()}
        </span>
    </div>
  </div>
);

export default Footer
