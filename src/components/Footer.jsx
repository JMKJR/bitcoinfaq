import React from "react"
import { Grid, Divider } from "@material-ui/core"
import TwitterEmbed from "./TwitterEmbed"
import qr from "../qr.png"
import { useMediaQuery } from "react-responsive"
import background from "../brilliant.png"

function Footer(props) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  })

  return (
    <div
      style={{
        marginTop: "75px",
        background:
          "linear-gradient(to right top, #eeaf61, #f2a85f, #f5a05f, #f89860, #fb9062)",
        paddingTop: "2px",
      }}
    >
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

        <Grid
          item
          container
          style={{
            padding: "3px",
            background:
              "linear-gradient(to right top, #eeaf61, #f2a85f, #f5a05f, #f89860, #fb9062)",
            borderRadius: "3px",
            maxWidth: "530px",
            minWidth: "350px",
            overflow: "hidden",
          }}
        >
          <Grid
            item
            container
            style={{
              background: "#121B22",
              maxWidth: "530px",
              alignItems: "center",
              overflow: "hidden",
              borderRadius: "3px",
            }}
          >
            <Grid item style={{ flexGrow: 1 }}>
              <img
                src={qr}
                style={{
                  width: "150px",
                  height: "auto",
                  alt: "bitcoin qr code",
                  marginTop: "5px",
                }}
              />
            </Grid>
            <Grid
              item
              style={{
                flexGrow: 1,
              }}
            >
              <p
                style={{
                  color: "white",
                  fontFamily: "Titillium Web",
                  fontSize: "30px",
                  marginBottom: "0px",
                  marginTop: "0px",
                }}
              >
                Bitcoin Tip Jar
              </p>

              <p
                style={{
                  color: "white",
                  fontSize: "15px",
                  marginTop: "0px",
                }}
              >
                bc1qjvctq5h9awxhz2z5s0c6lxvfm4zt4u86aw464e
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            //backgroundColor: "white",
            alignContent: "center",
          }}
        >
          <p>
            All information is for educational purposes only and should not be
            construed as investment advice.
          </p>
          <p>Copyright ©2020 John Michael Kuhn Jr.</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
