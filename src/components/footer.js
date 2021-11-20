import * as React from "react"

import NavigationRow from "./navigation-row"

const Footer = () => (
  <div className="footer">
    <NavigationRow />
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </div>
);

export default Footer
