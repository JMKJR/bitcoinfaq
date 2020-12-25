import React from "react"
import Footer from "../components/Footer"
import { CssBaseline } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import { Helmet } from "react-helmet"
import Konami from "react-konami-code"
import logo from "../bitcoinFAQLogo.png"
import favicon from "../bitcoinFAQFavicon.png"
import styles from "./index.module.css"
import Categories from "../components/Categories"
import CategorySelection from "../components/CategorySelection"

export default function Home() {
  function handleClick(contentTitle) {
    typeof window !== "undefined" &&
      window.gtag("event", "click", { clicked: contentTitle })
  }

  return (
    <div className="App">
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>BitcoinFAQ - What is Bitcoin?</title>
        <meta
          name="description"
          content="The most frequently asked Bitcoin questions, answered."
        />
        <meta property="og:image" content={favicon} />
        <meta name="twitter:image" content={favicon} />
        <link rel="icon" href={favicon} />
        <script
          data-ad-client="ca-pub-6637229751524719"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
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
