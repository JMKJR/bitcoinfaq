import { Button, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import { Helmet } from "react-helmet"
import png404 from "../images/404white.png"
import favicon from "../images/bitcoinFAQFavicon.png"
import styles from "./404.module.css"

const useStyles = makeStyles({
  gridStyle: {
    color: "white",
    textAlign: "center",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
  font: { fontFamily: "Titillium Web" },
  returnHomeBtn: {
    background:
      "linear-gradient(to right top, #eeaf61, #f2a85f, #f5a05f, #f89860, #fb9062)",
  },
})

function NotFound() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Helmet>
        <title>404 | BitcoinFAQ</title>
        <meta property="og:image" content={favicon} />
        <meta name="twitter:image" content={favicon} />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Grid container direction="column" className={classes.gridStyle}>
        <Grid item>
          <img src={png404} className={styles.notFoundImage} alt="404" />
        </Grid>
        <Grid item className={classes.font}>
          <h2 className={styles.notFoundHeading}>Page not found</h2>
          <h4 className={styles.notFoundSubHeading}>
            The page you are looking for does not exist or may have been
            removed.
          </h4>
          <Button
            variant="contained"
            href="/"
            size="large"
            color="primary"
            className={classes.returnHomeBtn}
          >
            Back to Home
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default NotFound
