import React from "react"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Zoom from "@material-ui/core/Zoom"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

function ScrollTop(props) {
  const { children } = props
  const classes = useStyles()
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = event => {
    console.log(event.target.ownerDocument)
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    )
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}

export default ScrollTop