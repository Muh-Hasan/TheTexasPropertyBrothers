import React from "react"
import Header from "../Header"
import NavigationBox from "../NavigationBox"
import Footer from "../Footer"

const Layout = ({ children, location }) => {
  return (
    <div>
      <Header />
      <div className='navigation-div'>
        {location.pathname !== "/" ? (
          <NavigationBox currentRoute={location.pathname} />
        ) : null}
      </div>
      <div>{children}</div>
      <Footer location={location} />
    </div>
  )
}

export default Layout
