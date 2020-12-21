import { Button, Grid } from "@material-ui/core"
import React from "react"
import png404 from "../404white.png"
import styles from "./404.module.css"

function NotFound() {
  return (
    <React.Fragment>
      <link
        href="https://fonts.googleapis.com/css2?family=Titillium+Web&family=Ubuntu&display=swap"
        rel="stylesheet"
      />
      <Grid
        container
        direction="column"
        style={{
          color: "white",
          textAlign: "center",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item>
          <img src={png404} className={styles.notFoundImage} alt="404" />
        </Grid>
        <Grid item style={{ fontFamily: "Titillium Web" }}>
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
            style={{
              background:
                "linear-gradient(to right top, #eeaf61, #f2a85f, #f5a05f, #f89860, #fb9062)",
            }}
          >
            Back to Home
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default NotFound
