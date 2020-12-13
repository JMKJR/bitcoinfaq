import React, { useState } from "react"
import { Paper } from "@material-ui/core"
import { Box } from "@material-ui/core"
import { Typography } from "@material-ui/core"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoins } from "@fortawesome/free-solid-svg-icons"
import background from "../subtle-carbon.png"

CategoryPaper.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
}

function CategoryPaper(props) {
  const { title, icon } = props

  const [isHovered, setHovered] = useState(false)

  function toggleHover() {
    setHovered(!isHovered)
  }

  return (
    <a
      href={`#${title.replace(/\s+/g, "-").toLowerCase()}`}
      style={{ textDecoration: "none" }}
    >
      <div
        style={{
          background:
            "linear-gradient(to right top, #eeaf61, #f2a85f, #f5a05f, #f89860, #fb9062)",
          padding: "2px",
          borderRadius: "3px",
          transition: "transform .3s ease-out",
          transform: isHovered ? "translate(0, -5px)" : "",
        }}
      >
        <Paper
          style={{
            backgroundColor: isHovered ? "#62828180" : "#121B23",
            border: "1px solid",
            borderRadius: "3px",
            borderColor: "#324B51",
            cursor: "pointer",
            textAlign: "center",
            //backgroundImage: `url(${background})`,
          }}
          elevation={isHovered ? 6 : 1}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          <Box p={4}>
            <img
              src={"https:" + icon}
              style={{ color: "white", width: "50px", height: "auto" }}
            />
            <Typography
              style={{
                fontFamily: "Titillium Web",
                color: "white",
                fontSize: "25px",
              }}
              variant="h4"
            >
              {title}
            </Typography>
          </Box>
        </Paper>
      </div>
    </a>
  )
}

export default CategoryPaper
