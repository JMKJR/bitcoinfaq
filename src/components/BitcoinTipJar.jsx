import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import qr from "../qr.png"
import styles from "./BitcoinTipJar.module.css"

const useStyles = makeStyles({
  gradientBorder: {
    padding: "3px",
    background:
      "linear-gradient(to right top, #eeaf61, #f2a85f, #f5a05f, #f89860, #fb9062)",
    borderRadius: "3px",
    maxWidth: "490px",
    minWidth: "350px",
    overflow: "hidden",
  },
  gridBackground: {
    background: "#121B22",
    maxWidth: "490px",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: "3px",
  },
  flexGrow: {
    flexGrow: 1,
  },
  tipLabel: {
    flexGrow: 1,
    color: "white",
  },
})

function BitcoinTipJar(props) {
  const classes = useStyles()

  return (
    <Grid item container className={classes.gradientBorder}>
      <Grid item container className={classes.gridBackground}>
        <Grid item className={classes.flexGrow}>
          <img src={qr} className={styles.qr} alt={"QR code"} />
        </Grid>
        <Grid item className={classes.tipLabel}>
          <p className={styles.tipTitle}>Bitcoin Tip Jar</p>
          <p className={styles.btcAddress}>
            bc1qjvctq5h9awxhz2z5s0c6lxvfm4zt4u86aw464e
          </p>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default BitcoinTipJar
