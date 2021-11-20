import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper util-layout-bg" data-is-root-path={isRootPath}>

      <div className="main-background">
        <div className="overlay"></div>
        <div className="effect"></div>
      </div>

      <div className="main-layout util-layout-bg1">
        <Header />
        <main className="util-layout-bg2">
          {children}
        </main>
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
