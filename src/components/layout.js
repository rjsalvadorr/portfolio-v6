import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, title, children, className }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  console.log(location, title, children, className);

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>

      <div className="main-background">
        <div className="overlay"></div>
        <div className="effect"></div>
      </div>

      <div className={`main-layout ${className}`}>
        <Header />
        <div className="main-wrapper">
          <main className="main-container">
            {children}
          </main>
        </div>
        <Footer />
        <div className="overlay"></div>
        <div className="effect"></div>
      </div>

      <div className="main-foreground">
        <div className="overlay"></div>
        <div className="effect"></div>
      </div>
    </div>
  )
}

export default Layout
