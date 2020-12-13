import React from "react"
import Categories from "../components/Categories"
import Footer from "../components/Footer"
import { CssBaseline } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import CategorySelection from "../components/CategorySelection"
import logo from "../logo6.png"
import background from "../dark-fish-skin.png"

export default function Home() {
  document.body.style.backgroundColor = "#100E17"

  return (
    <div className="App" style={{}}>
      <CssBaseline />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Titillium+Web&family=Ubuntu&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Suez+One&display=swap"
        rel="stylesheet"
      ></link>
      <main
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#100E17",
          textAlign: "center",
          backgroundImage: `url(${background})`,
        }}
      >
        <Box p={7} style={{}}>
          <img
            src={logo}
            alt="bitcoinfaq"
            style={{ width: "300px", height: "auto" }}
          />
        </Box>
        <CategorySelection />
        <Categories />
        <Footer />
      </main>
    </div>
  )
}
