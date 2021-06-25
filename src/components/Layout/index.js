import React from "react"
import Header from "../Header"
import NavigationBox from "../NavigationBox"
const Layout = ({ children, location }) => {
  return (
    <div>
      <NavigationBox currentRoute={location.pathname} />
      <div>{children}</div>
    </div>
  )
}

export default Layout
