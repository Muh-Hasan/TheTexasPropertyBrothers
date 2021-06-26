import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
// import AppBar from "@material-ui/core/AppBar"
// import Toolbar from "@material-ui/core/Toolbar"
// import Typography from "@material-ui/core/Typography"
// import Button from "@material-ui/core/Button"
// import IconButton from "@material-ui/core/IconButton"
// import MenuIcon from "@material-ui/icons/Menu"

import Logo from "../../assets/img/logo.png"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <div className="header">
      <div className="desktopbar contain">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="menu">
          <ul className="list">
            <li>
              <Link to="/" activeClassName="active-desktopbar">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/properties" activeClassName="active-desktopbar">
                Properties
              </Link>
            </li>
            <li>
              <Link to="/services" activeClassName="active-desktopbar">
                Services
              </Link>
            </li>
            <li>
              <Link to="/blogs" activeClassName="active-desktopbar">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about-us" activeClassName="active-desktopbar">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" activeClassName="active-desktopbar">
                Contant Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
