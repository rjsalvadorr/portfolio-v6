import * as React from "react"

import NavigationButton from "./navigation-button"

const NavigationToolbar = ({ isHome, isPost }) => {
  const isNavArrowActive = !!isPost;
  return (
    <div className="navigation-toolbar">
      <div className="nav-btn-container">
        <NavigationButton buttonId="home" buttonType="link" isActive={true} />
        <NavigationButton buttonId="cv" buttonType="link" isActive={true} />
        <NavigationButton buttonId="about" buttonType="link" isActive={true} />
        <NavigationButton buttonId="" buttonType="" isActive={false} />
        <NavigationButton buttonId="" buttonType="" isActive={false} />
        <NavigationButton buttonId="left" buttonType="ui" isActive={isNavArrowActive} />
        <NavigationButton buttonId="right" buttonType="ui" isActive={isNavArrowActive} />
      </div>
    </div>
  );
}

export default NavigationToolbar
