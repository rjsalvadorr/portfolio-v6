import * as React from "react"

import NavigationRow from "./navigation-row"
import iconPlacholderDark from "../images/icon-placeholder-dark.png"

const Header = () => (
  <div className="header">
    <div className="header-nav-background"></div>
    <div className="header-container">
      <div className="header-content">
        <div className="header-icon-wrapper">
          <img className="header-icon" src={iconPlacholderDark} alt="header icon" />
        </div>
        <div className="header-text-wrapper">
          <h4 className="header-title">RJ Salvador</h4>
          <span className="header-text">Web developer, designer</span>
        </div>
      </div>
      <NavigationRow />
    </div>
  </div>
);

export default Header
