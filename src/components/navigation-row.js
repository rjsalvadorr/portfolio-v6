import * as React from "react"

import NavigationButton from "./navigation-button"

const NavigationRow = () => (
  <div className="navigation-row">
    <div className="nav-btn-container">
      <NavigationButton buttonId="home" buttonType="link" isActive={true} />
      <NavigationButton buttonId="about" buttonType="link" isActive={true} />
      <NavigationButton buttonId="cv" buttonType="link" isActive={true} />
      <NavigationButton buttonId="" buttonType="" isActive={false} />
      <NavigationButton buttonId="" buttonType="" isActive={false} />
      <NavigationButton buttonId="left" buttonType="ui" isActive={false} />
      <NavigationButton buttonId="right" buttonType="ui" isActive={false} />
    </div>
  </div>
);

export default NavigationRow
