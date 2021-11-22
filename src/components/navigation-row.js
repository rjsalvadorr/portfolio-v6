import * as React from "react"

import NavigationButton from "./navigation-button"

const NavigationRow = () => (
  <div className="navigation-row">
    <div className="nav-btn-container">
      <NavigationButton buttonId="home" buttonType="link" />
      <NavigationButton buttonId="about" buttonType="link" />
      <NavigationButton buttonId="cv" buttonType="link" />
      <NavigationButton buttonId="" buttonType="" />
      <NavigationButton buttonId="" buttonType="" />
      <NavigationButton buttonId="left" buttonType="ui" />
      <NavigationButton buttonId="right" buttonType="ui" />
    </div>
  </div>
);

export default NavigationRow
