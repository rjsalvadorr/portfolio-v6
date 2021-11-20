import * as React from "react"

import NavigationRow from "./navigation-row"
import iconPlacholderDark from "../images/icon-placeholder-dark.png"

const Header = () => (
  <div className="header">
    <div className="header-content">
      <div className="header-icon-wrapper">
        <img className="header-icon" src={iconPlacholderDark} alt="header icon" />
      </div>
      <div className="header-text-wrapper">
        <span className="header-text">
          Leverage agile frameworks to provide a robust synopsis for high level overviews.
        </span>
      </div>
    </div>
    <NavigationRow />
  </div>
);

export default Header
