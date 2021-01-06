import React from "react"
import { Grid, Divider } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useMediaQuery } from "react-responsive"
import background from "../images/brilliant.png"
import TwitterEmbed from "./TwitterEmbed"
import styles from "./Footer.module.css"
import BitcoinTipJar from "./BitcoinTipJar"
import Disclaimer from "./Disclaimer"

const useStyles = makeStyles({
  footerContainer: {
    textAlign: "center",
    padding: "10px",
    backgroundColor: "white",
    backgroundImage: `url(${background})`,
  },
  divider: {
    marginTop: "30px",
    marginBottom: "30px",
  },
  centeredContent: {
    alignContent: "center",
  },
})

function Footer(props) {
  const classes = useStyles()
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  })

  return (
    <div className={styles.footerBorder}>
      <Grid
        item
        container
        justify="space-evenly"
        alignItems="center"
        className={classes.footerContainer}
      >
        <Grid item>
          <TwitterEmbed />
        </Grid>

        {isDesktopOrLaptop && (
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />
        )}

        <BitcoinTipJar />

        <Grid item xs={12} className={classes.centeredContent}>
          <Disclaimer />
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
