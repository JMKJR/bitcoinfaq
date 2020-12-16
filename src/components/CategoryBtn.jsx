import React from "react"
import { Box } from "@material-ui/core"
import { Typography } from "@material-ui/core"
import PropTypes from "prop-types"
import styles from "./CategoryBtn.module.css"

CategoryBtn.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
}

function CategoryBtn(props) {
  const { title, icon } = props

  return (
    <a
      href={`#${title.replace(/\s+/g, "-").toLowerCase()}`}
      className={styles.link}
    >
      <div className={styles.btnBackground}>
        <div className={styles.btn}>
          <Box p={4}>
            <img src={"https:" + icon} className={styles.icon} alt={title} />
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
        </div>
      </div>
    </a>
  )
}

export default CategoryBtn
