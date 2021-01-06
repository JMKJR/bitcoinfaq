import React from "react"
import { Box } from "@material-ui/core"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import styles from "./CategoryBtn.module.css"

CategoryBtn.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
}

const useStyles = makeStyles({
  btnTitle: {
    fontFamily: "Titillium Web",
    color: "white",
    fontSize: "25px",
  },
})

function CategoryBtn(props) {
  const { title, icon, onClick } = props
  const classes = useStyles()

  return (
    <a
      href={`#${title.replace(/\s+/g, "-").toLowerCase()}`}
      className={styles.link}
      onClick={() => onClick(title)}
    >
      <div className={styles.btnBackground}>
        <div className={styles.btn}>
          <Box p={4}>
            <img src={"https:" + icon} className={styles.icon} alt={title} />
            <Typography className={classes.btnTitle} variant="h4">
              {title}
            </Typography>
          </Box>
        </div>
      </div>
    </a>
  )
}

export default CategoryBtn
