import * as React from "react"

const Footer = () => (
  <div className="footer">
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </div>
);

export default Footer
