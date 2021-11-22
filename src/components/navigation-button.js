import * as React from "react"
import { Link } from "gatsby"

import iconPlacholderDark from "../images/icon-placeholder-dark.png"

const getLink = (buttonId) => {
  const linkMap = {
    'home': '/',
    'about': '/about',
    'cv': '/cv',
  }

  if (!linkMap[buttonId]) {
    return 'null'
  }

  return linkMap[buttonId]
}

const NavigationButton = ({ buttonType, buttonId }) => {

  if(!!buttonId) {
    if(buttonType === 'link') {
      return (
        <Link to={getLink(buttonId)} itemProp="url">
          <div className="navigation-button">
            <div className="navigation-icon-wrapper">
              <img className="navigation-icon" src={iconPlacholderDark} alt="navigation icon" />
            </div>
          </div>
        </Link>
      )
    }
  
    if(buttonType === 'ui') {
      return (
        <div className="navigation-button">
          <div className="navigation-icon-wrapper">
            <img className="navigation-icon" src={iconPlacholderDark} alt="navigation icon" />
          </div>
        </div>
      )
    }
  }

  return (
    <div className="navigation-button">
      <div className="navigation-icon-wrapper">
      </div>
    </div>
  )
};

export default NavigationButton
