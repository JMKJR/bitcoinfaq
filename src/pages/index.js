import React from "react"
import Categories from "../components/Categories"
import Footer from "../components/Footer"
import { CssBaseline } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import CategorySelection from "../components/CategorySelection"
import logo from "../logo6.png"
import styles from "./index.module.css"
import { Helmet } from "react-helmet"
import Konami from "react-konami-code"

export default function Home() {
  function handleClick(contentTitle) {
    typeof window !== "undefined" &&
      window.gtag("event", "click", { clicked: contentTitle })
  }

  return (
    <div className="App">
      <Helmet>
        <title>BitcoinFAQ - What is Bitcoin?</title>
        <meta
          name="description"
          content="The most frequently asked Bitcoin questions, answered."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web&family=Ubuntu&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <CssBaseline />
      <Konami
        action={() =>
          (window.location.href =
            "https://bitcointalk.org/index.php?topic=375643.0")
        }
      />
      <main>
        <Box p={7}>
          <img src={logo} alt="BitcoinFAQ" className={styles.logo} />
        </Box>
        <CategorySelection onClick={handleClick} />
        <Categories onClick={handleClick} />
        <Footer />
      </main>
    </div>
  )
}
