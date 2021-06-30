import React from "react"
import Fab from "@material-ui/core/Fab"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import { Helmet } from "react-helmet"
import ScrollTop from "./ScrollTop"
import Header from "../Header"
import NavigationBox from "../NavigationBox"
import Footer from "../Footer"

const Layout = props => {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Helmet>
      <Header />
      <div className="navigation-div" id="back-to-top-anchor">
        {props.location.pathname !== "/" ? (
          <NavigationBox currentRoute={props.location.pathname} />
        ) : null}
      </div>
      <div>{props.children}</div>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Footer location={props.location} />
    </div>
  )
}

export default Layout
