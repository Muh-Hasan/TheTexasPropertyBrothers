import React from "react"
import Header from "../Header"
import NavigationBox from "../NavigationBox"
import Footer from "../Footer"

const Layout = ({ children, location }) => {
  return (
    <div>
      <Header />
      {location.pathname !== "/" ? (
        <NavigationBox currentRoute={location.pathname} />
      ) : null}
      <div>{children}</div>
      <Footer location={location} />
    </div>
  )
}

export default Layout
