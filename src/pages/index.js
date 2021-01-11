import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Footer from "../components/Footer"
import { CssBaseline } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import { Helmet } from "react-helmet"
import Konami from "react-konami-code"
import { useMediaQuery } from "react-responsive"
import logo from "../images/bitcoinFAQLogo.png"
import favicon from "../images/bitcoinFAQFavicon.png"
import Categories from "../components/Categories"
import CategorySelection from "../components/CategorySelection"
import styles from "./index.module.css"

export default function Home({ data }) {
  function handleClick(contentTitle) {
    typeof window !== "undefined" &&
      window.gtag("event", "click", { clicked: contentTitle })
  }

  const sources = [data.mobileImage.childImageSharp.fixed]

  const isMobile = useMediaQuery({
    query: "(max-width: 425px)",
  })

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
          {isMobile ? (
            <Img fixed={sources} alt="BitcoinFAQ" />
          ) : (
            <img src={logo} alt="BitcoinFAQ" className={styles.logo} />
          )}
        </Box>
        <CategorySelection onClick={handleClick} />
        <Categories onClick={handleClick} />
        <Footer />
      </main>
    </div>
  )
}

export const query = graphql`
  query {
    mobileImage: file(relativePath: { eq: "bitcoinFAQLogo.png" }) {
      childImageSharp {
        fixed(height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
