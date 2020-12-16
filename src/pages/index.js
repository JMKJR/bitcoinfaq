import React from "react"
import Categories from "../components/Categories"
import Footer from "../components/Footer"
import { CssBaseline } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import CategorySelection from "../components/CategorySelection"
import logo from "../logo6.png"

export default function Home() {
  return (
    <div className="App">
      <CssBaseline />
      <link
        href="https://fonts.googleapis.com/css2?family=Titillium+Web&family=Ubuntu&display=swap"
        rel="stylesheet"
      />
      <main>
        <Box p={7}>
          <img
            src={logo}
            alt="BitcoinFAQ"
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
