import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Slide from "@material-ui/core/Slide"
import Logo from "../../assets/img/logo.png"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Fab from "@material-ui/core/Fab"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import Zoom from "@material-ui/core/Zoom"

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

function ElevationScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}


const Header = props => {
  const classes = useStyles()
  return (
    <div className="header">
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar>
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>

            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  )
}

export default Header

// <IconButton
// edge="start"
// className={classes.menuButton}
// color="inherit"
// aria-label="menu"
// >
// <MenuIcon />
// </IconButton>
