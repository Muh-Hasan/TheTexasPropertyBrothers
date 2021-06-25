import React from "react"
import Header from "../Header"
import NavigationBox from "../NavigationBox"
import Footer from "../Footer"

const Layout = ({ children, location }) => {
  return (
    <div>
      <NavigationBox currentRoute={location.pathname} />
      <div>{children}</div>
      <Footer location={location} />
    </div>
  )
}

export default Layout
