import React from "react"
import { Grid, Divider } from "@material-ui/core"
import TwitterEmbed from "./TwitterEmbed"
import { useMediaQuery } from "react-responsive"
import background from "../brilliant.png"
import styles from "./Footer.module.css"
import BitcoinTipJar from "./BitcoinTipJar"
import Disclaimer from "./Disclaimer"

function Footer(props) {
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
        style={{
          textAlign: "center",
          padding: "10px",
          backgroundColor: "white",
          backgroundImage: `url(${background})`,
        }}
      >
        <Grid item>
          <TwitterEmbed />
        </Grid>

        {isDesktopOrLaptop && (
          <Divider
            orientation="vertical"
            flexItem
            style={{ marginTop: "30px", marginBottom: "30px" }}
          />
        )}

        <BitcoinTipJar />

        <Grid
          item
          xs={12}
          style={{
            alignContent: "center",
          }}
        >
          <Disclaimer />
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
