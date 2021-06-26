import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Link from "@material-ui/core/Link"
import HomeIcon from "@material-ui/icons/Home"
import WhatshotIcon from "@material-ui/icons/Whatshot"
import GrainIcon from "@material-ui/icons/Grain"

const useStyles = makeStyles(theme => ({
  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}))

const getPage = name => {
  switch (name[1]) {
    case "about-us":
      return "About Us"
    case "properties":
      return "Properties"
    case "services":
      return "Services"
    case "blog":
      return "Blog"
  }
}

const NavigationBox = ({ routeTwo, currentRoute }) => {
  const classes = useStyles()
  let pageName = getPage(currentRoute.split("/"))
  return (
    <div className="navigationBox">
      <div className="contain d-flex align-items-center">
        <div className="pagename">
          <h1>{pageName}</h1>
        </div>
        <div className="breadcrumbs">
          <Breadcrumbs aria-label="breadcrumb" separator="›">
            <Link color="textPrimary" href="/" className={classes.link}>
              <HomeIcon className={classes.icon} />
            </Link>
            <p color="inherit">{pageName}</p>
          </Breadcrumbs>
        </div>
      </div>
    </div>
  )
}

export default NavigationBox
