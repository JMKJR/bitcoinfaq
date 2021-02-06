import React from "react"
import Footer from "../components/Footer"
import { CssBaseline } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import { Helmet } from "react-helmet"
import Konami from "react-konami-code"
import logo from "../images/bitcoinFAQLogo.png"
import favicon from "../images/bitcoinFAQFavicon.png"
import Categories from "../components/Categories"
import CategorySelection from "../components/CategorySelection"
import styles from "./index.module.css"

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
        <title>What is Bitcoin? What gives Bitcoin value? | BitcoinFAQ</title>
        <meta
          name="description"
          content="How does Bitcoin work? What is Bitcoin used for? People aren't spending Bitcoin? How does Bitcoin Mining work?"
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
