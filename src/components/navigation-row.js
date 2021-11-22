import * as React from "react"

import NavigationButton from "./navigation-button"

const NavigationRow = () => (
  <div className="navigation-row util-layout-bg1">
    <div className="nav-btn-container">
      <NavigationButton />
      <NavigationButton />
      <NavigationButton />
      <NavigationButton />
      <NavigationButton />
      <NavigationButton />
      <NavigationButton />
    </div>
  </div>
);

export default NavigationRow
