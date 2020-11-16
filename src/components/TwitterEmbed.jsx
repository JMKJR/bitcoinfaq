import React from "react"

function TwitterEmbed(props) {
  return (
    <div style={{ minWidth: "350px", marginBottom: "15px" }}>
      <a
        className="twitter-timeline"
        href="https://twitter.com/JohnMichaelKuhn?ref_src=twsrc%5Etfw"
        data-chrome="nofooter transparent"
        data-width="530"
        data-height="200"
      >
        Tweets by JMK
      </a>
    </div>
  )
}

export default TwitterEmbed
