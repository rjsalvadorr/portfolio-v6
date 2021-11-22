import * as React from "react"

import iconPlacholderDark from "../images/icon-placeholder-dark.png"

const NavigationButton = () => (
  <div className="navigation-button">
    <div className="navigation-icon-wrapper">
      <img className="navigation-icon" src={iconPlacholderDark} alt="navigation icon" />
    </div>
  </div>
);

export default NavigationButton